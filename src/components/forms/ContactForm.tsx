'use client';

import { useState } from 'react';

import { BsArrowRight } from 'react-icons/bs';

export default function ContactForm() {
  return (
    <form
      className='flex-1 flex flex-col gap-6 w-full
        mx-auto mt-10 text-[1.5rem] text-black dark:text-white'>
      <div className='flex gap-x-6 w-full'>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='name'
          className='input border border-black/30 dark:border-white/30
          placeholder:text-black/30 dark:placeholder:text-white/30
          focus:ring-indigo-500 dark:focus:ring-accent'
        />
        <input
          type='email'
          name='email'
          id='email'
          placeholder='email'
          className='input border border-black/30 dark:border-white/30
          placeholder:text-black/30 dark:placeholder:text-white/30
          focus:ring-indigo-500 dark:focus:ring-accent'
        />
      </div>
      <textarea
        name='message'
        id='message'
        placeholder='message'
        className='textarea border border-black/30 dark:border-white/30
        placeholder:text-black/30 dark:placeholder:text-white/30
        focus:ring-indigo-500 dark:focus:ring-accent'></textarea>
      <button
        className='btn rounded-full max-w-[170px]
        px-8 transition-all duration-300 flex items-center justify-center
        overflow-hidden hover:border-indigo-500 dark:hover:bg-accent group
        border border-black/30 dark:border-white/30
        placeholder:text-black/30 dark:placeholder:text-white/30
        focus:ring-indigo-500 dark:focus:ring-accent'>
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
  );
}
