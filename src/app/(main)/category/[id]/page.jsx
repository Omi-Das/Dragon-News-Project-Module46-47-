import LeftSidebar from '@/component/homepage/news/LeftSidebar';
import NewsCard from '@/component/homepage/news/NewsCard';
import RightSidebar from '@/component/homepage/news/RightSidebar';
import { getCategories, getNewsCategoryId } from '@/lib/data';
import React from 'react';

const NewsCategoryPage = async({params}) => {
    const{id} = await params
    console.log(id,"paramRes")

     const categories = await getCategories()
       const news = await getNewsCategoryId(id)

    return (
         <div className="container mx-auto grid grid-cols-12 gap-4 my-[60px">
   <div className="col-span-3">
<LeftSidebar categories={categories} activeId = {id}/>
   </div>
   <div className="text-3xl  col-span-6">
    <h2 className='font-bold text-lg'>News by Category</h2>
    <div className="space-y-4 mt-6">
{news.length > 0 ? (
  news.map((n) => {
    // <div key={n._id} className="p-6 rounded-md border">
    //   {n.title}
    // </div>
    
    return <NewsCard key={n._id} news={n}></NewsCard>
  }
  )
) : (
  <h2 className="text-xl font-semibold">No news Found</h2>
)}

    </div>
   </div>
   <div className="font-bold text-3xl  col-span-3">
    <RightSidebar/>
   </div>
    </div>
    );
};

export default NewsCategoryPage;