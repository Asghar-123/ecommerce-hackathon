import Footer from "@/components/footer";
import Navbar2 from "@/components/navbar2";
import Sidebar from "@/components/sidebar";

export default function Blog(){
    return(
        <div>
            <Navbar2/>
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
            <h1 className="text-4xl font-bold">Blog</h1>
            <p className="text-lg">Home &gt; Blog</p>
          </div>
        </section>
        </main>
            <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Blog Page</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    rel="stylesheet"
  />
  <div className="container mx-auto px-4 py-8 mt-11">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        {/* Blog Post 1 */}
        <div className="mb-8">
          <img
            alt="Laptop on a wooden table with a notebook, pen, glass of water, and a phone"
            className="w-full rounded-lg"
            height={400}
            src="/Rectangle 68.png"
            width={800}
          />
          <div className="flex items-center text-gray-500 text-sm mt-4">
            <i className="fas fa-user mr-2"></i>
            Admin
            <i className="fas fa-calendar-alt mx-4"></i>
            14 Oct 2022
            <i className="fas fa-folder-open"></i>
            Wood
          </div>
          <h2 className="text-2xl font-bold mt-2">
            Going all-in with millennial design
          </h2>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <a className="text-blue-500 mt-2 inline-block" href="#">
            Read more
          </a>
        </div>
        {/* Blog Post 2 */}
        <div className="mb-8">
          <img
            alt="Person writing on a planner with a hat on the table"
            className="w-full rounded-lg"
            height={400}
            src="/Rectangle 69.png"
            width={800}
          />
          <div className="flex items-center text-gray-500 text-sm mt-4">
            <i className="fas fa-user mr-2"></i>
            Admin
            <i className="fas fa-calendar-alt mx-4"></i>
            14 Oct 2022
            <i className="fas fa-folder-open"></i>
            Handmade
          </div>
          <h2 className="text-2xl font-bold mt-2">
            Exploring new ways of decorating
          </h2>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <a className="text-blue-500 mt-2 inline-block" href="#">
            Read more
          </a>
        </div>
        {/* Blog Post 3 */}
        <div className="mb-8">
          <img
            alt="Person writing in a notebook with a laptop, coffee, and a book on the table"
            className="w-full rounded-lg"
            height={400}
            src="/Rectangle 70.png"
            width={800}
          />
          <div className="flex items-center text-gray-500 text-sm mt-4">
            <i className="fas fa-user mr-2"></i>
            Admin
            <i className="fas fa-calendar-alt mx-4"></i>
            14 Oct 2022
            <i className="fas fa-folder-open"></i>
            Wood
          </div>
          <h2 className="text-2xl font-bold mt-2">
            Handmade pieces that took time to make
          </h2>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <a className="text-blue-500 mt-2 inline-block" href="#">
            Read more
          </a>
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <nav className="inline-flex">
            <a
              className="px-3 py-2 border border-gray-300 text-gray-500 bg-white hover:bg-gray-100"
              href="#"
            >
              1
            </a>
            <a
              className="px-3 py-2 border border-gray-300 text-gray-500 bg-white hover:bg-gray-100"
              href="#"
            >
              2
            </a>
            <a
              className="px-3 py-2 border border-gray-300 text-gray-500 bg-white hover:bg-gray-100"
              href="#"
            >
              3
            </a>
            <a
              className="px-3 py-2 border border-gray-300 text-gray-500 bg-white hover:bg-gray-100"
              href="#"
            >
              Next
            </a>
          </nav>
        </div>
      </div>
      <div>
        {/* Search */}
        <div className="mb-8">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Search"
            type="text"
          />
        </div>
        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Categories</h3>
          <ul className="text-gray-700">
            <li className="flex justify-between py-2 border-b border-gray-200">
              <span>Crafts</span>
              <span>2</span>
            </li>
            <li className="flex justify-between py-2 border-b border-gray-200">
              <span>Design</span>
              <span>8</span>
            </li>
            <li className="flex justify-between py-2 border-b border-gray-200">
              <span>Handmade</span>
              <span>7</span>
            </li>
            <li className="flex justify-between py-2 border-b border-gray-200">
              <span>Interior</span>
              <span>1</span>
            </li>
            <li className="flex justify-between py-2 border-b border-gray-200">
              <span>Wood</span>
              <span>6</span>
            </li>
          </ul>
        </div>
        {/* Recent Posts */}
        <div>
          <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
          <ul className="text-gray-700">
            <li className="flex items-center mb-4">
              <img
                alt="Thumbnail of a laptop on a wooden table"
                className="w-12 h-12 rounded-lg mr-4"
                height={60}
                src="/Rectangle 71.png"
                width={60}
              />
              <div>
                <a className="text-blue-500" href="#">
                  Going all-in with millennial design
                </a>
                <p className="text-sm text-gray-500">01 Aug 2022</p>
              </div>
            </li>
            <li className="flex items-center mb-4">
              <img
                alt="Thumbnail of a person writing on a planner"
                className="w-12 h-12 rounded-lg mr-4"
                height={60}
                src="/Rectangle 72.png"
                width={60}
              />
              <div>
                <a className="text-blue-500" href="#">
                  Exploring new ways of decorating
                </a>
                <p className="text-sm text-gray-500">31 Aug 2022</p>
              </div>
            </li>
            <li className="flex items-center mb-4">
              <img
                alt="Thumbnail of a person writing in a notebook"
                className="w-12 h-12 rounded-lg mr-4"
                height={60}
                src="/Rectangle 73.png"
                width={60}
              />
              <div>
                <a className="text-blue-500" href="#">
                  Handmade pieces that took time to make
                </a>
                <p className="text-sm text-gray-500">14 Oct 2022</p>
              </div>
            </li>
            <li className="flex items-center mb-4">
              <img
                alt="Thumbnail of a modern home"
                className="w-12 h-12 rounded-lg mr-4"
                height={60}
                src="/Rectangle 74.png"
                width={60}
              />
              <div>
                <a className="text-blue-500" href="#">
                  Modern home in Milan
                </a>
                <p className="text-sm text-gray-500">03 Aug 2022</p>
              </div>
            </li>
            <li className="flex items-center mb-4">
              <img
                alt="Thumbnail of a colorful office"
                className="w-12 h-12 rounded-lg mr-4"
                height={60}
                src="/Rectangle 75.png"
                width={60}
              />
              <div>
                <a className="text-blue-500" href="#">
                  Colorful office redesign
                </a>
                <p className="text-sm text-gray-500">03 Aug 2022</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* Footer */}
  <footer className="bg-gray-100 py-8 mt-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start">
          <i className="fas fa-trophy text-2xl text-yellow-500 mr-2"></i>
          <div>
            <h4 className="font-bold">High Quality</h4>
            <p className="text-gray-600">crafted from top materials</p>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <i className="fas fa-shield-alt text-2xl text-yellow-500 mr-2"></i>
          <div>
            <h4 className="font-bold">Warranty Protection</h4>
            <p className="text-gray-600">Over 2 years</p>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <i className="fas fa-truck text-2xl text-yellow-500 mr-2"></i>
          <div>
            <h4 className="font-bold">Free Shipping</h4>
            <p className="text-gray-600">Order over 150 $</p>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <i className="fas fa-headset text-2xl text-yellow-500 mr-2"></i>
          <div>
            <h4 className="font-bold">24 / 7 Support</h4>
            <p className="text-gray-600">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <Footer/>
</>

        </div>

        
    )
}