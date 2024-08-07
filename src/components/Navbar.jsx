import { IoMenu } from "react-icons/io5";
import {useState} from 'react'

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    function handleClick(){
        if(showMenu===true){
            setShowMenu(false)
        }else{
            setShowMenu(true)
        }
    }
    return <div className=''>
        <nav className='flex h-28 bg-slate-300 justify-between lg:px-36 px-14 items-center'>
            <h1><a href="/" className='text-3xl font-semibold'>WVANTAGE</a></h1>
            <ul className='md:flex hidden lg:gap-16 text-lg gap-8'>
                <li><a href="/themes" className='hover:text-indigo-600'>Themes</a></li>
                <li><a href="/plugins" className='hover:text-indigo-600'>Plugins</a></li>
                <li><a href="/about" className='hover:text-indigo-600'>About</a></li>
                <li><a href="/contact" className='hover:text-indigo-600'>Contact</a></li>
            </ul>
            <ul className='md:flex hidden lg:gap-16 text-lg gap-8'>
            <li><a href="/signup">Sign up</a></li>
            <li><a href="">Cart</a></li>
            </ul>
            <div className='flex md:hidden'><IoMenu className='text-4xl' onClick={()=>{handleClick()}}/></div>
        </nav>
        {
            showMenu && <nav className='absolute z-50 flex bg-slate-300 justify-between lg:px-36 px-14 items-center w-full'>
            <ul className='flex flex-col gap-6 mb-8'>
                <li><a href="/themes" className='hover:text-indigo-600'>Themes</a></li>
                <li><a href="plugins" className='hover:text-indigo-600'>Plugins</a></li>
                <li><a href="/about" className='hover:text-indigo-600'>About</a></li>
                <li><a href="/contact" className='hover:text-indigo-600'>Contact</a></li>
                <li><a href="/signup">Sign Up</a></li>
            <li><a href="">Cart</a></li>
            </ul>
        </nav>
        }
    </div>
}