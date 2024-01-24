import './App.css';
import { useState } from 'react';

function App() {

const [value, setValue] = useState('');
const [isPositive, setIsPositive] = useState(true);


const function_num = (val) => {
  setValue((prevValue) => prevValue+val)
  
}


const handleToggleSign = () => {
  // Toggle the sign based on the current state
  setValue((prevValue) => (isPositive ? `-${prevValue}` : prevValue));
  setIsPositive((prevIsPositive) => !prevIsPositive); // Toggle isPositive
};

const handleSubmit = () => {
  try{ 
    console.log(typeof(value))
    const calculatedResult = new Function('return ' + value)();
    setValue(calculatedResult.toString());
  }
  catch(err){alert(`please check your input "${value}"`)}
  
}

  return (
    <div className="App">
      <div>
       <input className='screen' value={value} readOnly></input>
      </div>
      <div>
        <button onClick={ ()=> setValue('') } className='btn_nrml'>AC</button>
        <button onClick={ handleToggleSign } className='btn_nrml'>+/-</button>
        <button onClick={ ()=> function_num('%') } className='btn_nrml'>%</button>
        <button onClick={ ()=> function_num('/') } className='btn_nrml'>/</button>
      </div>
      <div>
        <button onClick={ ()=> function_num('7') } className='btn_nrml'>7</button>
        <button onClick={ ()=> function_num('8') } className='btn_nrml'>8</button>
        <button onClick={ ()=> function_num('9') } className='btn_nrml'>9</button>
        <button onClick={ ()=> function_num('*') } className='btn_nrml'>X</button>
      </div>
      <div>
        <button onClick={ ()=> function_num('4') } className='btn_nrml'>4</button>
        <button onClick={ ()=> function_num('5') } className='btn_nrml'>5</button>
        <button onClick={ ()=> function_num('6') } className='btn_nrml'>6</button>
        <button onClick={ ()=> function_num('-') } className='btn_nrml'>-</button>
      </div>
      <div>
        <button onClick={ ()=> function_num('1') } className='btn_nrml'>1</button>
        <button onClick={ ()=> function_num('2') } className='btn_nrml'>2</button>
        <button onClick={ ()=> function_num('3') } className='btn_nrml'>3</button>
        <button onClick={ ()=> function_num('+') } className='btn_nrml'>+</button>
      </div>
      <div>
        <button onClick={ ()=> function_num('0') } className='btn_zero'>0</button>
        <button  className='btn_nrml'>.</button>
        <button onClick={handleSubmit} className='btn_nrml'>=</button>
      </div>
    </div>
  );
}

export default App;
