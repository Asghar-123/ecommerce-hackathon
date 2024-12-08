export default function Hero(){
    return(
        <div>
            <main className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
  <div className="flex-1">
   <img alt="Living room with furniture and plant" className="w-full h-auto" height="400" src="https://storage.googleapis.com/a1aa/image/FfwfsDR3ffZeUgY4K2v74eMfPt2DQAFhjPSF4eKNvYfFaYbxnA.jpg" width="600"/>
  </div>
  <div className="flex-1 bg-yellow-100 p-8 rounded-lg mt-8 md:mt-0 md:ml-8">
   <h2 className="text-sm uppercase text-gray-600">
    New Arrival
   </h2>
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
    )
}