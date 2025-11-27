import { useEffect } from "react";

export default function SEO({ 
  title = "McGill AeroHacks 2026 | Drone Programming Hackathon",
  description = "Join 150+ students at McGill AeroHacks for 3 days of drone programming, autonomous flight systems, and innovation. March 13th - March 15th, 2026 at McGill University, Montreal.",
  keywords = "hackathon, drone programming, McGill University, aerospace, autonomous drones, computer vision, flight control, Montreal, student hackathon, AeroHacks",
  image = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6902cf6648cb3b2094dab1d3/0c348f653_FuturisticLogoDesignforMcGillAeroHacks.png",
  url = "https://mcgillaerohacks.com",
  type = "website"
}) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (name, content, isProperty = false) => {
      if (!content) return;
      
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Standard meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('author', 'McGill Aerial Design');
    setMetaTag('robots', 'index, follow');

    // Open Graph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', image, true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:type', type, true);
    setMetaTag('og:site_name', 'McGill AeroHacks', true);

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);

    // Additional SEO tags
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    setMetaTag('theme-color', '#06b6d4');

    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', url);
      document.head.appendChild(canonical);
    }
  }, [title, description, keywords, image, url, type]);

  return null;
}