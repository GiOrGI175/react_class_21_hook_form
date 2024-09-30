import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

const ReggisterForm = () => {
  console.log(useForm());

  const { register, control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('for subbmited', data);
  };

  // console.log(register('name'));

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <form
        action=''
        className='bg-white p-6  rounded shadow-md w-full max-w-sm'
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className='mb-4'>
          <label
            htmlFor='username'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Name
          </label>
          <input
            type='text '
            id='username'
            placeholder='enter your name'
            className='shadow border rounded w-full py-2 text-gray-700 focus:outline-none p-[10px]'
            {...register('username', {
              required: {
                value: true,
                message: 'this username is empty',
              },
            })}
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='lastname'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            last name
          </label>
          <input
            type='text '
            id='lastname'
            placeholder='enter your last name'
            className='shadow border rounded w-full py-2 text-gray-700 focus:outline-none p-[10px]'
            {...register('lastname')}
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='em'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            email{' '}
          </label>
          <input
            type='text '
            id='em'
            placeholder='enter your email'
            className='shadow border rounded w-full py-2 text-gray-700 focus:outline-none p-[10px]'
            {...register('em')}
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 font-bold text-white rounded p-2'
        >
          {' '}
          register
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default ReggisterForm;
