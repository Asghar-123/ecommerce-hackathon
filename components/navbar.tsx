// import Head from "next/head";

// export default function Navbar() {
//     return (
//   <div className="min-h-screen bg-gray-100">
//    <Head>
//     <title>
//      Furniro
//     </title>
//     <link   href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
//     <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&amp;display=swap" rel="stylesheet"/>
//    </Head>
//    <header className="bg-white shadow">
//     <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//      <div className="flex items-center">
//       <img alt="Logo" className="mr-2" height="40" src="/Meubel House_Logos-05.png" width="40"/>
//       <span className="text-xl font-bold">
//        Furniro
//       </span>
//      </div>
//      <nav className="space-x-4">
//       <a className="text-gray-700 hover:text-gray-900" href="/">
//        Home
//       </a>
//       <a className="text-gray-700 hover:text-gray-900" href="/shop">
//        Shop
//       </a>
//       <a className="text-gray-700 hover:text-gray-900" href="#">
//        Blog
//       </a>
//       <a className="text-gray-700 hover:text-gray-900" href="#">
//        Contact
//       </a>
//      </nav>
//      <div className="space-x-4">
//       <a className="text-gray-700 hover:text-gray-900" href="#">
//        <i className="fas fa-user">
//        </i>
//       </a>
//       <a className="text-gray-700 hover:text-gray-900" href="#">
//        <i className="fas fa-heart">
//        </i>
//       </a>
//       <a className="text-gray-700 hover:text-gray-900" href="#">
//        <i className="fas fa-shopping-cart">
//        </i>
//       </a>
//      </div>
//     </div>
//    </header>
//     <main className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
//     <div className="flex-1">
//      <img alt="Living room with furniture and plant" className="w-full h-auto" height="400" src="https://storage.googleapis.com/a1aa/image/FfwfsDR3ffZeUgY4K2v74eMfPt2DQAFhjPSF4eKNvYfFaYbxnA.jpg" width="600"/>
//     </div>
//     <div className="flex-1 bg-yellow-100 p-8 rounded-lg mt-8 md:mt-0 md:ml-8">
//      <h2 className="text-sm uppercase text-gray-600">
//       New Arrival
//      </h2>
//      <h1 className="text-4xl font-bold text-gray-800 mt-2">
//       Discover Our New Collection
//      </h1>
//      <p className="text-gray-600 mt-4">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
//               tellus, luctus nec ullamcorper mattis.
//      </p>
//      <button className="mt-6 px-6 py-3 bg-yellow-600 text-white font-bold rounded hover:bg-yellow-700">
//       Buy Now
//      </button>
//     </div>
//    </main>  
//   </div>
//   );
//   } 

import Head from "next/head";

export default function Navbar() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>Furniro</title>
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                    rel="stylesheet"
                />
                <link
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
                        <a className="text-gray-700 hover:text-gray-900" href="/">
                            Home
                        </a>
                        <a className="text-gray-700 hover:text-gray-900" href="/shop">
                            Shop
                        </a>
                        <a className="text-gray-700 hover:text-gray-900" href="#">
                            Blog
                        </a>
                        <a className="text-gray-700 hover:text-gray-900" href="#">
                            Contact
                        </a>
                    </nav>
                    <div className="space-x-4 flex items-center">
                        <a className="text-gray-700 hover:text-gray-900" href="#">
                            <i className="fas fa-user"></i>
                        </a>
                        <a className="text-gray-700 hover:text-gray-900" href="#">
                            <i className="fas fa-heart"></i>
                        </a>
                        <a className="text-gray-700 hover:text-gray-900" href="#">
                            <i className="fas fa-shopping-cart"></i>
                        </a>
                    </div>
                    {/* Hamburger Menu for Mobile */}
                    <div className="md:hidden flex items-center">
                        <button className="text-gray-700 hover:text-gray-900">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                </div>
            </header>
            <main className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
                <div className="flex-1">
                    <img
                        alt="Living room with furniture and plant"
                        className="w-full h-auto"
                        height="400"
                        src="https://storage.googleapis.com/a1aa/image/FfwfsDR3ffZeUgY4K2v74eMfPt2DQAFhjPSF4eKNvYfFaYbxnA.jpg"
                        width="600"
                    />
                </div>
                <div className="flex-1 bg-yellow-100 p-8 rounded-lg mt-8 md:mt-0 md:ml-8">
                    <h2 className="text-sm uppercase text-gray-600">New Arrival</h2>
                    <h1 className="text-4xl font-bold text-gray-800 mt-2">
                        Discover Our New Collection
                    </h1>
                    <p className="text-gray-600 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                        tellus, luctus nec ullamcorper mattis.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-yellow-600 text-white font-bold rounded hover:bg-yellow-700">
                        Buy Now
                    </button>
                </div>
            </main>
        </div>
    );
}

  