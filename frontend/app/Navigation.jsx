export default function Navigation() {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">Logo</div>

        {/* Menu */}
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <a href="/" className="hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="/service" className="hover:text-blue-600">
              Service
            </a>
          </li>
          <li>
            <a href="/service/teams" className="hover:text-blue-600">
              Teams
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
