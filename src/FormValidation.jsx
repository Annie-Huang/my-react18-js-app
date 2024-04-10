import React, { useState } from 'react';

/*
4. Form with Validation
Building a form with various fields, including validation and error message display, is a common challenge.
This tests handling user input, managing form state, and potentially integrating with external validation libraries.

### 3. **Form Handling and Validation**
- **Challenge:** Implement a form with multiple input fields that validates input and submits the data to a backend service
or logs it to the console. This evaluates understanding of controlled components, state handling, and basic validation techniques in React.
*/
const FormValidation = () => {
  const initialData = {
    name: '',
    email: '',
    age: '',
  };
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (formData) => {
    const errors = {};

    // Google search 'javascript email validation regex'
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const ageRegex = /^[0-9]+$/;

    if (formData.name.trim().length === 0) {
      errors.name = 'Name is required!';
    } else if (formData.name.trim().length < 3) {
      errors.name = 'Name must be more than 2 characters!';
    }

    if (formData.email.trim().length === 0) {
      errors.email = 'Email is required!';
    } else if (!emailRegex.test(formData.email.trim())) {
      // if (!formData.email.trim().match(emailRegex)) {
      errors.email = 'This is not a valid email format!';
    }

    if (formData.age.trim().length === 0) {
      errors.age = 'Age is required!';
    }
    if (
      !formData.age.trim().match(ageRegex) ||
      parseInt(formData.age.trim()) <= 0
    ) {
      errors.age = 'Age must be a number large than 0';
    }

    return errors;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    setErrors(errors);
    setIsSubmit(true);
    if (Object.keys(errors).length === 0) {
      setFormData(initialData);
    }
  };

  console.log('formData', formData);

  // The for attribute to the <label> element, where the value of for is the same as the id in the <input> element.
  return (
    <form onSubmit={handleOnSubmit} style={{ display: 'grid' }}>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        id='name'
        placeholder='Enter a name'
        value={formData.name}
        onChange={handleOnChange}
      />
      <p style={{ marginBlock: '0', color: 'red' }}>{errors.name}</p>

      <label htmlFor='email' style={{ marginTop: '0.5em' }}>
        Email
      </label>
      <input
        type='text'
        name='email'
        id='email'
        placeholder='Enter a email'
        value={formData.email}
        onChange={handleOnChange}
      />
      <p style={{ marginBlock: '0', color: 'red' }}>{errors.email}</p>

      <label htmlFor='age' style={{ marginTop: '0.5em' }}>
        Age
      </label>
      <input
        type='text'
        name='age'
        id='age'
        placeholder='Enter a age'
        value={formData.age}
        onChange={handleOnChange}
      />
      <p style={{ marginBlock: '0', color: 'red' }}>{errors.age}</p>

      <button type='submit' style={{ marginTop: '1em' }}>
        Submit
      </button>
      {Object.keys(errors).length !== 0 && isSubmit && (
        <p style={{ marginBlock: '0', color: 'red' }}>Cannot submit yet</p>
      )}
      {Object.keys(errors).length === 0 && isSubmit && (
        <p style={{ marginBlock: '0', color: 'blue' }}>
          Submit successfully. Clear form now
        </p>
      )}
    </form>
  );
};

export default FormValidation;
