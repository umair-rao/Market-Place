import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Zimo Products</span>
      </div>
      <div className="w-full block lg:flex lg:items-center lg:w-auto">
        <div className="text-sm pr-5">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search your product"
          />
        </div>
        <div className="relative text-sm pr-5">
          <div className="inline-block relative w-28">
            <select className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option value="" disabled selected hidden>
                Sort by
              </option>
              <option value="name">Name</option>
              <option value="rating">Rating</option>
              <option value="price">Price</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 8.707a1 1 0 0 1 1.414 0L10 10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <ul className="text-sm lg:flex-grow lg:flex lg:items-center lg:justify-end">
            <li className="mr-3">
              <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                  Homepage
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                  Contact
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                  About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
