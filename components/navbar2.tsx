import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';


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
                        <Image
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
                        <Link className="text-gray-700 hover:text-gray-900" href="/Cart">
                            <i className="fas fa-shopping-cart"></i>
                        </Link>
                    </div>
                     
                    <div className="md:open flex items-center">
                        <button className="text-gray-700 hover:text-gray-900">
                            <i className="fas fa-bars"></i>
                            
                        </button>
                      
                    </div>
                </div>
            </header>
            {/*<main className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
                <div className="flex-1">
                    <Image
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
