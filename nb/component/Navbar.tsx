import Link from 'next/link';

// ********************************************************************************
export const Navbar = () =>
    <nav className='navbar'>
        <ul>
            <li><Link href='/' passHref><button className='btn-logo'>NB</button></Link></li>
            <li className='push-left'><Link href='/' passHref><button className='btn-green'>Plant Catalogue</button></Link></li>
            <li className='push-left'><Link href='/about' passHref><button className='btn-green'>About</button></Link></li>
        </ul>
    </nav>;
