/* src/components/ContactForm.js */
export function ContactForm() {
  return `
    <section id="contact" class="contact">
      <div class="container">
        <div class="contact-wrapper glass-panel reveal">
          <h2 class="section-title">Let's Talk</h2>
          <p class="section-desc" style="margin-bottom: 2rem;">Ready to scale your operations? Send us a message.</p>
          
          <form id="contactForm" class="contact-form">
            <div class="form-group">
              <label for="full_name">Full Name</label>
              <input type="text" id="full_name" name="full_name" required placeholder="John Smith">
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="john@example.com">
            </div>

            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required placeholder="+1 (555) 000-0000">
            </div>

            <div class="form-group">
              <label for="message">How can automation help you?</label>
              <textarea id="message" name="message" rows="4" required placeholder="I'm interested in the AI dispatcher for..."></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-block">Send</button>
            <div id="form-status" class="form-status"></div>
          </form>
        </div>
      </div>
    </section>
  `;
}
