import React from 'react';
import Marquee from 'react-fast-marquee';
const news = [
  {
    "id": "BN20260425001",
    "headline": "জাতীয় বিশ্ববিদ্যালয়ের ডিগ্রি প্রথম বর্ষের ভর্তি পরীক্ষা শুরু",
    "source": "Shikshabarta"
  },
  {
    "id": "BN20260425002",
    "headline": "আমির খসরুর হুঁশিয়ারি: অস্থিরতা সৃষ্টিকারীদের ছাড় দেয়া হবে না",
    "source": "Jamuna TV"
  },
  {
    "id": "BN20260425003",
    "headline": "অভিনেতা তারিকুজ্জামান তপন ৬০ বছর বয়সে প্রয়াত",
    "source": "The Daily Star"
  },
  {
    "id": "BN20260425004",
    "headline": "হামে আক্রান্ত হয়ে আজ ৭ শিশুর মৃত্যু: উচ্চ ঝুঁকিতে বাংলাদেশ",
    "source": "Jamuna TV / WHO"
  },
  {
    "id": "BN20260425005",
    "headline": "বিয়াম ফাউন্ডেশন ভবনের ভিত্তিপ্রস্তর স্থাপন করলেন তারেক রহমান",
    "source": "BNP Media"
  }
]

const BreakingNews = () => {
    return (
        <div className='flex justify-center items-center bg-gray-200 py-4 px-2 container mx-auto'>
            <button className='btn bg-red-500 text white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
               {
                news.map((n) =>
               <span key={n.id}>{n.headline}</span> )
               }
            </Marquee>
        </div>
    );
};

export default BreakingNews;