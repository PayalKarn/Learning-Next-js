import Link from "next/link";

export default function Navigation() {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">Logo</div>

        {/* Menu */}
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/service" className="hover:text-blue-600">
              Service
            </Link>
          </li>
          <li>
            <Link href="/service/teams" className="hover:text-blue-600">
              Teams
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
