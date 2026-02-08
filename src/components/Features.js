/* src/components/Features.js */
export function Features() {
    const features = [
        {
            title: "24/7 Availability",
            desc: "Never miss a call or lead again. Your AI dispatcher is always on, ready to schedule and support.",
            icon: "🕒"
        },
        {
            title: "Smart Scheduling",
            desc: "Integrates with your calendar to book appointments instantly, eliminating back-and-forth.",
            icon: "📅"
        },
        {
            title: "Seamless Integration",
            desc: "Connects with your CRM, Slack, and other tools to keep your workflow unified.",
            icon: "🔗"
        }
    ];

    const featureCards = features.map((f, i) => `
    <div class="feature-card reveal stagger-${(i % 3) + 1}">
      <div class="feature-icon">${f.icon}</div>
      <h3 class="feature-title">${f.title}</h3>
      <p class="feature-desc">${f.desc}</p>
    </div>
  `).join('');

    return `
    <section id="services" class="features">
      <div class="container">
        <h2 class="section-title">Why Choose Solveworks?</h2>
        <div class="features-grid">
          ${featureCards}
        </div>
      </div>
    </section>
  `;
}
