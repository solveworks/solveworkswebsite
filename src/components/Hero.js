/* src/components/Hero.js */
export function Hero() {
  return `
    <section class="hero">
      <div class="container hero-content">
        <h1 class="hero-title reveal">
          Automate Operations with <br>
          <span class="text-gradient">Intelligent Dispatching</span>
        </h1>
        <p class="hero-subtitle reveal stagger-1">
          Solveworks empowers service businesses with AI dispatchers that work 24/7. 
          Scale efficiency and reduce overhead instantly.
        </p>
        <div class="hero-actions reveal stagger-2">
          <a href="tel:+17816788623" class="btn btn-primary btn-lg">
            <svg style="width:24px;height:24px;margin-right:10px;fill:none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
               <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call AI Demo
          </a>
          <a href="#contact" class="btn btn-secondary btn-lg">Book Consultation</a>
        </div>
        <div class="hero-note reveal stagger-3">
          <span style="display:inline-block; width:8px; height:8px; background:#4ade80; border-radius:50%; margin-right:8px;"></span>
          Live Demo Active Now: +1 (781) 678-8623
        </div>
      </div>
    </section>
  `;
}
