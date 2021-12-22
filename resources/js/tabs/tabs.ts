class Tabs extends HTMLElement {
  connectedCallback() {
    this.setAttribute('role', 'tablist')
    const tabs = Array.from(this.children)
    const hash: string = window.location.hash.replace('#', '')
    let currentTab: Element = tabs[0]
    tabs.forEach((tab, i) => {
      const id = tab.getAttribute('href')?.replace('#', '')
      const tabPanel = document.getElementById(id!)
      if (tab.getAttribute('aria-selected') === 'true' && hash === "") {
        currentTab = tab
      }
      if (id === hash) {
        currentTab = tab
      }
      tab.setAttribute('role', 'tablist')
      tab.setAttribute('aria-selected', 'false')
      tab.setAttribute('tabindex', '-1')
      tab.setAttribute('aria-control', id || "")
      tab.setAttribute('id', 'tab-' + id)
      tabPanel?.setAttribute('role', 'tabpanel')
      tabPanel?.setAttribute('aria-labelledby', 'tab-' + id)
      tabPanel?.setAttribute('hidden', 'hidden')
      tabPanel?.setAttribute('tabindex', '0')
      tab.addEventListener('keyup', (e: KeyboardEvent) => {
        let index: null | number = null
        if (e.key === "ArrowRight") {
          index = i === tabs.length - 1 ? 0 : i + 1

        } else if (e.key === "ArrowLeft") {
          index = i === 0 ? tabs.length - 1 : i - 1
          this.activate(tab)
          // @ts-ignore
          tab.focus()
        } else if (e.key === "Home") {
          index = 0
        } else if (e.key === "End") {
          index = tabs.length - 1
        }
        if (index !== null) {
          this.activate(tabs[index])
          // @ts-ignore
          tabs[index].focus()
        }
      })
      tab.addEventListener('click', e => {
        e.preventDefault()
        this.activate(tab)
      })
    })
    this.activate(currentTab, false)
    if (currentTab.getAttribute('aria-control') === hash) {
      window.requestAnimationFrame(() => {
        currentTab.scrollIntoView({
          behavior: 'smooth'
        })
      })
    }
  }


  public activate(tab, changeHash = true) {
    const currentTab = this.querySelector('[aria-selected="true"]')
    if (currentTab !== null) {
      const tabPanel = document.getElementById(currentTab.getAttribute('aria-control')!)
      currentTab.setAttribute('aria-selected', 'false')
      currentTab.setAttribute('tabindex', '-1')
      tabPanel!.setAttribute('hidden', 'hidden')
    }
    const id = tab.getAttribute('aria-control')
    const tabPanel = document.getElementById(id!)
    tab.setAttribute('aria-selected', 'true')
    tab.setAttribute('tabindex', '0')
    tabPanel?.removeAttribute('hidden')
    if (changeHash) {
      window.history.replaceState({}, '', '#' + id)
    }
  }
}

customElements.define('nav-tabs', Tabs)
