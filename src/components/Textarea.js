import React , {useState} from "react";
// import './components/Textarea.css';


export default function Textarea(props) {
    const convertoupper = ()=>{
         let newText = text.toUpperCase();
         setText(newText);
    }
    const convertolower = ()=>{
         let newText = text.toLowerCase();
         setText(newText);
    }
    const cleartext = ()=>{
         let newText = "";
         setText(newText);
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        // props.showAlert("Copied to Clipboard!", "success");
    }
    const handleExtraSpaces = ()=>{
         let newText = text.split(/[ ]+/);
         setText(newText.join(" "))
    }
    const handleonchange = (event)=>{
        // console.log("on change");
        setText(event.target.value)
    }
    const [text , setText] = useState('Enter the text here');

    return (
        <>
        <div className="container my-5 ">
            <div className="mb-1">
                <label for="exampleFormControlTextarea1" className="form-label "> <h1>{props.heading}</h1></label>
                <textarea className="form-control" id="Textarea" rows="11" value={text} onChange={handleonchange}></textarea>
            </div>
                <div className="col-auto my-3">
                    <button type="submit" disabled={text.length===0} className="btn btn-primary mb-3 mx-1 bg-dark text-info icon-link icon-link-hover"  onClick={convertoupper}>Convert to Uppercase</button>
                    <button type="submit" disabled={text.length===0} className="btn btn-primary mb-3 mx-1 bg-dark text-info" onClick={convertolower}>Convert to Lowercase</button>
                    <button  type="submit" disabled={text.length===0} className="btn btn-primary mb-3 mx-1 bg-dark text-info" onClick={cleartext}>Clear Text</button>
                    <button disabled={text.length===0} className="btn btn-primary mb-3 mx-1 bg-dark text-info" onClick={handleCopy}>Copy Text</button>
                    <button type="submit" disabled={text.length===0} className="btn btn-primary mb-3 mx-1 bg-dark text-info" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>
        </div>
        <div className="container text-white">
            <h2> Your Text Summery</h2>
            <p>{text.split(" ").length} Words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h2>Previwe</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>


        </>
    );
}

// className="icon-link icon-link-hover" style="--bs-link-hover-color-rgb: 25, 135, 84;"