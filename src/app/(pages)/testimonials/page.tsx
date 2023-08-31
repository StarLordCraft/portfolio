import Bulb from '@/components/Bulb';
import Circles from '@/components/Circles';
import TestimonialSlider from '@/components/testimonials/TestimonialSlider';

const testimonialData: string[] = [
  'insane',
  'insane',
  'insane',
  'insane',
];

export default function Page() {
  return (
    <main
      className='h-full dark:bg-primaryDark/30 py-36
        text-center dark:text-white px-20'>
      <section
        className='container mx-auto h-full flex flex-col
            justify-cener'>
        <h2 className='fadeInUp h2 mb-8 xl:mb-0'>
          What Clients{' '}
          <span className='text-indigo-500 dark:text-accent'>
            Say
          </span>
        </h2>
        <div>
          <TestimonialSlider testimonialData={testimonialData} />
        </div>
      </section>
      <Circles />
      <Bulb />
    </main>
  );
}
