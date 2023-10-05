import { RiWhatsappLine, RiMailLine } from 'react-icons/ri';
import { ImLinkedin2, ImGithub } from 'react-icons/im';

export default function Socials() {
  return (
    <div className='flex items-center gap-4'>
      <a
        href=''
        className='block p-0.5 rounded-full group'>
        <RiWhatsappLine
          className='group-hover:text-indigo-500 dark:group-hover:text-accent text-black dark:text-white
                 text-3xl'
        />
      </a>
      <a
        href='https://www.linkedin.com/in/rafael-alves-087456210/'
        target='_blank'
        className='block p-0.5 group'>
        <ImLinkedin2
          className='group-hover:text-indigo-500 dark:group-hover:text-accent text-black dark:text-white
                 text-3xl'
        />
      </a>
      <a
        href='https://github.com/StarLordCraft'
        target='_blank'
        className='block p-0.5 group rounded-full'>
        <ImGithub
          className='group-hover:text-indigo-500 dark:group-hover:text-accent text-black dark:text-white
                 text-3xl'
        />
      </a>
      <a
        href='/contact'
        className='block p-0.5 group'>
        <RiMailLine
          className='group-hover:text-indigo-500 dark:group-hover:text-accent text-black dark:text-white
                 text-3xl'
        />
      </a>
    </div>
  );
}
