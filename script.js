// Typing Animation
const typingTexts = ['Backend Developer', 'Student', 'Code Explorer'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 50;

function typeText() {
  const typingElement = document.getElementById('typing-text');
  const currentText = typingTexts[textIndex];
  
  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 30;
  } else {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 50;
  }
  
  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    typingSpeed = 2000;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % typingTexts.length;
  }
  
  setTimeout(typeText, typingSpeed);
}

// Floating Particles
function createFloatingParticles(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  // Create particles
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.width = (4 + Math.random() * 8) + 'px';
    particle.style.height = particle.style.width;
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.animationDuration = (15 + Math.random() * 10) + 's';
    container.appendChild(particle);
  }
  
  // Create code symbols
  const symbols = ['<>', '{...}', '()=>{}', 'fn()', 'API', 'DB'];
  symbols.forEach((symbol, i) => {
    const code = document.createElement('div');
    code.className = 'code-symbol';
    code.textContent = symbol;
    code.style.left = (10 + i * 15) + '%';
    code.style.top = (20 + (i % 3) * 25) + '%';
    code.style.animationDelay = (i * 1.5) + 's';
    code.style.animationDuration = (8 + i) + 's';
    container.appendChild(code);
  });
}

// Scroll Spy
function updateScrollSpy() {
  const sections = ['hero', 'intro', 'about', 'education', 'skills', 'contact'];
  const scrollPosition = window.scrollY + 100;
  
  for (const sectionId of sections) {
    const section = document.getElementById(sectionId);
    const link = document.querySelector(`[data-section="${sectionId}"]`);
    
    if (section && link) {
      const offsetTop = section.offsetTop;
      const offsetHeight = section.offsetHeight;
      
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        document.querySelectorAll('.scroll-spy a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
        break;
      }
    }
  }
}

// Smooth Scroll
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Smooth scroll for navigation links
document.querySelectorAll('.scroll-spy a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute('data-section');
    scrollToSection(sectionId);
  });
});

// Copy Email
function copyEmail() {
  const email = 'khushmitbokre@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    showToast('Email copied!', 'khushmitbokre@gmail.com has been copied to clipboard.');
  });
}

// Show Toast
function showToast(title, message) {
  const toast = document.getElementById('toast');
  toast.innerHTML = `<strong>${title}</strong><br>${message}`;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Contact Form
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');
const formWrapper = document.getElementById('contact-form-wrapper');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Hide form and show success message
  contactForm.style.display = 'none';
  successMessage.style.display = 'block';
  
  showToast('Message sent! 🎉', 'Thanks for reaching out! I\'ll get back to you soon.');
  
  // Reset form after 3 seconds
  setTimeout(() => {
    contactForm.reset();
    contactForm.style.display = 'flex';
    successMessage.style.display = 'none';
  }, 3000);
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.animate-fade-in, .skill-card, .about-card, .timeline-item');
  animatedElements.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
});

// Initialize
window.addEventListener('load', () => {
  typeText();
  createFloatingParticles('hero-particles');
  createFloatingParticles('contact-particles');
  updateScrollSpy();
});

window.addEventListener('scroll', updateScrollSpy);

// Add animation delays to elements
document.addEventListener('DOMContentLoaded', () => {
  // Skill cards
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach((card, i) => {
    card.style.animationDelay = (i * 0.1) + 's';
  });
  
  // Timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, i) => {
    item.style.animationDelay = (i * 0.2) + 's';
  });
  
  // About cards
  const aboutCards = document.querySelectorAll('.about-card');
  aboutCards.forEach((card, i) => {
    card.style.animationDelay = (i * 0.2) + 's';
  });
  
  // Tech badges
  const techBadges = document.querySelectorAll('.tech-badge');
  techBadges.forEach((badge, i) => {
    badge.style.animationDelay = (0.4 + i * 0.1) + 's';
  });
  
  // Skill badges
  document.querySelectorAll('.skill-card').forEach(card => {
    const badges = card.querySelectorAll('.badge');
    badges.forEach((badge, i) => {
      badge.style.animationDelay = (i * 0.1) + 's';
    });
  });
});
