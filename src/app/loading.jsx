import React from 'react';

const LoadingPage = () => {
    return (
      <div className='flex h-[85vh] items-center justify-center gap-3'>
            <span className='text-2xl font-semibold'>Global Loading</span>
            <span className='loading loading-dots loading-lg text-purple-500'></span>
        </div>
    );
};

export default LoadingPage;