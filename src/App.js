import React,{useState} from 'react'
import './App.css';
import GallaryIMGS from './GallaryIMGS';

function App() {
  const[selectedImg , setSelectedImg] = useState(GallaryIMGS[0])

  return (
    <div className="App">
    <div  className='container'>
      <img src={selectedImg} alt='Selected' className='selected'>
      </img>
      <div className='imgContainer'>
       {GallaryIMGS.map((IMG , index) => (
         <img src={IMG} key={index} alt= ''
         onClick={() => setSelectedImg(IMG)} />
       ))}
      </div>

    </div>

    </div>
  );
}

export default App;
