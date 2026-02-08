/* src/components/ContactForm.js */
export function ContactForm() {
    return `
    <section id="contact" class="contact">
      <div class="container">
        <div class="contact-wrapper">
          <h2 class="section-title">Start Automating Today</h2>
          <p class="contact-subtitle">Tell us about your business needs.</p>
          
          <form id="contact-form" class="contact-form">
            <div class="form-group">
              <label for="full_name">Full Name</label>
              <input type="text" id="full_name" name="full_name" required placeholder="Jane Doe">
            </div>
            
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" required placeholder="jane@company.com">
            </div>
            
            <div class="form-group">
              <label for="company_name">Company Name</label>
              <input type="text" id="company_name" name="company_name" placeholder="Acme Inc.">
            </div>

            <div class="form-group">
              <label for="message">How can we help?</label>
              <textarea id="message" name="message" rows="4" required placeholder="I need an AI dispatcher for my plumbing business..."></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-block">Send Application</button>
            <div id="form-status" class="form-status"></div>
          </form>
        </div>
      </div>
    </section>
  `;
}
