
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';


function App() {
 
  return (
    <div className='bg-secondary h-400 overflow-hidden '>

      <Navbar></Navbar>
      <Textarea heading="Change Text Lower to Upper" />  {/* heading is props */}
    </div>
  );
}

export default App;
