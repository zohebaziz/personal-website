import Link from "next/link"

//  main homepage of the application
export default function Home() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='grid grid-cols-4 justify-center gap-24'>
        <div className='col-span-4 text-center text-9xl font-semibold'>Zoheb Aziz</div>
        <div className='text-center text-xl hover:text-3xl'>
          <Link href='/about'>About</Link>
        </div>
        <div className='text-center text-xl hover:text-3xl'>
          <Link href='/projects'>Projects</Link>
        </div>
        <div className='text-center text-xl hover:text-3xl'>
          <Link href='/resume'>Resume</Link>
        </div>
        <div className='text-center text-xl hover:text-3xl'>
          <Link href='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  )
}
