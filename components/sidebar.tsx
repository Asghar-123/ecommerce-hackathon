export default function Sidebar(){
    return(
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
                src="https://storage.googleapis.com/a1aa/image/DjE0OfCvwFxqV6TUaAD4hmKWvNsER5Ua9yp4FYxi1iMD3veTA.jpg"
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
                src="https://storage.googleapis.com/a1aa/image/mWv3VCqjhjbxLZyjyldrv9hQAhfwYhCVN74KN9lHQRSG3veTA.jpg"
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
                src="https://storage.googleapis.com/a1aa/image/n7axwmTbtwbYBlKaCZDRvkIFLb0KR0S4yU8x6u8ZWsHi7XfJA.jpg"
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
                src="https://storage.googleapis.com/a1aa/image/eKYYPKjsf9uxC0oUcYFDEUBOCJNx7txymsJ7XdXfGlcicf1PB.jpg"
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
                src="https://storage.googleapis.com/a1aa/image/65e1L80eOLmU4USNzFZgkLR5KgUHGOpZgLiEOyJZrg2Kuf6nA.jpg"
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
    
        
    )
}