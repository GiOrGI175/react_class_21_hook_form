import React from 'react';

const ReggisterForm = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-black'>
      <form
        action=''
        className='bg-white p-6  rounded shadow-md w-full max-w-sm'
      >
        <label htmlFor='username'>Name</label>
        <input
          type='text '
          id='username'
          className='block text-gray-700 text-sm font-bold mb-2'
        />
      </form>
    </div>
  );
};

export default ReggisterForm;
