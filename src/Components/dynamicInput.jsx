import { useState } from 'react';

const DynamicInput = () => {
  const [placeholder, setPlaceholder] = useState('');

  const handleRadioChange = (event) => {
    const { name, checked } = event.target;

    if (checked) {
      if (name === 'email') {
        setPlaceholder('Enter your email');
      } else if (name === 'phone') {
        setPlaceholder('Enter your phone number');
      }
    } else {
      // Reset placeholder when both checkboxes are unchecked
      setPlaceholder('Enter your email');
    }
  };

  return (
    <div>
      <div className='text-start gap-5'>
        <label>
          <input
            type="radio"
            name="email"
            onChange={handleRadioChange}
          />
          Email
        </label>
        <label>
          <input
            type="radio"
            name="phone"
            onChange={handleRadioChange}
          />
          Phone
        </label>
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className='border-2 solid border-black bg-white'
        style={{ width: '50%', height: '40px', borderRadius: '5px' }}
      />
      <button className='bg-transparent'>Share App Link</button>
    </div>
    
  );
};

export default DynamicInput;
