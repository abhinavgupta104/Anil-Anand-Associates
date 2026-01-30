import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import DisclaimerModal from './DisclaimerModal';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <DisclaimerModal />
      <Header />
      <main className="flex-1 pt-20 md:pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
