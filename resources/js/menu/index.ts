const button: HTMLElement | null = document.querySelector('.menu-dropdown-button')
const buttonParent = button?.parentElement
const items: NodeList = document.querySelectorAll('.menu-dropdown-item')

button?.addEventListener('click', () => toggle(buttonParent!, 'open', items))

function toggle(elementParent: HTMLElement, className: string, children) {
  elementParent?.classList.toggle(className)
  children.forEach((el: HTMLElement) => {
    el.addEventListener('click', () => {
      buttonParent?.classList.remove('open')
    })
  })
}
