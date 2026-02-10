/* src/components/Footer.js */
export function Footer() {
  return `
    <footer class="footer">
      <div class="container footer-content">
        <div class="footer-left">
          <p>&copy; ${new Date().getFullYear()} Solveworks Automations. All rights reserved.</p>
          <p class="footer-email">sales@solveworks.ai</p>
        </div>
        <div class="footer-right">
          <a href="/text-agreement" class="footer-link">Text Agreement</a>
          <a href="/privacy-policy" class="footer-link">Privacy Policy</a>
        </div>
      </div>
    </footer>
  `;
}
