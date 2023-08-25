import { useState } from 'react';

const useCard = () => {
  const [form, setForm] = useState({});
  const onCalc = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
    console.log(form)
  };
  return { form, onCalc, setForm };
};

export default useCard;
