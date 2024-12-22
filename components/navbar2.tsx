import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

// const Header = () => {
//   return (
//     <header className="bg-white py-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center">
//           <Image
//             src="https://storage.googleapis.com/a1aa/image/xCbbhpT8RnppFxW0Wq6e5fiuHz9bPahptoZr78P77wUDSx4TA.jpg"
//             alt="Furniro logo"
//             width={40}
//             height={40}
//             className="mr-2"
//           />
//           <span className="text-2xl font-bold">Furniro</span>
//         </div>
//         <nav className="flex space-x-8">
//           <Link href="#">
//             <a className="text-lg text-black">Home</a>
//           </Link>
//           <Link href="#">
//             <a className="text-lg text-black">Shop</a>
//           </Link>
//           <Link href="#">
//             <a className="text-lg text-black">Blog</a>
//           </Link>
//           <Link href="#">
//             <a className="text-lg text-black">Contact</a>
//           </Link>
//         </nav>
//         <div className="flex space-x-6">
//           <Link href="#">
//             <a className="text-lg text-black">
//               <i className="fas fa-user"></i>
//             </a>
//           </Link>
//           <Link href="#">
//             <a className="text-lg text-black">
//               <i className="fas fa-search"></i>
//             </a>
//           </Link>
//           <Link href="#">
//             <a className="text-lg text-black">
//               <i className="fas fa-heart"></i>
//             </a>
//           </Link>
//           <Link href="#">
//             <a className="text-lg text-black">
//               <i className="fas fa-shopping-cart"></i>
//             </a>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const Header = () => {
//   return (
//     <header className="bg-white py-4 shadow-md">
//       <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
//         {/* Logo Section */}
//         <div className="flex items-center space-x-2">
//           <Image
//             src="/Meubel House_Logos-05.png"
//             alt="Furniro logo"
//             width={40}
//             height={40}
//             className="w-10 h-10"
//           />
//           <span className="text-2xl font-bold text-black">Furniro</span>
//         </div>

//         {/* Navigation Links */}
//         <nav className="hidden md:flex space-x-6">
//           <Link href="#">
//             <a className="text-lg text-black hover:text-gray-600 transition-colors">Home</a>
//           </Link>
//           <Link href="#">
//             <a className="text-lg text-black hover:text-gray-600 transition-colors">Shop</a>
//           </Link>
//           <Link href="#">
//             <a className="text-lg text-black hover:text-gray-600 transition-colors">Blog</a>
//           </Link>
//           <Link href="#">
//             <a className="text-lg text-black hover:text-gray-600 transition-colors">Contact</a>
//           </Link>
//         </nav>

//         {/* Icons Section */}
//         <div className="flex space-x-4 items-center">
//           <Link href="#">
//             <a className="text-black hover:text-gray-600 transition-colors">
//               <i className="fas fa-user"></i>
//             </a>
//           </Link>
//           <Link href="#">
//             <a className="text-black hover:text-gray-600 transition-colors">
//               <i className="fas fa-search"></i>
//             </a>
//           </Link>
//           <Link href="#">
//             <a className="text-black hover:text-gray-600 transition-colors">
//               <i className="fas fa-heart"></i>
//             </a>
//           </Link>
//           <Link href="#">
//             <a className="text-black hover:text-gray-600 transition-colors">
//               <i className="fas fa-shopping-cart"></i>
//             </a>
//           </Link>
//         </div>

//         {/* Mobile Navigation Button */}
//         <div className="block md:hidden">
//           <button className="text-black">
//             <i className="fas fa-bars"></i>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
export default function Navbar2(){
  return (
    <div>
<Head>
                <title>Furniro</title>
                <Link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                    rel="stylesheet"
                />
                <Link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&amp;display=swap"
                    rel="stylesheet"
                />
            </Head>
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <img
                            alt="Logo"
                            className="mr-2"
                            height="40"
                            src="/Meubel House_Logos-05.png"
                            width="40"
                        />
                        <span className="text-xl font-bold">Furniro</span>
                    </div>
                    <nav className="space-x-4 hidden md:flex">
                        <Link className="text-gray-700 hover:text-gray-900" href="/">
                            Home
                        </Link>
                        <Link className="text-gray-700 hover:text-gray-900" href="/shop">
                            Shop
                        </Link>
                        <Link className="text-gray-700 hover:text-gray-900" href="/Blog">
                            Blog
                        </Link>
                        <Link className="text-gray-700 hover:text-gray-900" href="/Contact">
                            Contact
                        </Link>
                    </nav>
                    <div className="space-x-4 flex items-center">
                        <Link className="text-gray-700 hover:text-gray-900" href="#">
                            <i className="fas fa-user"></i>
                        </Link>
                        <Link className="text-gray-700 hover:text-gray-900" href="#">
                            <i className="fas fa-heart"></i>
                        </Link>
                        <Link className="text-gray-700 hover:text-gray-900" href="#">
                            <i className="fas fa-shopping-cart"></i>
                        </Link>
                    </div>
                     
                    <div className="md:hidden flex items-center">
                        <button className="text-gray-700 hover:text-gray-900">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                </div>
            </header>
            {/*<main className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
                <div className="flex-1">
                    <img
                        alt="Living room with furniture and plant"
                        className="w-full h-auto"
                        height="400"
                        src="https://storage.googleapis.com/a1aa/image/FfwfsDR3ffZeUgY4K2v74eMfPt2DQAFhjPSF4eKNvYfFaYbxnA.jpg"
                        width="600" />
                         
                </div>
                </main> */}
                </div>
                )
                }
