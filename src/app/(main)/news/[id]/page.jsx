import { getNewsDetailsId } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';

export const generateMetadata = async({params}) =>{
    const {id} = await params
    console.log(id, "params")
    const news = await getNewsDetailsId(id)
    console.log(news, "news")

    return{
        title: news.title,
        description: news.details
    }
}

const NewsDetailsPage = async({params}) => { 
    const{id} =await params
    console.log(id, "params")
    const news = await getNewsDetailsId(id)
    console.log(news, "news")
    return (
        <div className='max-w-5xl mx-auto my-8 card'>
             <div className="card bg-base-100 w-96 shadow-sm">
              <div className="card-body">
                {/* Auther Info */}
                <div className='flex justify-between items-center bg-slate-200 p-4'>
            <div className="flex gap-1 items-center">
                <Image
                src={news.author?.img}
                alt={news.author?.name}
                height={40}
                width={40}
                className='rounded-full'
                />
                <div className='flex justify-between items-center'>
                    <h2 className='font-semibold'>{news.author?.name}</h2>
                    <p className='text-xs'>{news.author?.published_date}</p>
                </div>
            
            </div>
            <div className='flex justify-between items-center'>
                <CiShare2 className='text-xl'/>
                <CiBookmark className='text-xl'/>
            </div>
                </div>
                <h2 className="card-title">{news.title}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                 <figure>
               <Image
               src={news.image_url}
               alt={news.title}
               width={300}
               height={300}
               className='w-full'
                />
              </figure>
              <p className=''>{news.details}</p>
              <div className='flex items-center justify-between gap-2'>
                <div className='flex items-center gap-2'>
            <h2 className='flex items-center gap-2'>
                <IoIosStar className='text-lg text-yellow-500'/>
                {news.rating.number}
            </h2>
            <h2 className='flex items-center gap-2'>
                <FaEye className='text-lg'/>
                {news.total_view}
            </h2>
                </div>
                <Link href={`/category/${news.category_id}`}>
                <button className='btn bg-purple-500 text-white'>See others news for Category <BsArrowRight/></button>
                </Link>
              </div>
              </div>
            </div>
           
        </div>
    );
};

export default NewsDetailsPage ;