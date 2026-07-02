import { Navigation } from '../components/layout/Navigation';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/hero/Hero';
import { Journey } from '../components/journey/Journey';
import { FeaturedEssays } from '../components/essays/FeaturedEssays';
import { AboutPreview } from '../components/layout/AboutPreview';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Journey />
        <FeaturedEssays />
        <AboutPreview />
      </main>
      <Footer />
    </>
  );
}
