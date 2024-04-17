import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/terms" className="hover:text-gray-300">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-gray-300">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">
              Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div>&copy; {new Date().getFullYear()} Your Company</div>
      </div>
    </footer>
  );
}