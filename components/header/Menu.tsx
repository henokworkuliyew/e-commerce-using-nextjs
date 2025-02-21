'use client'

import useCartService from '@/lib/hook/useCartStore'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Menu = () => {
  const { items } = useCartService()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div>
      <ul className="flex items-stretch">
        <li>
          <Link className="btn btn-ghost rounded-btn" href="/cart">
            Cart
            {mounted && items.length != 0 && (
              <div className="badge badge-secondary">
                {items.reduce((a, c) => a + c.qty, 0)}{' '}
              </div>
            )}
          </Link>
        </li>
        <li>
          <Link href={'/signin'} className="btn btn-ghost rounded-btn">
            Sign in
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default Menu
