


// "use client"
// import { useState } from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Footer from '@/components/footer';

// export default function Home() {
//   const [itemsToShow, setItemsToShow] = useState(16);

//   return (
//     <div>
//       <Head>
//         <title>Furniro Shop</title>
//         <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
//         <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
//       </Head>
//       <header className="bg-white shadow-md">
//         <div className="container mx-auto flex justify-between items-center py-4 px-6">
//           <div className="text-2xl font-bold">Furniro</div>
//           <nav className="space-x-6">
//             <Link className="text-gray-700 hover:text-black" href="/">Home</Link>
//             <Link className="text-gray-700 hover:text-black" href="#">Shop</Link>
//             <Link className="text-gray-700 hover:text-black" href="#">Blog</Link>
//             <Link className="text-gray-700 hover:text-black" href="#">Contact</Link>
//           </nav>
//           <div className="space-x-4">
//             <Link className="text-gray-700 hover:text-black" href="#"><i className="fas fa-user"></i></Link>
//             <Link className="text-gray-700 hover:text-black" href="#"><i className="fas fa-search"></i></Link>
//             <Link className="text-gray-700 hover:text-black" href="#"><i className="fas fa-heart"></i></Link>
//             <Link className="text-gray-700 hover:text-black" href="#"><i className="fas fa-shopping-cart"></i></Link>
//           </div>
//         </div>
//       </header>
//       <main>
//         <section className="relative">
//           <img
//             src="https://storage.googleapis.com/a1aa/image/KKFSpybD2PIefUecobNEd2QpY6HI4sefgVqfLgKWUZW0lhMeJA.jpg"
//             alt="Background image of Link cozy room with plants and shelves"
//             className="w-full h-64 object-cover"
//             width="1920"
//             height="400"
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
//             <h1 className="text-4xl font-bold">Shop</h1>
//             <p className="text-lg">Home &gt; Shop</p>
//           </div>
//         </section>
//         <section className="bg-gray-100 py-4">
//           <div className="container mx-auto flex justify-between items-center px-6">
//             <div className="flex items-center space-x-4">
//               <button className="flex items-center space-x-2 text-gray-700 hover:text-black">
//                 <i className="fas fa-filter"></i>
//                 <span>Filter</span>
//               </button>
//               <button className="text-gray-700 hover:text-black">
//                 <i className="fas fa-th-large"></i>
//               </button>
//               <button className="text-gray-700 hover:text-black">
//                 <i className="fas fa-bars"></i>
//               </button>
//               <span className="text-gray-700">Showing 1–16 of 32 results</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center space-x-2">
//                 <span className="text-gray-700">Show</span>
//                 <input
//                   className="w-12 text-center border border-gray-300 rounded-md"
//                   type="number"
//                   value={itemsToShow}
//                   onChange={(e) => setItemsToShow(Number(e.target.value))}
//                 />
//               </div>
//               <div className="flex items-center space-x-2">
//                 <span className="text-gray-700">Short by</span>
//                 <select className="border border-gray-300 rounded-md">
//                   <option>Default</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         </section>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {/* Product 1 */}
//         <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-[285px] h-[446px]">
//             <img
//               src="/Images.png"
//               alt="Stylish cafe chair in Link bright room"
//               className="w-285 h-301 object-cover"
//             />
//             <div className="p-2">
//               <h2 className="text-lg font-bold">Syltherine</h2>
//               <p className="text-gray-600">Stylish cafe chair</p>
//               <p className="text-lg font-bold text-gray-800">Rp 2.500.000</p>
//               <p className="text-sm text-gray-500 line-through">Rp 3.500.000</p>
//             </div>
//             <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
//               -30%
//             </div>
//           </div>
//           {/* Product 2 */}
//           <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-[285px] h-[446px] ">
//             <img
//               src="https://storage.googleapis.com/a1aa/image/lhUrbAWtt0IuHtSANDMrVnE4if7DjZMSCAtuWoCwusQIDY8JA.jpg"
//               alt="Stylish cafe chair in Link dark room"
//               className="w-285 h-301 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-lg font-bold">Leviosa</h2>
//               <p className="text-gray-600">Stylish cafe chair</p>
//               <p className="text-lg font-bold text-gray-800">Rp 2.500.000</p>
//             </div>
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
//               <button className="bg-yellow-500 text-white px-4 py-2 rounded">
//                 Add to cart
//               </button>
//               <div className="absolute bottom-4 left-4 text-white space-x-4">
//                 <Link href="#" className="hover:text-gray-300">
//                   <i className="fas fa-share"></i> Share
//                 </Link>
//                 <Link href="#" className="hover:text-gray-300">
//                   <i className="fas fa-exchange-alt"></i> Compare
//                 </Link>
//                 <Link href="#" className="hover:text-gray-300">
//                   <i className="fas fa-heart"></i> Like
//                 </Link>
//               </div>
//             </div>
//           </div>
//           {/* Product 3 */}
//           <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-[285px] h-[446px] ">
//             <img
//               src="/sofa.png"
//               alt="Luxury big sofa in Link living room"
//               className="w-285 h-301 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-lg font-bold">Lolito</h2>
//               <p className="text-gray-600">Luxury big sofa</p>
//               <p className="text-lg font-bold text-gray-800">Rp 7.000.000</p>
//               <p className="text-sm text-gray-500 line-through">Rp 14.000.000</p>
//             </div>
//             <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
//               -50%
//             </div>
//           </div>
//           {/* Product 4 */}
//           <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-[285px] h-[446px]">
//             <img
//               src="/newsofa.png"
//               alt="Outdoor bar table and stool in Link garden"
//               className="w-285 h-301 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-lg font-bold">Respira</h2>
//               <p className="text-gray-600">Outdoor bar table and stool</p>
//               <p className="text-lg font-bold text-gray-800">Rp 500.000</p>
//             </div>
//             <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
//               New
//             </div>
//           </div>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {/* Product 1 */}
//         <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-[285px] h-[446px]">
//             <img
//               src="/Images.png"
//               alt="Stylish cafe chair in Link bright room"
//               className="w-285 h-301 object-cover"
//             />
//             <div className="p-2">
//               <h2 className="text-lg font-bold">Syltherine</h2>
//               <p className="text-gray-600">Stylish cafe chair</p>
//               <p className="text-lg font-bold text-gray-800">Rp 2.500.000</p>
//               <p className="text-sm text-gray-500 line-through">Rp 3.500.000</p>
//             </div>
//             <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
//               -30%
//             </div>
//           </div>
//           {/* Product 2 */}
//           <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-[285px] h-[446px] ">
//             <img
//               src="https://storage.googleapis.com/a1aa/image/lhUrbAWtt0IuHtSANDMrVnE4if7DjZMSCAtuWoCwusQIDY8JA.jpg"
//               alt="Stylish cafe chair in Link dark room"
//               className="w-285 h-301 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-lg font-bold">Leviosa</h2>
//               <p className="text-gray-600">Stylish cafe chair</p>
//               <p className="text-lg font-bold text-gray-800">Rp 2.500.000</p>
//             </div>
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
//               <button className="bg-yellow-500 text-white px-4 py-2 rounded">
//                 Add to cart
//               </button>
//               <div className="absolute bottom-4 left-4 text-white space-x-4">
//                 <Link href="#" className="hover:text-gray-300">
//                   <i className="fas fa-share"></i> Share
//                 </Link>
//                 <Link href="#" className="hover:text-gray-300">
//                   <i className="fas fa-exchange-alt"></i> Compare
//                 </Link>
//                 <Link href="#" className="hover:text-gray-300">
//                   <i className="fas fa-heart"></i> Like
//                 </Link>
//               </div>
//             </div>
//           </div>
//           {/* Product 3 */}
//           <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-[285px] h-[446px] ">
//             <img
//               src="/sofa.png"
//               alt="Luxury big sofa in Link living room"
//               className="w-285 h-301 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-lg font-bold">Lolito</h2>
//               <p className="text-gray-600">Luxury big sofa</p>
//               <p className="text-lg font-bold text-gray-800">Rp 7.000.000</p>
//               <p className="text-sm text-gray-500 line-through">Rp 14.000.000</p>
//             </div>
//             <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
//               -50%
//             </div>
//           </div>
//           {/* Product 4 */}
//           <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-[285px] h-[446px]">
//             <img
//               src="/newsofa.png"
//               alt="Outdoor bar table and stool in Link garden"
//               className="w-285 h-301 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-lg font-bold">Respira</h2>
//               <p className="text-gray-600">Outdoor bar table and stool</p>
//               <p className="text-lg font-bold text-gray-800">Rp 500.000</p>
//             </div>
//             <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
//               New
//             </div>
//           </div>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {/* Product 1 */}
//         <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-[285px] h-[446px]">
//             <img
//               src="/Images.png"
//               alt="Stylish cafe chair in Link bright room"
//               className="w-285 h-301 object-cover"
//             />
//             <div className="p-2">
//               <h2 className="text-lg font-bold">Syltherine</h2>
//               <p className="text-gray-600">Stylish cafe chair</p>
//               <p className="text-lg font-bold text-gray-800">Rp 2.500.000</p>
//               <p className="text-sm text-gray-500 line-through">Rp 3.500.000</p>
//             </div>
//             <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
//               -30%
//             </div>
//           </div>
//           {/* Product 2 */}
//           <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-[285px] h-[446px] ">
//             <img
//               src="https://storage.googleapis.com/a1aa/image/lhUrbAWtt0IuHtSANDMrVnE4if7DjZMSCAtuWoCwusQIDY8JA.jpg"
//               alt="Stylish cafe chair in Link dark room"
//               className="w-285 h-301 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-lg font-bold">Leviosa</h2>
//               <p className="text-gray-600">Stylish cafe chair</p>
//               <p className="text-lg font-bold text-gray-800">Rp 2.500.000</p>
//             </div>
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
//               <button className="bg-yellow-500 text-white px-4 py-2 rounded">
//                 Add to cart
//               </button>
//               <div className="absolute bottom-4 left-4 text-white space-x-4">
//                 <Link href="#" className="hover:text-gray-300">
//                   <i className="fas fa-share"></i> Share
//                 </Link>
//                 <Link href="#" className="hover:text-gray-300">
//                   <i className="fas fa-exchange-alt"></i> Compare
//                 </Link>
//                 <Link href="#" className="hover:text-gray-300">
//                   <i className="fas fa-heart"></i> Like
//                 </Link>
//               </div>
//             </div>
//           </div>
//           {/* Product 3 */}
//           <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-[285px] h-[446px] ">
//             <img
//               src="/sofa.png"
//               alt="Luxury big sofa in Link living room"
//               className="w-285 h-301 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-lg font-bold">Lolito</h2>
//               <p className="text-gray-600">Luxury big sofa</p>
//               <p className="text-lg font-bold text-gray-800">Rp 7.000.000</p>
//               <p className="text-sm text-gray-500 line-through">Rp 14.000.000</p>
//             </div>
//             <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
//               -50%
//             </div>
//           </div>
//           {/* Product 4 */}
//           <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-[285px] h-[446px]">
//             <img
//               src="/newsofa.png"
//               alt="Outdoor bar table and stool in Link garden"
//               className="w-285 h-301 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-lg font-bold">Respira</h2>
//               <p className="text-gray-600">Outdoor bar table and stool</p>
//               <p className="text-lg font-bold text-gray-800">Rp 500.000</p>
//             </div>
//             <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
//               New
//             </div>
//           </div>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {/* Product 1 */}
//         <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-[285px] h-[446px]">
//             <img
//               src="/Images.png"
//               alt="Stylish cafe chair in Link bright room"
//               className="w-285 h-301 object-cover"
//             />
//             <div className="p-2">
//               <h2 className="text-lg font-bold">Syltherine</h2>
//               <p className="text-gray-600">Stylish cafe chair</p>
//               <p className="text-lg font-bold text-gray-800">Rp 2.500.000</p>
//               <p className="text-sm text-gray-500 line-through">Rp 3.500.000</p>
//             </div>
//             <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
//               -30%
//             </div>
//           </div>
//           {/* Product 2 */}
//           <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-[285px] h-[446px] ">
//             <img
//               src="https://storage.googleapis.com/a1aa/image/lhUrbAWtt0IuHtSANDMrVnE4if7DjZMSCAtuWoCwusQIDY8JA.jpg"
//               alt="Stylish cafe chair in Link dark room"
//               className="w-285 h-301 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-lg font-bold">Leviosa</h2>
//               <p className="text-gray-600">Stylish cafe chair</p>
//               <p className="text-lg font-bold text-gray-800">Rp 2.500.000</p>
//             </div>
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
//               <button className="bg-yellow-500 text-white px-4 py-2 rounded">
//                 Add to cart
//               </button>
//               <div className="absolute bottom-4 left-4 text-white space-x-4">
//                 <Link href="#" className="hover:text-gray-300">
//                   <i className="fas fa-share"></i> Share
//                 </Link>
//                 <Link href="#" className="hover:text-gray-300">
//                   <i className="fas fa-exchange-alt"></i> Compare
//                 </Link>
//                 <Link href="#" className="hover:text-gray-300">
//                   <i className="fas fa-heart"></i> Like
//                 </Link>
//               </div>
//             </div>
//           </div>
//           {/* Product 3 */}
//           <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-[285px] h-[446px] ">
//             <img
//               src="/sofa.png"
//               alt="Luxury big sofa in Link living room"
//               className="w-285 h-301 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-lg font-bold">Lolito</h2>
//               <p className="text-gray-600">Luxury big sofa</p>
//               <p className="text-lg font-bold text-gray-800">Rp 7.000.000</p>
//               <p className="text-sm text-gray-500 line-through">Rp 14.000.000</p>
//             </div>
//             <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
//               -50%
//             </div>
//           </div>
//           {/* Product 4 */}
//           <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-[285px] h-[446px]">
//             <img
//               src="/newsofa.png"
//               alt="Outdoor bar table and stool in Link garden"
//               className="w-285 h-301 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-lg font-bold">Respira</h2>
//               <p className="text-gray-600">Outdoor bar table and stool</p>
//               <p className="text-lg font-bold text-gray-800">Rp 500.000</p>
//             </div>
//             <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
//               New
//             </div>
//           </div>
//           </div>
//           <Image src={"/Frame 72.png"} alt='' width={392} height={90} className='mt-10 ml-[600px]'/>
//           <Image src={"/Frame 161.png"} alt='' width={1440} height={270} className='w-full mt-10'/>
//           <Footer/>
//       </main>
//     </div>
//   );
// }


