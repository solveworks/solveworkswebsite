/* src/components/Features.js */
export function Features() {
  const features = [
    {
      title: "24/7 AI Reception",
      desc: "Never miss a lead. Our AI dispatchers handle calls, answer questions, and schedule jobs while you sleep.",
      icon: "📞"
    },
    {
      title: "Smart Scheduling",
      desc: "Automated calendar sync that books appointments instantly, eliminating back-and-forth friction.",
      icon: "🗓️"
    },
    {
      title: "CRM Integration",
      desc: "Seamlessly push data to your existing tools. Slack, HubSpot, or custom APIs—we connect it all.",
      icon: "🔌"
    }
  ];

  const featureCards = features.map((f, i) => `
    <div class="feature-card glass-panel reveal stagger-${(i % 3) + 1}">
      <div class="feature-icon">${f.icon}</div>
      <h3 class="feature-title">${f.title}</h3>
      <p class="feature-desc">${f.desc}</p>
    </div>
  `).join('');

  return `
    <section id="services" class="features">
      <div class="container">
        <h2 class="section-title">Core Capabilities</h2>
        <p class="section-desc">Practical AI utility designed for the modern service business.</p>
        <div class="features-grid">
          ${featureCards}
        </div>
      </div>
    </section>
  `;
}
