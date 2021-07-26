const Panels = document.querySelectorAll('.panel')
console.log(Panels)

Panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClass()
    panel.classList.add('active')
  })
})

function removeActiveClass() {
  Panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
