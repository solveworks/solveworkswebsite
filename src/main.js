import './style.css'
import { Header } from './components/Header.js'
import { Hero } from './components/Hero.js'
import { Features } from './components/Features.js'
import { ContactForm } from './components/ContactForm.js'
import { Footer } from './components/Footer.js'
import { PrivacyPolicy } from './components/PrivacyPolicy.js'
import { TextAgreement } from './components/TextAgreement.js'
import { submitContactForm, submitTextAgreement } from './utils/supabase.js'

function render() {
  const path = window.location.pathname;
  const app = document.querySelector('#app');

  if (path === '/privacy-policy') {
    app.innerHTML = `
      ${Header()}
      <main>
        ${PrivacyPolicy()}
      </main>
      ${Footer()}
    `;
  } else if (path === '/text-agreement') {
    app.innerHTML = `
      ${Header()}
      <main>
        ${TextAgreement()}
      </main>
      ${Footer()}
    `;
  } else {
    app.innerHTML = `
      ${Header()}
      <main>
        ${Hero()}
        ${Features()}
        ${ContactForm()}
      </main>
      ${Footer()}
    `;
  }

  // Initialization
  initAnimations();
  initTheme();

  if (path === '/') {
    initParallax();
    initForm();
  }

  if (path === '/text-agreement') {
    initTextForm();
  }

  window.scrollTo(0, 0);
}

function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initParallax() {
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    const handleScroll = () => {
      if (window.scrollY > heroSection.offsetHeight) return;
      const scrolled = window.scrollY;
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / 500);
      }
    };
    window.addEventListener('scroll', handleScroll);
  }
}

function initForm() {
  const form = document.getElementById('contactForm');
  const statusDiv = document.querySelector('#form-status');

  if (form && statusDiv) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      statusDiv.textContent = 'Sending...';
      statusDiv.className = 'form-status loading';

      const formData = new FormData(form);
      const data = {
        full_name: formData.get('full_name'),
        email: formData.get('email'),
        phone_number: formData.get('phone'),
        message: formData.get('message'),
        source: 'website_contact_form'
      };

      const { success, error } = await submitContactForm(data);

      if (success) {
        statusDiv.textContent = 'Message sent! We will be in touch shortly.';
        statusDiv.className = 'form-status success';
        form.reset();
      } else {
        statusDiv.textContent = 'Error sending message. Please try again.';
        statusDiv.className = 'form-status error';
        console.error(error);
      }
    });
  }
}

function initTextForm() {
  const form = document.getElementById('textAgreementForm');
  const statusDiv = document.querySelector('#text-form-status');

  if (form && statusDiv) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      statusDiv.textContent = 'Sending...';
      statusDiv.className = 'form-status loading';

      const formData = new FormData(form);
      const data = {
        business_name: formData.get('business_name'),
        mobile_phone: formData.get('mobile_phone')
      };

      const { success, error } = await submitTextAgreement(data);

      if (success) {
        statusDiv.textContent = 'Agreement submitted successfully!';
        statusDiv.className = 'form-status success';
        form.reset();
      } else {
        statusDiv.textContent = 'Error submitting agreement. Please try again.';
        statusDiv.className = 'form-status error';
        console.error(error);
      }
    });
  }
}

function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const isDark = body.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
}

// Client-side routing for links
document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (link && link.href && link.origin === window.location.origin) {
    if (link.hash || link.href.includes('tel:')) return;
    e.preventDefault();
    window.history.pushState({}, '', link.href);
    render();
  }
});

window.addEventListener('popstate', render);

// Initial render
render();
