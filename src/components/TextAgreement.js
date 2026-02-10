export function TextAgreement() {
  return `
    <section class="policy-page reveal">
      <div class="container container-narrow">
        <a href="/" class="back-link">
          <svg style="width:20px;height:20px;vertical-align:middle;margin-right:5px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg> Back to Home
        </a>
        
        <h1 class="policy-title">Business Automation Text Agreement</h1>
        
        <div class="policy-content">
          <p>By opting into our SMS service, you agree to receive operational notifications, summaries of customer inquiries, missed call alerts, and other service-related text messages from Solveworks Automations. These messages are intended to assist you in managing your business communications and ensuring timely follow-up with your customers.</p>

          <p>You have the right to cancel the SMS service at any time. To unsubscribe, simply text “STOP” to the phone number that contacted you. Once we receive your STOP request, you will receive an SMS confirming your unsubscribe status. After this confirmation, you will no longer receive SMS messages from us. If you wish to rejoin the service, you may opt in again through the same enrollment process, and message notifications will resume.</p>

          <p>If you experience any issues with our messaging program, you can reply with the keyword “HELP” to receive additional assistance. You may also contact us directly at <a href="mailto:booking@solveworksautomations.com" class="text-link">booking@solveworksautomations.com</a> for help or questions related to SMS notifications.</p>

          <p>Please note that carriers are not liable for delayed or undelivered messages. Standard message and data rates may apply for both incoming and outgoing messages between you and Solveworks Automations.</p>

          <p>The frequency of messages you receive will vary based on your interactions with the system and the services you are using. If you have questions about your text or data plan, we recommend contacting your wireless provider for more information.</p>

          <p>For inquiries related to privacy and data protection, please review our privacy policy by visiting <a href="/privacy-policy" class="text-link">solveworksautomations.com/privacy-policy</a></p>

          <p>If you need further assistance or have additional questions, please contact us at <a href="mailto:booking@solveworksautomations.com" class="text-link">booking@solveworksautomations.com</a>.</p>

          <p>Thank you for choosing Solveworks Automations. We look forward to supporting your business communications and providing reliable operational alerts.</p>
        </div>

        <div class="agreement-form-wrapper glass-panel reveal" style="margin-top: 4rem; padding: 2.5rem;">
          <h3 style="margin-bottom: 1.5rem;">Enroll in SMS Notifications</h3>
          <form id="textAgreementForm" class="contact-form">
            <div class="form-group">
              <label for="business_name">Business Name</label>
              <input type="text" id="business_name" name="business_name" required placeholder="Your Company Name">
            </div>
            
            <div class="form-group">
              <label for="mobile_phone">Mobile Phone Number</label>
              <input type="tel" id="mobile_phone" name="mobile_phone" required placeholder="+1 (555) 000-0000">
            </div>

            <div class="form-group checkbox-group">
              <label class="checkbox-container">
                <input type="checkbox" id="agreement_check" name="agreement_check" required>
                <span class="checkmark"></span>
                <span class="checkbox-text">
                  By checking this box, you agree to receive SMS notifications from Solveworks Automations related to operational alerts, missed call summaries, and service updates. Message frequency varies. Message & data rates may apply. Reply STOP to unsubscribe. Reply HELP for help. You also agree to the <a href="/text-agreement" class="text-link">SMS Terms & Conditions</a> and <a href="/privacy-policy" class="text-link">Privacy Policy</a>.
                </span>
              </label>
            </div>

            <button type="submit" class="btn btn-primary btn-block">Send</button>
            <div id="text-form-status" class="form-status"></div>
          </form>
        </div>
        
        <div style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--glass-border);">
          <p style="font-size: 0.85rem; color: var(--text-secondary);">&copy; ${new Date().getFullYear()} Solveworks Automations. All rights reserved.</p>
        </div>
      </div>
    </section>
  `;
}
