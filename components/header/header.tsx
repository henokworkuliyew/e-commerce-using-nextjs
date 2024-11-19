
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <nav>
            <div className='navbar justify-between bg-base-100'>
        <Link href={'/'}>
        <Image
        src="/images/_DSC0319.JPG" // Path to your image
        alt="Logo"
        width={50} // Image width in pixels
        height={30}
        className='rounded-full'
      />
    </Link>
    <ul>
        <li>
            <Link href={'/cart'} className='btn btn-ghost rounded-btn'>
            Cart
            </Link>
        </li>
        <li>
            <Link href={'/signin'} className='btn btn-ghost rounded-btn'>
            Sign in
            </Link>
        </li>
    </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header