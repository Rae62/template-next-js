import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import Header from './ui/header';
import Footer from './ui/footer';


export default function Page() {
  return (
    <>
 <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div >
          test
        </div>
      </main>
      <Footer />
    </div>
      </>

  );
}
