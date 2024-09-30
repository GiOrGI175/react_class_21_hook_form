import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

const ReggisterForm = () => {
  console.log(useForm());

  const { register, control, handleSubmit, formState, watch } = useForm({
    mode: 'onBlur',

    // defaultValues: {
    //   username: 'Mindia',
    // lastname: 'arabuli',
    // em: 'admin@example.com',
    // },

    // !
    // defaultValues: async (data) => {
    //   const response = await fetch(
    //     'https://jsonplaceholder.typicode.com/users/1'
    //   );

    //   const users = await response.json();

    //   return {
    //     username: users.name,
    //     lastname: users.username,
    //     em: users.email,
    //   };
    // },

    // !
    defaultValues: {
      username: 'Mindia',
      lastname: 'arabuli',
      em: 'admin@example.com',
      dob: new Date(),
    },
  });

  const onSubmit = (data) => {
    console.log('for subbmited', data);
  };

  console.log(formState);

  const { errors } = formState;

  console.log(errors);

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
          {errors.username && <span>{errors.username.message}</span>}
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
            {...register('lastname', {
              disabled: watch('username') === '',
              required: {
                value: true,
                message: 'this username is empty',
              },
            })}
          />
          {errors.lastname && <span>{errors.lastname.message}</span>}
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
            {...register('em', {
              validate: {
                notAdmin: (value) =>
                  value !== 'admin@example.com' || 'reserved email',
                blackList: (value) => {
                  const blackList = ['mail.ru', 'yandex.ru'];
                  const domain = value.split('@')[1];
                  return blackList.includes(domain) ? 'blackListed mail' : true;
                },
              },
            })}
          />
          {errors.em && <span>{errors.em.message}</span>}
        </div>

        <div className='mb-4'>
          <label
            htmlFor='dob'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            last name
          </label>
          <input
            type='date'
            id='dob'
            placeholder='enter your last name'
            className='shadow border rounded w-full py-2 text-gray-700 focus:outline-none p-[10px]'
            {...register('dob', {
              validate: true,
              required: {
                value: true,
                message: 'this dob is empty',
              },
            })}
          />
          {errors.dob && <span>{errors.lastname.message}</span>}
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
