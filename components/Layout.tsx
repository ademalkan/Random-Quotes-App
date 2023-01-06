import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Hello :)' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className='h-screen bg-dark-black flex flex-col justify-center bg-main'>
      {children}
      <footer className='p-5 text-center text-opacity-60 text-slate-50'>
        <span className='font-semibold'>Author:</span> <Link target="_blank" href={"https://www.linkedin.com/in/adem-alkan-47a207211/"}>Adem ALKAN</Link>
      </footer>
    </div></>
)

export default Layout
