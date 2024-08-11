
import React, { useState } from 'react';

const Form3 = ({ formData, setFormData, prevStep, handleSubmit }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.countryCode) {
      newErrors.countryCode = 'Country Code is required';
    } else if (!['+91', '+1'].includes(formData.countryCode)) {
      newErrors.countryCode = 'Invalid Country Code';
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone Number must be 10 digits';
    }

    if (!formData.acceptTermsAndCondition) {
      newErrors.acceptTermsAndCondition = 'You must accept terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      handleSubmit();
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Form 3</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Country Code:</label>
        <select
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={formData.countryCode}
          onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
        >
          <option value="">Select Country Code</option>
          <option value="+91">India (+91)</option>
          <option value="+1">America (+1)</option>
        </select>
        {errors.countryCode && <p className="text-red-500 text-sm mt-1">{errors.countryCode}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone Number:</label>
        <input
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={formData.phoneNumber}
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
        />
        {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">
          <input
            type="checkbox"
            className="mr-2 leading-tight"
            checked={formData.acceptTermsAndCondition}
            onChange={(e) => setFormData({ ...formData, acceptTermsAndCondition: e.target.checked })}
          />
          Accept Terms and Conditions
        </label>
        {errors.acceptTermsAndCondition && <p className="text-red-500 text-sm mt-1">{errors.acceptTermsAndCondition}</p>}
      </div>
      <div className="flex justify-between">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Form3;
