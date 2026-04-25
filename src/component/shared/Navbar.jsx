import Link from 'next/link';
import React from 'react';
import userAvatar from "@/assets/user.png"
import Image from 'next/image';
import NavLink from './NavLink';

const Navbar = () => {
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
                      <NavLink href={"/career"}className={'text-yellow-500'}>Career</NavLink>
                </li>
            </ul>
          <div>
            <Image src={userAvatar} alt="User Avatar" width={60} height={40}/>
            <button className='flex items-center gap-2'>
                <Link href={"/login"}>Login</Link>
            </button>
          </div>
        </div>
    );
};

export default Navbar;