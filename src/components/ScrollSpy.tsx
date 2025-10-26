import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'intro', label: 'Intro' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const ScrollSpy = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <ul className="space-y-4">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              to={section.id}
              spy={true}
              smooth={true}
              duration={500}
              className={`group flex items-center gap-3 cursor-pointer transition-all duration-300 ${
                activeSection === section.id ? 'opacity-100' : 'opacity-50 hover:opacity-100'
              }`}
            >
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? 'w-12 bg-primary shadow-[0_0_10px_rgba(6,182,212,0.8)]'
                    : 'w-8 bg-muted-foreground/50 group-hover:w-10 group-hover:bg-primary/70'
                }`}
              />
              <span
                className={`text-sm font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? 'text-primary translate-x-0'
                    : 'text-muted-foreground translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                }`}
              >
                {section.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
