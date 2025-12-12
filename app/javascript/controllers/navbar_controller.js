import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["navbar"]
  static values = { threshold: { type: Number, default: 100 } }

  connect() {
    this.lastScrollTop = 0
    this.isVisible = true
    this.bindScroll()
  }

  disconnect() {
    this.unbindScroll()
  }

  bindScroll() {
    this.scrollHandler = this.handleScroll.bind(this)
    window.addEventListener('scroll', this.scrollHandler, { passive: true })
  }

  unbindScroll() {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler)
    }
  }

  handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollDelta = scrollTop - this.lastScrollTop

    // Show navbar when scrolling up or at the top
    if (scrollTop <= this.thresholdValue || scrollDelta < 0) {
      this.show()
    }
    // Hide navbar when scrolling down and not at the top
    else if (scrollDelta > 0 && scrollTop > this.thresholdValue) {
      this.hide()
    }

    this.lastScrollTop = scrollTop
  }

  show() {
    if (!this.isVisible) {
      this.navbarTarget.classList.remove('-translate-y-full')
      this.navbarTarget.classList.add('translate-y-0')
      this.isVisible = true
    }
  }

  hide() {
    if (this.isVisible) {
      this.navbarTarget.classList.remove('translate-y-0')
      this.navbarTarget.classList.add('-translate-y-full')
      this.isVisible = false
    }
  }
}
