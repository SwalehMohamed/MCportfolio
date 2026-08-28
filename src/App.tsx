import { useState, useEffect } from 'react';
import { useHashRoute, useRevealOnScroll } from '@/hooks/useRouter';
import { getSolution } from '@/config/solutions';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ExhibitionMode } from '@/components/ExhibitionMode';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { SolutionsPage } from '@/pages/SolutionsPage';
import { SolutionDetailPage } from '@/pages/SolutionDetailPage';
import { DigitalTransformationPage } from '@/pages/DigitalTransformationPage';
import { ImpactPage } from '@/pages/ImpactPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { BrochurePage } from '@/pages/BrochurePage';
import { ContactPage } from '@/pages/ContactPage';

function App() {
  const [route, navigate] = useHashRoute();
  const [exhibitionMode, setExhibitionMode] = useState(false);

  useRevealOnScroll();

  // Re-run reveal observer when route changes
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 50);
    return () => clearTimeout(timer);
  }, [route]);

  // Exhibition mode
  if (exhibitionMode) {
    return (
      <ExhibitionMode
        onNavigate={(r) => {
          setExhibitionMode(false);
          navigate(r);
        }}
        onExit={() => setExhibitionMode(false)}
      />
    );
  }

  // Route matching
  const renderPage = () => {
    // Solution detail: /solutions/dials, /solutions/pmfs, etc.
    if (route.startsWith('/solutions/')) {
      const solutionId = route.split('/')[2];
      const solution = getSolution(solutionId);
      if (solution) {
        return <SolutionDetailPage solution={solution} onNavigate={navigate} />;
      }
      return <SolutionsPage onNavigate={navigate} />;
    }

    switch (route) {
      case '/':
        return <HomePage onNavigate={navigate} />;
      case '/about':
        return <AboutPage onNavigate={navigate} />;
      case '/solutions':
        return <SolutionsPage onNavigate={navigate} />;
      case '/transformation':
        return <DigitalTransformationPage onNavigate={navigate} />;
      case '/impact':
        return <ImpactPage onNavigate={navigate} />;
      case '/gallery':
        return <GalleryPage onNavigate={navigate} />;
      case '/brochure':
        return <BrochurePage onNavigate={navigate} />;
      case '/contact':
        return <ContactPage onNavigate={navigate} />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header
        currentRoute={route}
        onNavigate={navigate}
        onEnterExhibition={() => setExhibitionMode(true)}
      />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
