(function (){

  // Variables

  const nav = document.querySelector('nav')
  const opcoesMenu = nav.querySelector('div[name="opcoes"]')

  // Methods

  function adicionarClasse () {
    window.addEventListener('scroll', () => {
      const alturaPagina = window.scrollY
      if (alturaPagina < 10) nav.classList.remove('scroll')
      else nav.classList.add('scroll')
    })
  }

  function habilitarCliqueToggle () {
    nav.addEventListener('click', (elemento) => {
      const abrirMenu = 'img[name="menu"]'
      if (!elemento.target.matches(abrirMenu)) return
      
      const menuAberto = opcoesMenu.classList.contains('mostrar')
      if (menuAberto) opcoesMenu.classList.remove('mostrar')
      else opcoesMenu.classList.add('mostrar')
    })
  }


  // Start
  adicionarClasse()
  habilitarCliqueToggle()

}())

