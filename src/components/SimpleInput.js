import { useState } from "react";

const SimpleInput = (props) => {
  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setInputValue('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input onChange={onChangeHandler} type='text' id='name' value={inputValue}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
