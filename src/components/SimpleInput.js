import { useState } from "react";

const SimpleInput = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const enteredNameIsValid = inputValue.trim() !== '';
  const nameInputIsNotValid = !enteredNameIsValid && enteredNameIsTouched;

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  }

  const nameInputBlurHandler = () => {
    setEnteredNameIsTouched(true);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setEnteredNameIsTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    console.log(inputValue);
    setInputValue('');
    setEnteredNameIsTouched(false);
  }

  
  const nameInputClasses = nameInputIsNotValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input onChange={onChangeHandler} onBlur={nameInputBlurHandler} type='text' id='name' value={inputValue}/>
        {nameInputIsNotValid && <p className={'error-text'}>Name must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
