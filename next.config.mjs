/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // এটি দিলে সব ওয়েবসাইট থেকে আসা ইমেজ সাপোর্ট করবে
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;



// // /** @type {import('next').NextConfig} */
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'i.ibb.co',
//       },
//     ],
//   },
//   reactCompiler: true,
// };

// export default nextConfig;