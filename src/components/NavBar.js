import Link from "next/link"

// reusable nav bar for each page
export default function NavBar() {
    return (
        <div className='grid grid-cols-5 justify-between p-8 border border-black'>
            <Link className='text-center flex-grow text-2xl' href='/'>Home</Link>
            <Link className='text-center flex-grow text-2xl' href='/about'>About</Link>
            <Link className='text-center flex-grow text-2xl' href='/projects'>Projects</Link>
            <Link className='text-center flex-grow text-2xl' href='/resume'>Resume</Link>
            <Link className='text-center flex-grow text-2xl' href='/contact'>Contact</Link>
        </div>    
    )
}