"use client"
import { useState } from 'react';
import Head from 'next/head';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [itemsToShow, setItemsToShow] = useState(16);

  return (
    <div>
      <Head>
        <title>Furniro Shop</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold">Furniro</div>
          <nav className="space-x-6 hidden md:flex">
            <Link className="text-gray-700 hover:text-black" href="/">Home</Link>
            <Link className="text-gray-700 hover:text-black" href="/shop">Shop</Link>
            <Link className="text-gray-700 hover:text-black" href="/Blog">Blog</Link>
            <Link className="text-gray-700 hover:text-black" href="/Contact">Contact</Link>
          </nav>
          <div className="space-x-4 flex items-center">
            <Link className="text-gray-700 hover:text-black" href="#"><i className="fas fa-user"></i></Link>
            <Link className="text-gray-700 hover:text-black" href="#"><i className="fas fa-search"></i></Link>
            <Link className="text-gray-700 hover:text-black" href="#"><i className="fas fa-heart"></i></Link>
            <Link className="text-gray-700 hover:text-black" href="#"><i className="fas fa-shopping-cart"></i></Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative">
          <img
            src="https://storage.googleapis.com/a1aa/image/KKFSpybD2PIefUecobNEd2QpY6HI4sefgVqfLgKWUZW0lhMeJA.jpg"
            alt="Background image of Link cozy room with plants and shelves"
            className="w-full h-64 object-cover"
            width="1920"
            height="400"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold">Shop</h1>
            <p className="text-lg">Home &gt; Shop</p>
          </div>
        </section>

        <section className="bg-gray-100 py-4">
          <div className="container mx-auto flex flex-wrap justify-between items-center px-6">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-black">
                <i className="fas fa-filter"></i>
                <span>Filter</span>
              </button>
              <button className="text-gray-700 hover:text-black">
                <i className="fas fa-th-large"></i>
              </button>
              <button className="text-gray-700 hover:text-black">
                <i className="fas fa-bars"></i>
              </button>
              <span className="text-gray-700">Showing 1–16 of 32 results</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">Show</span>
                <input
                  className="w-16 text-center border border-gray-300 rounded-md"
                  type="number"
                  value={itemsToShow}
                  onChange={(e) => setItemsToShow(Number(e.target.value))}
                />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">Sort by</span>
                <select className="border border-gray-300 rounded-md">
                  <option>Default</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-4">
          {/* Product 1 */}
          <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-full h-full">
            <img
              src="/Images.png"
              alt="Stylish cafe chair in Link bright room"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Syltherine</h2>
              <p className="text-gray-600">Stylish cafe chair</p>
              <p className="text-lg font-bold text-gray-800">Rp 2.500.000</p>
              <p className="text-sm text-gray-500 line-through">Rp 3.500.000</p>
            </div>
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -30%
            </div>
          </div>

          {/* Product 2 */}
          <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-full h-full">
            <img
              src="https://storage.googleapis.com/a1aa/image/lhUrbAWtt0IuHtSANDMrVnE4if7DjZMSCAtuWoCwusQIDY8JA.jpg"
              alt="Stylish cafe chair in Link dark room"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Leviosa</h2>
              <p className="text-gray-600">Stylish cafe chair</p>
              <p className="text-lg font-bold text-gray-800">Rp 2.500.000</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                Add to cart
              </button>
              <div className="absolute bottom-4 left-4 text-white space-x-4">
                <Link href="#" className="hover:text-gray-300">
                  <i className="fas fa-share"></i> Share
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <i className="fas fa-exchange-alt"></i> Compare
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <i className="fas fa-heart"></i> Like
                </Link>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-full h-full">
            <img
              src="/sofa.png"
              alt="Luxury big sofa in Link living room"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Lolito</h2>
              <p className="text-gray-600">Luxury big sofa</p>
              <p className="text-lg font-bold text-gray-800">Rp 7.000.000</p>
              <p className="text-sm text-gray-500 line-through">Rp 14.000.000</p>
            </div>
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -50%
            </div>
          </div>

          {/* Product 4 */}
          <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-full h-full">
            <img
              src="/newsofa.png"
              alt="Outdoor bar table and stool in Link garden"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Respira</h2>
              <p className="text-gray-600">Outdoor bar table and stool</p>
              <p className="text-lg font-bold text-gray-800">Rp 500.000</p>
            </div>
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              New
            </div>
          </div>
        </section>
        <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-4">
          {/* Product 1 */}
          <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-full h-full">
            <img
              src="/Images.png"
              alt="Stylish cafe chair in Link bright room"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Syltherine</h2>
              <p className="text-gray-600">Stylish cafe chair</p>
              <p className="text-lg font-bold text-gray-800">Rp 2.500.000</p>
              <p className="text-sm text-gray-500 line-through">Rp 3.500.000</p>
            </div>
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -30%
            </div>
          </div>

          {/* Product 2 */}
          <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-full h-full">
            <img
              src="https://storage.googleapis.com/a1aa/image/lhUrbAWtt0IuHtSANDMrVnE4if7DjZMSCAtuWoCwusQIDY8JA.jpg"
              alt="Stylish cafe chair in Link dark room"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Leviosa</h2>
              <p className="text-gray-600">Stylish cafe chair</p>
              <p className="text-lg font-bold text-gray-800">Rp 2.500.000</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                Add to cart
              </button>
              <div className="absolute bottom-4 left-4 text-white space-x-4">
                <Link href="#" className="hover:text-gray-300">
                  <i className="fas fa-share"></i> Share
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <i className="fas fa-exchange-alt"></i> Compare
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <i className="fas fa-heart"></i> Like
                </Link>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-full h-full">
            <img
              src="/sofa.png"
              alt="Luxury big sofa in Link living room"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Lolito</h2>
              <p className="text-gray-600">Luxury big sofa</p>
              <p className="text-lg font-bold text-gray-800">Rp 7.000.000</p>
              <p className="text-sm text-gray-500 line-through">Rp 14.000.000</p>
            </div>
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -50%
            </div>
          </div>

          {/* Product 4 */}
          <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-full h-full">
            <img
              src="/newsofa.png"
              alt="Outdoor bar table and stool in Link garden"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Respira</h2>
              <p className="text-gray-600">Outdoor bar table and stool</p>
              <p className="text-lg font-bold text-gray-800">Rp 500.000</p>
            </div>
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              New
            </div>
          </div>
        </section>
        <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-4">
          {/* Product 1 */}
          <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-full h-full">
            <img
              src="/Images.png"
              alt="Stylish cafe chair in Link bright room"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Syltherine</h2>
              <p className="text-gray-600">Stylish cafe chair</p>
              <p className="text-lg font-bold text-gray-800">Rp 2.500.000</p>
              <p className="text-sm text-gray-500 line-through">Rp 3.500.000</p>
            </div>
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -30%
            </div>
          </div>

          {/* Product 2 */}
          <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-full h-full">
            <img
              src="https://storage.googleapis.com/a1aa/image/lhUrbAWtt0IuHtSANDMrVnE4if7DjZMSCAtuWoCwusQIDY8JA.jpg"
              alt="Stylish cafe chair in Link dark room"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Leviosa</h2>
              <p className="text-gray-600">Stylish cafe chair</p>
              <p className="text-lg font-bold text-gray-800">Rp 2.500.000</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                Add to cart
              </button>
              <div className="absolute bottom-4 left-4 text-white space-x-4">
                <Link href="#" className="hover:text-gray-300">
                  <i className="fas fa-share"></i> Share
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <i className="fas fa-exchange-alt"></i> Compare
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <i className="fas fa-heart"></i> Like
                </Link>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-full h-full">
            <img
              src="/sofa.png"
              alt="Luxury big sofa in Link living room"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Lolito</h2>
              <p className="text-gray-600">Luxury big sofa</p>
              <p className="text-lg font-bold text-gray-800">Rp 7.000.000</p>
              <p className="text-sm text-gray-500 line-through">Rp 14.000.000</p>
            </div>
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -50%
            </div>
          </div>

          {/* Product 4 */}
          <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-full h-full">
            <img
              src="/newsofa.png"
              alt="Outdoor bar table and stool in Link garden"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Respira</h2>
              <p className="text-gray-600">Outdoor bar table and stool</p>
              <p className="text-lg font-bold text-gray-800">Rp 500.000</p>
            </div>
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              New
            </div>
          </div>
        </section>
        <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-4">
          {/* Product 1 */}
          <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-full h-full">
            <img
              src="/Images.png"
              alt="Stylish cafe chair in Link bright room"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Syltherine</h2>
              <p className="text-gray-600">Stylish cafe chair</p>
              <p className="text-lg font-bold text-gray-800">Rp 2.500.000</p>
              <p className="text-sm text-gray-500 line-through">Rp 3.500.000</p>
            </div>
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -30%
            </div>
          </div>

          {/* Product 2 */}
          <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-full h-full">
            <img
              src="https://storage.googleapis.com/a1aa/image/lhUrbAWtt0IuHtSANDMrVnE4if7DjZMSCAtuWoCwusQIDY8JA.jpg"
              alt="Stylish cafe chair in Link dark room"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Leviosa</h2>
              <p className="text-gray-600">Stylish cafe chair</p>
              <p className="text-lg font-bold text-gray-800">Rp 2.500.000</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                Add to cart
              </button>
              <div className="absolute bottom-4 left-4 text-white space-x-4">
                <Link href="#" className="hover:text-gray-300">
                  <i className="fas fa-share"></i> Share
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <i className="fas fa-exchange-alt"></i> Compare
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <i className="fas fa-heart"></i> Like
                </Link>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-full h-full">
            <img
              src="/sofa.png"
              alt="Luxury big sofa in Link living room"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Lolito</h2>
              <p className="text-gray-600">Luxury big sofa</p>
              <p className="text-lg font-bold text-gray-800">Rp 7.000.000</p>
              <p className="text-sm text-gray-500 line-through">Rp 14.000.000</p>
            </div>
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -50%
            </div>
          </div>

          {/* Product 4 */}
          <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-full h-full">
            <img
              src="/newsofa.png"
              alt="Outdoor bar table and stool in Link garden"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">Respira</h2>
              <p className="text-gray-600">Outdoor bar table and stool</p>
              <p className="text-lg font-bold text-gray-800">Rp 500.000</p>
            </div>
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              New
            </div>
          </div>
        </section>
        <Image src={"/Frame 72.png"} alt='' width={392} height={90} className='mt-10 ml-[600px]  className="w-full h-auto mx-auto"'/>
          <Image src={"/Frame 161.png"} alt='' width={1440} height={270} className='w-full mt-10  className="w-full h-auto mx-auto"'/>
          <Footer />
      </main>

      
    </div>
  );
}
