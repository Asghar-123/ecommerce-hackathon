import Link from "next/link";

export default function CartSidebar(){
    return(
        <div>
            <aside className="fixed right-0 top-0 w-full h-full bg-white shadow-lg p-8">
    <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <img
          alt="Asgaard sofa"
          className="w-16 h-16 rounded-lg"
          height={100}
          src="/Group 146.png"
          width={100}
        />
        <div className="flex-1 ml-4">
          <h3 className="text-gray-800">Asgaard sofa</h3>
          <p className="text-gray-600">1 x Rs. 250,000.00</p>
        </div>
        <button className="text-gray-600 hover:text-gray-900">
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="flex items-center justify-between">
        <img
          alt="Casaliving Wood"
          className="w-16 h-16 rounded-lg"
          height={100}
          src="/Group 147.png"
          width={100}
        />
        <div className="flex-1 ml-4">
          <h3 className="text-gray-800">Casaliving Wood</h3>
          <p className="text-gray-600">1 x Rs. 270,000.00</p>
        </div>
        <button className="text-gray-600 hover:text-gray-900">
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
    <div className="mt-8">
      <div className="flex justify-between text-gray-800">
        <span>Subtotal</span>
        <span className="font-bold">Rs. 520,000.00</span>
      </div>
      <div className="flex space-x-4 mt-4">
       <Link href="/Cart"> <button className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg">
          Cart
        </button></Link>
        <Link href="/Checkout"> <button className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg">
          Checkout
        </button></Link>
        <Link href="/Compare"> <button className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg">
          Comparison
        </button></Link>
      </div>
    </div>
  </aside>
        </div>
    )
}