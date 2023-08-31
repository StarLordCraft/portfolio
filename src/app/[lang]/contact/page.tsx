import Circles from '@/components/Circles';
import Bulb from '@/components/Bulb';
import ContactForm from '@/components/forms/ContactForm'

export default function Page() {
  return (
    <div className='h-full dark:bg-primaryDark/30'>
      <main
        className='container mx-auto py-36 text-center
            xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <h2 className='h2 text-center mb-12 text-black dark:text-white'>
            Let s{' '}
            <span className='text-indigo-500 dark:text-accent'>
              Connect.
            </span>
            <ContactForm />
          </h2>
        </div>
      </main>
      <Circles />
      <Bulb />
    </div>
  );
}
