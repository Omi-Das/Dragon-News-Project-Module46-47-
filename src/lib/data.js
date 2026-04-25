export async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
  const data =await res.json()
  return data.data
}
export async function getNewsCategoryId( category_id) {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
  const data =await res.json()
  return data.data
}
// export async function getNewsDetailsId( category_id) {
//   const res = await fetch(` https://openapi.programming-hero.com/api/news/${news_id}
// `)
//   const data =await res.json()
//   return data.data[0]
// }
export async function getNewsDetailsId(news_id) {
  // প্যারামিটার এবং ভেরিয়েবল একই হতে হবে (news_id)
  const res = await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`);
  const data = await res.json();
  
  // API থেকে সাধারণত একটি অ্যারে আসে, তাই প্রথম নিউজটি রিটার্ন করছি
  return data.data[0];
}