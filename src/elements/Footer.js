import { GiPaperBoat } from 'react-icons/gi';
import { SiReact, SiTailwindcss } from 'react-icons/si';



function Footer(){
    return(
        <footer className='p-3 mt-6 border-t-2 rounded-lg shadow flex flex-col justify-between md:gap-4 items-center'>
        <span className=' select-none text-sm text-gray-500 sm:text-center flex gap-2 items-center'><span className='text-2xl'><GiPaperBoat/></span> 2023 <a target='_blank' rel='noreferrer' href='https://github.com/ioncerezo' className='hover:underline'>Ion Cerezo</a>. All Rights Reserved.</span>
        <ul className='flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0'>
            <li>
             <a href='https://github.com/ioncerezo' target='_blank' rel='noreferrer' className='mr-4 hover:underline md:mr-6 '>GitHub</a>
            </li>
            <li>
             <a href='https://pokeapi.co/' target='_blank' rel='noreferrer' className='mr-4 hover:underline md:mr-6 '>Poke API</a>
            </li>
            <li className='select-none flex mr-4 gap-3 md:mr-6'>
             <p>Made with:</p>
             <div className='flex gap-2 text-xl'>
             <SiReact /> <SiTailwindcss />
             </div>
            </li>
            <li className='hover:underline italic'>
             <a href='mailto:ioncerezovalero@gmail.com'>ioncerezovalero@gmail.com</a>
            </li>
        </ul>
    </footer>
    )
}

export default Footer