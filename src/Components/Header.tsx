import Link from 'next/link'
export const Header = () => {
  return(
    <header className=' text-center mx-auto w-full text-xl font-bold text-slate-200 bg-neutral-800 shadow-lg'>
        <nav className='flex justify-around'>
          <Link href={"/"}>
            <a className='hover:text-slate-900 w-full p-3 hover:bg-neutral-400 transition-all'>
              Home
            </a>
          </Link>
          <Link href={"/runners"}>
            <a className='hover:text-slate-900 w-full p-3 hover:bg-neutral-400 transition-all'>
              Runners
            </a>
          </Link>
          <Link href={"/map"}>
            <a className='hover:text-slate-900 w-full p-3 hover:bg-neutral-400 transition-all'>
              Mapa
            </a>
          </Link>
        </nav>
      </header>
  )
}