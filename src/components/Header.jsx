export function Heading() {
  return (
    <nav className="bg-gray-900 font-OpenSans shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between py-4">
        {/* Logo or Brand Name */}
        {/* Navigation Links */}
        <ul className="flex items-center space-x-4">
          {/* GitHub Link */}
          <li>
            <a
              href="http://github.com/Hiba-Mohamed"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold py-2 px-6 text-white border border-teal-300 rounded-md hover:bg-teal-300 hover:text-gray-900 transition duration-300"
            >
              GitHub
            </a>
          </li>
          {/* Add More Links (Optional) */}
        </ul>
      </div>
    </nav>
  );
}

export default Heading;
