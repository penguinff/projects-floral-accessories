import { useState } from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import OrderConfirmation from '../order-confirmation/OrderConfimation';

import styles from './checkout-form.module.scss';

const CheckoutForm = () => {
  const [shippingInfo, setShippingInfo] = useState({
    title: 'Ms.',
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { title, name, email, phone, address } = shippingInfo;

  const handleChange = event => {
    const { name, value } = event.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <div className={styles.checkoutForm}>
      <h1>結賬</h1>
      <div className={styles.edit} hidden={!isSubmitted} onClick={() => setIsSubmitted(!isSubmitted)}>
        <span>編輯</span>
      </div>

      <div className={styles.upperPart} hidden={isSubmitted}>
        <h2>宅配到府</h2>
        <form className={styles.name} onSubmit={handleSubmit}>
          <input 
            type='radio'
            name='title'
            value='Ms.'
            checked={title === 'Ms.'}
            onChange={handleChange}
            id='ms'
          />
          <label htmlFor='ms'>女士</label>
          <input 
            type='radio'
            name='title'
            value='Mr.'
            checked={title === 'Mr.'}
            onChange={handleChange}
            id='mr'/>
          <label htmlFor='mr'>先生</label>
          <FormInput 
            type='text'
            name='name'
            value={name}
            onChange={handleChange}
            label='收件人姓名'
            required
          />
          <FormInput 
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='電子信箱'
            required
          />
          <FormInput 
            type='tel'
            name='phone'
            value={phone}
            onChange={handleChange}
            // pattern='[0-9]{10}'
            label='手機號碼'
            required
          />
          <FormInput 
            type='text'
            name='address'
            value={address}
            onChange={handleChange}
            label='收件地址'
            required
          />
          <CustomButton type='submit'>繼續</CustomButton>
        </form>
      </div>

      <div className={styles.lowerPart} hidden={!isSubmitted}>
        <OrderConfirmation shippingInfo={shippingInfo} />
      </div>
    </div>
  );
};

export default CheckoutForm;