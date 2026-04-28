"use client"
import Link from 'next/link';
import React from 'react';
import userAvatar from "@/assets/user.png"
import Image from 'next/image';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data:session, isPending } = authClient.useSession()
    const user = session?.user
    console.log(user, isPending, "user")
    
    return (
        <div className='container mx-auto flex justify-between items-center text-gray-700 gap-3'>
            <div></div>
            <ul className='flex justify-between items-center text-gray-700 gap-3'>
                <li>
                    <NavLink href={"/"}>Home</NavLink>
                </li>
                <li>
                      <NavLink href={"/about-us"}>About</NavLink>
                </li>
                <li>
                      <NavLink href={"/career"} className={'text-yellow-500'}>Career</NavLink>
                </li>
            </ul>

            {isPending ? (<span className="loading loading-spinner loading-lg"></span>) : user ? (
                <div className='flex items-center gap-2 mt-2'>
                    <Image src={user?.image || userAvatar} alt="User Avatar" width={40} height={40} className="rounded-full"/>
                    <button className='btn bg-purple-500 text-white' onClick={async () => await authClient.signOut()}>Logout</button>
                </div>
            ) : (
                <button className='btn btn-primary'>
                    <Link href={"/login"}>Login</Link>
                </button>
            )}
        </div>
    );
};

export default Navbar;
