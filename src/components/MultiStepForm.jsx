
import React, { useState } from 'react';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import { useNavigate } from 'react-router-dom';
const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    emailId: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    countryCode: '',
    phoneNumber: '',
    acceptTermsAndCondition: false,
  });
  const navigate = useNavigate();
  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const handleSubmit = () => {
    fetch('https://codebuddy.review/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Success:', data);
        alert('Form submitted successfully!');
        navigate('/posts'); 
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
      });
  };
  return (
    <div className="max-w-xl mx-auto mt-10">
     
      {step === 1 && <Form1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
      {step === 2 && <Form2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <Form3 formData={formData} setFormData={setFormData} prevStep={prevStep} handleSubmit={handleSubmit} />}
    </div>
  );
};

export default MultiStepForm;
