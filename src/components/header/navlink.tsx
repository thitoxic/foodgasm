'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

interface navProps {
    href: string,
    children: string
}

const Navlink = (props: navProps) => {

  const path = usePathname(); 

  return (
    <Link
    href={props.href}
    className={`block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-2 ${path.startsWith(props.href) ? 'overline decoration-2' : ''}`}
    aria-current="page"
  >
   {props.children}
  </Link>
  )
}

export default Navlink