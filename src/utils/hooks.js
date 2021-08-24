import {useState} from "react";

export const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleInput = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (callback !== null) {
      callback();
    }
  };

  return {
    handleInput,
    handleSubmit,
    values,
  };
};
