document.addEventListener("nav", () => {
  const toggleBtn = document.getElementById("toc-toggle-btn")
  if (!toggleBtn) return

  toggleBtn.addEventListener("click", () => {
    const centerSidebar = document.querySelector(".center-sidebar")
    const centerContainer = document.querySelector(".center")

    if (centerSidebar) {
      centerSidebar.classList.toggle("toc-hidden")
    }
    if (centerContainer) {
      centerContainer.classList.toggle("toc-hidden")
    }
  })
})