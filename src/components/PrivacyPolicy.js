export function PrivacyPolicy() {
    return `
    <section class="policy-page reveal">
      <div class="container container-narrow">
        <a href="/" class="back-link">
          <svg style="width:20px;height:20px;vertical-align:middle;margin-right:5px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg> Back to Home
        </a>
        
        <h1 class="policy-title">Privacy Policy — Solveworks Automations</h1>
        <p class="policy-intro">Solveworks Automations (“we”, “us”, “our”) respects your privacy. This Privacy Policy explains how we collect, use, and protect your information, including mobile phone numbers used for SMS communications.</p>

        <h2 class="policy-subtitle">Information We Collect</h2>
        <p>When you submit your phone number to receive SMS notifications, we collect:</p>
        <ul>
          <li>Your mobile phone number</li>
          <li>Your name or business name</li>
          <li>Information you provide through our forms or onboarding process</li>
        </ul>

        <h2 class="policy-subtitle">How We Use Mobile Information</h2>
        <p>Mobile information is used only to send the SMS notifications you have agreed to receive, including:</p>
        <ul>
          <li>Operational alerts</li>
          <li>Missed call summaries</li>
          <li>Service updates</li>
          <li>System notifications</li>
        </ul>

        <h2 class="policy-subtitle">No Mobile Data Sharing or Selling</h2>
        <p>We do not share, sell, or transfer your mobile information to third parties or affiliates for marketing or promotional purposes.</p>
        <p>This includes all phone numbers, SMS content, and user-submitted data.</p>

        <h2 class="policy-subtitle">Data Security</h2>
        <p>We take reasonable security measures to protect your information from loss, misuse, or unauthorized access.</p>

        <h2 class="policy-subtitle">Opt-Out</h2>
        <p>You may opt out at any time by replying STOP to any message you receive. After unsubscribing, you will no longer receive SMS messages unless you choose to opt in again.</p>

        <h2 class="policy-subtitle">Help</h2>
        <p>For help, reply HELP or contact us at <a href="mailto:booking@solveworksautomations.com" class="text-link">booking@solveworksautomations.com</a>.</p>

        <h2 class="policy-subtitle">Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Continued use of our services indicates acceptance of any updates.</p>
        
        <div style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--glass-border);">
          <p style="font-size: 0.85rem; color: var(--text-secondary);">&copy; ${new Date().getFullYear()} Solveworks Automations. All rights reserved.</p>
        </div>
      </div>
    </section>
  `;
}
