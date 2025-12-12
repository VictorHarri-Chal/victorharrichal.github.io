import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { projectSlug: String }

  connect() {
    console.log("Project card controller connected")
    console.log("Project slug:", this.projectSlugValue)
  }

  click(event) {
    console.log("Click detected on project card")

    // Don't navigate if clicking on a link (like GitHub)
    if (event.target.closest('a')) {
      console.log("Click on link, not navigating")
      return
    }

    // Navigate to project detail page
    const projectSlug = this.projectSlugValue
    console.log("Navigating to project:", projectSlug)

    if (projectSlug) {
      window.location.href = `/projects/${projectSlug}`
    }
  }
}
