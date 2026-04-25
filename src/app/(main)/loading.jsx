import React from 'react';

// ১. ফাংশন তৈরি
const Loading = () => {
    return (
        <div className='flex h-[85vh] items-center justify-center gap-3'>
            <span className='text-2xl font-semibold'>Loading...</span>
            <span className='loading loading-dots loading-lg text-purple-500'></span>
        </div>
    );
};
// ২. অবশ্যই default export করতে হবে
export default Loading; 