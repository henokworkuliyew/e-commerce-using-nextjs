import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-100">
          <Link href={'/'}>
            <Image
              src="/images/_DSC0319.JPG" // Path to your image
              alt="Logo"
              width={50} // Image width in pixels
              height={30}
              className="rounded-full"
            />
          </Link>
          <Menu />
        </div>
      </nav>
    </header>
  )
}

export default Header
