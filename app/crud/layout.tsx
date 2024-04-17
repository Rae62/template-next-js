
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Footer from "../ui/footer";
import Header from "../ui/header";

 

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
 <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div >
          {children}
        </div>
      </main>
      <Footer />
    </div>
</html>
  );
}