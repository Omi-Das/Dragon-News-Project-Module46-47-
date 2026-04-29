'use client'

import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    const handleGoogleSignin = async () => {
        try {
            const data = await authClient.signIn.social({
                provider: "google",
            });
            console.log("Google sign-in result:", data);
        } catch (error) {
            console.error("Google sign-in failed:", error);
        }
    };

    const handleGithubSignin = async () => {
        try {
            const data = await authClient.signIn.social({
                provider: "github",
            });
            console.log("GitHub sign-in result:", data);
        } catch (error) {
            console.error("GitHub sign-in failed:", error);
        }
    };

    return (
        <div>
            <h2 className='font-bold text-lg'>Login with</h2>
            <div className='flex flex-col gap-2'>
                <button
                    className='btn border-blue-500 text-blue-500 flex items-center gap-2'
                    onClick={handleGoogleSignin}
                >
                    <FaGoogle />
                    Login with Google
                </button>
                <button className='btn flex items-center gap-2' onClick={handleGithubSignin}>
                    <FaGithub />
                    Login with GitHub
                </button>
            </div>
        </div>
    );
};

export default RightSidebar;