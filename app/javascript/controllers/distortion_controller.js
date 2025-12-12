import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["title", "bar1", "bar2"]

  connect() {
    // Masquer le contenu initialement
    this.element.style.opacity = "0"
    this.element.style.transform = "scale(0.9)"

    this.createBars()
    this.startAnimation()
  }

  createBars() {
    // Créer les barres de distortion
    this.bar1 = document.createElement("div")
    this.bar2 = document.createElement("div")

    // Barres plus étroites qui ne couvrent pas tout l'écran
    this.bar1.className = "fixed top-0 left-0 w-1/2 h-full bg-neutral-950 z-50 transform -translate-x-full"
    this.bar2.className = "fixed top-0 right-0 w-1/2 h-full bg-neutral-950 z-50 transform translate-x-full"

    document.body.appendChild(this.bar1)
    document.body.appendChild(this.bar2)
  }

  startAnimation() {
    // Démarrer l'animation immédiatement
    requestAnimationFrame(() => {
      // Animation des barres qui se déplacent vers l'extérieur
      this.bar1.style.transition = "transform 1s cubic-bezier(0.4, 0, 0.2, 1)"
      this.bar2.style.transition = "transform 1s cubic-bezier(0.4, 0, 0.2, 1)"

      this.bar1.style.transform = "translateX(-100%)"
      this.bar2.style.transform = "translateX(100%)"

      // Révéler le contenu après un court délai
      setTimeout(() => {
        this.element.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out"
        this.element.style.opacity = "1"
        this.element.style.transform = "scale(1)"

        // Nettoyer les barres après l'animation
        setTimeout(() => {
          if (this.bar1 && this.bar1.parentNode) this.bar1.remove()
          if (this.bar2 && this.bar2.parentNode) this.bar2.remove()
        }, 800)
      }, 500)
    })
  }

  disconnect() {
    if (this.bar1 && this.bar1.parentNode) this.bar1.remove()
    if (this.bar2 && this.bar2.parentNode) this.bar2.remove()
  }
}
