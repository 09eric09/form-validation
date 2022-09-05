import { useState } from "react";

const SimpleInput = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  const enteredNameIsValid = inputValue.trim() !== '';
  const nameInputIsNotValid = !enteredNameIsValid && enteredNameIsTouched;

  const enteredEmailIsValid = emailValue.includes('@');
  const emailInputIsNotValid = !enteredEmailIsValid && enteredEmailIsTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  }

  const onChangeEmailHandler = (e) => {
    setEmailValue(e.target.value);
  }

  const nameInputBlurHandler = () => {
    setEnteredNameIsTouched(true);
  }

  const emailInputBlurHandler = () => {
    setEnteredEmailIsTouched(true);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setEnteredNameIsTouched(true);
    setEnteredEmailIsTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    console.log(inputValue);
    console.log(emailValue);
    setInputValue('');
    setEmailValue('');
    setEnteredNameIsTouched(false);
    setEnteredEmailIsTouched(false);
  }

  const nameInputClasses = nameInputIsNotValid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsNotValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input onChange={onChangeHandler} onBlur={nameInputBlurHandler} type='text' id='name' value={inputValue}/>
        {nameInputIsNotValid && <p className={'error-text'}>Name must not be empty!</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input onChange={onChangeEmailHandler} onBlur={emailInputBlurHandler} type='email' id='email' value={emailValue}/>
        {emailInputIsNotValid && <p className={'error-text'}>Enter a valid Email!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
