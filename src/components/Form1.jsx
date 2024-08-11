
import React, { useState } from 'react';

const Form1 = ({ formData, setFormData, nextStep }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.emailId) {
      newErrors.emailId = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.emailId)) {
      newErrors.emailId = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else {
      const regex = /^(?=(.*[A-Z]){2})(?=(.*[a-z]){2})(?=(.*\d){2})(?=(.*\W){2}).{8,}$/;
      if (!regex.test(formData.password)) {
        newErrors.password = 'Password must contain 2 uppercase, 2 lowercase, 2 numbers, and 2 special characters.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      nextStep();
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Form 1</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Email:</label>
        <input
          type="email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={formData.emailId}
          onChange={(e) => setFormData({ ...formData, emailId: e.target.value })}
        />
        {errors.emailId && <p className="text-red-500 text-sm mt-1">{errors.emailId}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Password:</label>
        <input
          type="password"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      </div>
      <div className="flex justify-between">
        <button className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50" disabled>
          Back
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleNext}
        >
          Save and Next
        </button>
      </div>
    </div>
  );
};

export default Form1;
