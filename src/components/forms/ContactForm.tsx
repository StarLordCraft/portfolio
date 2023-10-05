'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

import API from '@/config/api';

import { BsArrowRight } from 'react-icons/bs';

import StatusMessage from '../StatusMessage';

interface FormData {
  [key: string]: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState<string>('');

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await API().post('/sendMail', {
        email: formData.email,
        name: formData.name,
        message: formData.message
      });
      const responseData = response.data;
      setStatusMessage(responseData.message);
    } catch (error) {
      setStatusMessage('Error: Failed to send the email.');
      console.error(error);
    }
  };

  return (
    <>
      <StatusMessage message={statusMessage}/>
      <form
        className='flex-1 flex flex-col gap-6 w-full
        mx-auto mt-10 text-[1.5rem] text-black dark:text-white fadeInRight'
        onSubmit={handleSubmit}>
        <div className='flex gap-x-6 w-full'>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='name'
            className='input border border-black/30 dark:border-white/30
          placeholder:text-black/30 dark:placeholder:text-white/30
          focus:ring-indigo-500 dark:focus:ring-accent'
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type='email'
            name='email'
            id='email'
            placeholder='email'
            className='input border border-black/30 dark:border-white/30
          placeholder:text-black/30 dark:placeholder:text-white/30
          focus:ring-indigo-500 dark:focus:ring-accent'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <textarea
          name='message'
          id='message'
          placeholder='message'
          className='textarea border border-black/30 dark:border-white/30
        placeholder:text-black/30 dark:placeholder:text-white/30
        focus:ring-indigo-500 dark:focus:ring-accent'
          value={formData.message}
          onChange={handleChange}></textarea>
        <button
          type='submit'
          className='btn rounded-full max-w-[170px]
        px-8 transition-all duration-300 flex items-center justify-center
        overflow-hidden hover:bg-indigo-500 dark:hover:bg-accent group
        border border-black/30 dark:border-white/30
        placeholder:text-black/30 dark:placeholder:text-white/30
        focus:ring-indigo-500 dark:focus:ring-accent hover:text-white'>
          <span
            className='group-hover:-translate-y-[120%] group-hover:opacity-0
        transition-all duration-500'>
            Lets Talk
          </span>
          <BsArrowRight
            className='-translate-y-[120%] opacity-0 group-hover:flex
        group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300
        absolute text-[22px]'
          />
        </button>
      </form>
    </>
  );
}
