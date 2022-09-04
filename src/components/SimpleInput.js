import { useState } from "react";

const SimpleInput = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setEnteredNameIsTouched(true);
    
    if (inputValue.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    console.log(inputValue);
    setInputValue('');
  }

  const nameInputIsNotValid = !enteredNameIsValid && enteredNameIsTouched;
  const nameInputClasses = nameInputIsNotValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input onChange={onChangeHandler} type='text' id='name' value={inputValue}/>
        {nameInputIsNotValid && <p className={'error-text'}>Name must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
