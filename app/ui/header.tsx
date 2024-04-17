import Link from 'next/link';
import NavLinks from './nav-links';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
        
            <div className="w-32 md:w-40">
              {/* logo here */}
            </div>
        </Link>
        <nav className='flex'>
        <NavLinks />
        </nav>
      </div>
    </header>
  );
}
