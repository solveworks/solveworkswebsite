
import './style.css'
import { Header } from './components/Header.js'
import { Hero } from './components/Hero.js'
import { Features } from './components/Features.js'
import { ContactForm } from './components/ContactForm.js'
import { submitContactForm } from './utils/supabase.js'

document.querySelector('#app').innerHTML = `
  ${Header()}
  <main>
    ${Hero()}
    ${Features()}
    ${ContactForm()}
  </main>
  <footer class="footer">
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} Solveworks Automations. All rights reserved.</p>
    </div>
  </footer>
`


// Scroll Reveal Observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target) // Only animate once
    }
  })
}, observerOptions)

document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

// Attach Event Listeners
const form = document.querySelector('#contact-form')
const statusDiv = document.querySelector('#form-status')

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    // Clear status
    statusDiv.textContent = 'Sending...'
    statusDiv.className = 'form-status loading'

    const formData = new FormData(form)
    const data = {
      full_name: formData.get('full_name'),
      email: formData.get('email'),
      company_name: formData.get('company_name'),
      message: formData.get('message'),
      // Add source
      source: 'website_contact_form'
    }

    const { success, error } = await submitContactForm(data)

    if (success) {
      statusDiv.textContent = 'Message sent! We will be in touch shortly.'
      statusDiv.className = 'form-status success'
      form.reset()
    } else {
      statusDiv.textContent = 'Error sending message. Please try again.'
      statusDiv.className = 'form-status error'
      console.error(error)
    }
  })
}
