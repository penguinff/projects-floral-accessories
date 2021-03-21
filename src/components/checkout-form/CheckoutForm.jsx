import { useState } from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import styles from './checkout-form.module.scss';

const CheckoutForm = () => {
  const [shippingInfo, setShippingInfo] = useState({
    title: '',
    surname: '',
    firstname: '',
    phone: '',
    address: ''
  });

  const { surname, firstname, phone, address } = shippingInfo;

  const handleChange = event => {
    const { name, value } = event.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  }

  // will make it upload to firebase later
  const handleSubmit = event => {
    event.preventDefault();
    console.log(shippingInfo);
  }

  return (
    <div className={styles.checkoutForm}>
      <h1>結賬</h1>
      <h2>宅配到府</h2>
      <form className={styles.name} onSubmit={handleSubmit}>
        <input 
          type='radio'
          name='title'
          value='ms'
          onChange={handleChange}
          id='ms'
          checked />
        <label htmlFor='ms'>女士</label>
        <input 
          type='radio'
          name='title'
          value='mr'
          onChange={handleChange}
          id='mr'/>
        <label htmlFor='mr'>先生</label>
        <FormInput 
          type='text'
          name='surname'
          value={surname}
          onChange={handleChange}
          label='姓氏'
          required
        />
        <FormInput 
          type='text'
          name='firstname'
          value={firstname}
          onChange={handleChange}
          label='名字'
          required
        />
        <FormInput 
          type='tel'
          name='phone'
          value={phone}
          onChange={handleChange}
          pattern='[0-9]{10}'
          label='手機號碼'
          required
        />
        <FormInput 
          type='text'
          name='address'
          value={address}
          onChange={handleChange}
          label='地址'
          required
        />
        <CustomButton type='submit'>繼續</CustomButton>
      </form>
    </div>
  );
};

export default CheckoutForm;