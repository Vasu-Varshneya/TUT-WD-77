import React from 'react'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
const Navbar = async () => {
  const {getUser}=getKindeServerSession()
  const user = await getUser()
  const isadmin=user?.email===process.env.ADMIN_EMAIL
  return (
    <nav className='sticky z-{100} h-14 inset-x-0 top-0 w-full border border-gray-200 bg-white/75  '>
      <div className='h-14 flex justify-between border-b border-zinc items-center'>
        <Link href='/' className='flex font-semibold z-40'>cobra<span className='text-green-500 font-semibold'>case</span></Link>
        <div className='h-full flex items-center space-x-4'>
          {user ? (
            <>
              <Link href='/api/auth/logout' className={buttonVariants({
                size: 'sm', variant: 'ghost',
              })}>
                Sign Out
              </Link>
              {isadmin ? (
                <Link href='/api/auth/logout' className={buttonVariants({
                  size: 'sm', variant: 'ghost',
                })}>
                  Dashboard
                </Link>
              ) : null}
              <Link href={'/configurator/upload'} className={buttonVariants({
                size: 'sm', className: 'hidden sm:flex items-center gap-1',
              })}>
                Create case
                <ArrowRight className="ml-1.5 h-5 w-5 " />
              </Link>
            </>
          ) : (
            <>
              <Link href='/api/auth/register' className={buttonVariants({
                size: 'sm', variant: 'ghost',
              })}>
                Sign Up
              </Link>
              <Link href='/api/auth/login' className={buttonVariants({
                size: 'sm', variant: 'ghost',
              })}>
                Login
              </Link>
              <div className='h-8 w-[80px]  bg-zinc-200 hidden sm:block'>
              <Link href='/configurator/upload' className={buttonVariants({
                size: 'sm', className: 'sm:flex items-center gap-1 mx:auto',
              })}>
                Create case
                <ArrowRight className="ml-1.5 h-5 w-5 " />
              </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
export default Navbar
