import Link from 'next/link'
import Image from 'next/image'
import Logo from './ImagesLogo.png'
export default function Navbar(){
  return (
    <nav>
      <Image 
        src={ Logo } 
        alt={'LocalBite Helpdesk'}
        width={75}
        quality={100}
        placeholder='blur'
      />
      <h1>Local Bite Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/Tickets">Tickets</Link>
    </nav>
  )
}