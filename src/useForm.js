import React, { useState } from 'react';

/*
6. Custom Hooks
Creating custom hooks for reusable logic (like fetching data, form management, or any custom functionality)
tests understanding of React Hooks, side effects, and custom logic encapsulation.

### 7. **Custom Hooks**
- **Challenge:** Create one or more custom hooks to solve a common problem, such as form handling, fetching data,
or managing local component state. This challenge tests the ability to encapsulate and reuse logic across components using hooks.
 */

/*
From parent component:
  const initialValues = {
    name: '',
    email: '',
  };
  const validate = (values) => {
    const errors = {};

    // Google search 'javascript email validation regex'
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (values.name.trim().length === 0) {
      errors.name = 'Name is required!';
    } else if (values.name.trim().length < 3) {
      errors.name = 'Name must be more than 2 characters!';
    }

    console.log('values.email.trim().length=', values.email.trim().length);

    if (values.email.trim().length === 0) {
      errors.email = 'Email is required!';
    } else if (!emailRegex.test(values.email.trim())) {
      // else if (!values.email.trim().match(emailRegex)) {
      errors.email = 'This is not a valid email format!';
    }

    return errors;
  };
  const { handleChange, handleSubmit, values, errors } = useForm(
    initialValues,
    validate
  );
  console.log('values', values);


      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            name='name'
            id='name'
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor='email'>Email: </label>
          <input
            type='text'
            name='email'
            id='email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <button type='submit'>Submit</button>
        {Object.keys(errors).length > 0 && (
          <p style={{ color: 'red' }}>Cannot submit yet. Please fix errors</p>
        )}
        {Object.keys(errors).length === 0 && (
          <p style={{ color: 'blue' }}>Submit success now.</p>
        )}
      </form>
* */
const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate(values);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      setErrors({});
      setValues(initialValues);
    }
  };

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
