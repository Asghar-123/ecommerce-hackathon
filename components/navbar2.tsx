// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

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

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image
            src="https://storage.googleapis.com/a1aa/image/xCbbhpT8RnppFxW0Wq6e5fiuHz9bPahptoZr78P77wUDSx4TA.jpg"
            alt="Furniro logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold text-black">Furniro</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#">
            <a className="text-lg text-black hover:text-gray-600 transition-colors">Home</a>
          </Link>
          <Link href="#">
            <a className="text-lg text-black hover:text-gray-600 transition-colors">Shop</a>
          </Link>
          <Link href="#">
            <a className="text-lg text-black hover:text-gray-600 transition-colors">Blog</a>
          </Link>
          <Link href="#">
            <a className="text-lg text-black hover:text-gray-600 transition-colors">Contact</a>
          </Link>
        </nav>

        {/* Icons Section */}
        <div className="flex space-x-4 items-center">
          <Link href="#">
            <a className="text-black hover:text-gray-600 transition-colors">
              <i className="fas fa-user"></i>
            </a>
          </Link>
          <Link href="#">
            <a className="text-black hover:text-gray-600 transition-colors">
              <i className="fas fa-search"></i>
            </a>
          </Link>
          <Link href="#">
            <a className="text-black hover:text-gray-600 transition-colors">
              <i className="fas fa-heart"></i>
            </a>
          </Link>
          <Link href="#">
            <a className="text-black hover:text-gray-600 transition-colors">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </Link>
        </div>

        {/* Mobile Navigation Button */}
        <div className="block md:hidden">
          <button className="text-black">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
