import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import MetaPixelTracker from './MetaPixelTracker';

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <MetaPixelTracker />
      <Header />
      <main id="top">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
