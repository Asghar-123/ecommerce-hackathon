import Footer from "@/components/footer";
import Navbar3 from "@/components/navbar3";
import Image from "next/image";

export default function CheckOut(){
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
            <h1 className="text-4xl font-bold">Checkout</h1>
            <p className="text-lg">Home &gt; Checkout</p>
          </div>
        </section>
        </main>

        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Billing Details</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  <div className="container mx-auto p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-2xl font-bold mb-6">Billing details</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="company-name"
              className="block text-sm font-medium text-gray-700"
            >
              Company Name (Optional)
            </label>
            <input
              type="text"
              id="company-name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country / Region
            </label>
            <select
              id="country"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option>Sri Lanka</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="street-address"
              className="block text-sm font-medium text-gray-700"
            >
              Street address
            </label>
            <input
              type="text"
              id="street-address"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              Town / City
            </label>
            <input
              type="text"
              id="city"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="province"
              className="block text-sm font-medium text-gray-700"
            >
              Province
            </label>
            <select
              id="province"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option>Western Province</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="zip-code"
              className="block text-sm font-medium text-gray-700"
            >
              ZIP code
            </label>
            <input
              type="text"
              id="zip-code"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="additional-info"
              className="block text-sm font-medium text-gray-700"
            >
              Additional information
            </label>
            <textarea
              id="additional-info"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              defaultValue={""}
            />
          </div>
        </form>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-6">Product</h2>
        <div className="border border-gray-300 rounded-md p-4">
          <div className="flex justify-between mb-4">
            <span>Asgaard sofa x 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between mb-4 font-bold text-lg">
            <span>Total</span>
            <span className="text-yellow-500">Rs. 250,000.00</span>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment Method
            </label>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="bank-transfer"
                name="payment-method"
                className="mr-2"
                // defaultChecked=""
              />
              <label htmlFor="bank-transfer" className="text-sm">
                Direct Bank Transfer
              </label>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="cash-on-delivery"
                name="payment-method"
                className="mr-2"
              />
              <label htmlFor="cash-on-delivery" className="text-sm">
                Cash On Delivery
              </label>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <a href="#" className="text-black font-bold">
              privacy policy
            </a>
            .
          </p>
          <button className="w-full bg-black text-white py-2 rounded-md">
            Place order
          </button>
        </div>
      </div>
    </div>
  </div>
</>
<Image src={"/Frame 161.png"} alt="" width={1440} height={270}/>
<Footer/>

        </div>
    )
}