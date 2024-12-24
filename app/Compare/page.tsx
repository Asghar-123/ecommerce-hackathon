import Footer from "@/components/footer";
import Navbar3 from "@/components/navbar3";
import Image from "next/image";
import Link from "next/link";

export default function Compare(){
    return(
        <div>
            <Navbar3/>
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
            <h1 className="text-4xl font-bold">Product Comparison</h1>
            <p className="text-lg">Home &gt; Comparison</p>
          </div>
        </section>
        </main>
        <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Product Comparison</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    rel="stylesheet"
  />
  <div className="container mx-auto p-4">
    <div className="flex justify-between items-center mb-4">
      <div>
        <a className="text-lg font-semibold" href="#">
          Go to Product page for more Products
        </a>
        <a className="text-blue-500" href="#">
          View More
        </a>
      </div>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">
        Add A Product
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="border p-4 rounded-md">
        <Image
          alt="Asgaard Sofa"
          className="w-full mb-4"
          height={150}
          src="/Group 156.png"
          width={200}
        />
        <h2 className="text-lg font-semibold">Asgaard Sofa</h2>
        <p className="text-gray-600">Rs. 250,000.00</p>
        <div className="flex items-center">
          <span className="text-yellow-500">
            <i className="fas fa-star"></i>
            4.7
          </span>
          <span className="text-gray-500 ml-2">(204 Reviews)</span>
        </div>
      </div>
      <div className="border p-4 rounded-md">
        <img
          alt="Outdoor Sofa Set"
          className="w-full mb-2"
          height={150}
          src="/group 159.jpeg"
          width={200}
        />
        <h2 className="text-lg font-semibold">Outdoor Sofa Set</h2>
        <p className="text-gray-600">Rs. 224,000.00</p>
        <div className="flex items-center">
          <span className="text-yellow-500">
            <i className="fas fa-star"></i>
            4.2
          </span>
          <span className="text-gray-500 ml-2">(145 Reviews)</span>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">General</h3>
        <ul className="mb-4">
          <li>
            <strong>Sales Package</strong>: 1 sectional sofa
          </li>
          <li>
            <strong>Model Number</strong>: TFCBLIGRBL6SRHS
          </li>
          <li>
            <strong>Secondary Material</strong>: Solid Wood
          </li>
          <li>
            <strong>Configuration</strong>: L-shaped
          </li>
          <li>
            <strong>Upholstery Material</strong>: Fabric + Cotton
          </li>
          <li>
            <strong>Upholstery Color</strong>: Bright Grey &amp; Lion
          </li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Product</h3>
        <ul className="mb-4">
          <li>
            <strong>Filling Material</strong>: Foam
          </li>
          <li>
            <strong>Finish Type</strong>: Bright Grey &amp; Lion
          </li>
          <li>
            <strong>Adjustable Headrest</strong>: No
          </li>
          <li>
            <strong>Maximum Load Capacity</strong>: 280 KG
          </li>
          <li>
            <strong>Origin of Manufacture</strong>: India
          </li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Dimensions</h3>
        <ul className="mb-4">
          <li>
            <strong>Width</strong>: 265.32 cm
          </li>
          <li>
            <strong>Height</strong>: 76 cm
          </li>
          <li>
            <strong>Depth</strong>: 167.76 cm
          </li>
          <li>
            <strong>Weight</strong>: 45 KG
          </li>
          <li>
            <strong>Seat Height</strong>: 41.52 cm
          </li>
          <li>
            <strong>Leg Height</strong>: 5.46 cm
          </li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Warranty</h3>
        <ul className="mb-4">
          <li>
            <strong>Warranty Summary</strong>: 1 Year Manufacturing Warranty
          </li>
          <li>
            <strong>Warranty Service Type</strong>: For Warranty Claims or Any
            Product Related Issues Please Email at operations@trevifurnitue.com
          </li>
          <li>
            <strong>Covered in Warranty</strong>: Warranty Against Manufacturing
            Defect
          </li>
          <li>
            <strong>Not Covered in Warranty</strong>: The Warranty Does Not
            Cover Damages Due To Usage Of The Product Beyond Its Intended Use
            And Wear &amp; Tear In The Natural Course Of Product Usage.
          </li>
          <li>
            <strong>Domestic Warranty</strong>: 1 Year
          </li>
        </ul>
      <Link href="/Cart"> <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">
          Add To Cart
        </button></Link>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">General</h3>
        <ul className="mb-4">
          <li>
            <strong>Sales Package</strong>: 1 Three Seater, 2 Single Seater
          </li>
          <li>
            <strong>Model Number</strong>: DTUBLIGRBL568
          </li>
          <li>
            <strong>Secondary Material</strong>: Solid Wood
          </li>
          <li>
            <strong>Configuration</strong>: L-shaped
          </li>
          <li>
            <strong>Upholstery Material</strong>: Fabric + Cotton
          </li>
          <li>
            <strong>Upholstery Color</strong>: Bright Grey &amp; Lion
          </li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Product</h3>
        <ul className="mb-4">
          <li>
            <strong>Filling Material</strong>: Matte
          </li>
          <li>
            <strong>Finish Type</strong>: Bright Grey &amp; Lion
          </li>
          <li>
            <strong>Adjustable Headrest</strong>: Yes
          </li>
          <li>
            <strong>Maximum Load Capacity</strong>: 300 KG
          </li>
          <li>
            <strong>Origin of Manufacture</strong>: India
          </li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Dimensions</h3>
        <ul className="mb-4">
          <li>
            <strong>Width</strong>: 265.32 cm
          </li>
          <li>
            <strong>Height</strong>: 76 cm
          </li>
          <li>
            <strong>Depth</strong>: 167.76 cm
          </li>
          <li>
            <strong>Weight</strong>: 65 KG
          </li>
          <li>
            <strong>Seat Height</strong>: 41.52 cm
          </li>
          <li>
            <strong>Leg Height</strong>: 5.46 cm
          </li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Warranty</h3>
        <ul className="mb-4">
          <li>
            <strong>Warranty Summary</strong>: 1.2 Year Manufacturing Warranty
          </li>
          <li>
            <strong>Warranty Service Type</strong>: For Warranty Claims or Any
            Product Related Issues Please Email at support@xyz.com
          </li>
          <li>
            <strong>Covered in Warranty</strong>: Warranty of the product is
            limited to manufacturing defects only.
          </li>
          <li>
            <strong>Not Covered in Warranty</strong>: The Warranty Does Not
            Cover Damages Due To Usage Of The Product Beyond Its Intended Use
            And Wear &amp; Tear In The Natural Course Of Product Usage.
          </li>
          <li>
            <strong>Domestic Warranty</strong>: 3 Months
          </li>
        </ul>
       <Link href="/Cart"> <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">
          Add To Cart
        </button></Link>
      </div>
    </div>
  </div>
</>
<Image src={"/Frame 161.png"} alt="" width={1440} height={270}/>
<Footer/>


        </div>
    )
}