(function (){

  // VARIABLES

  const section = document.querySelector('section[name="fraseComVideo"]')
  const img = section.querySelector('img[name="previa"]')
  const modal = section.querySelector('div[name="modal"]')
  const button = section.querySelector('button[name="fechar"]')
  const iframe = section.querySelector('iframe')

  // FUNCTIONS
  
  function abrirModal () {
    img.addEventListener('click', () => {
      modal.classList.add('mostrar')
      iframe.src = 'https://www.youtube-nocookie.com/embed/-_6_T-mvPog'
    })
  }

  function fecharModal () {
    button.addEventListener('click', () => {
      modal.classList.remove('mostrar')
      iframe.src = ''
    })
  }

  // ATIVAR TUDO

  abrirModal()
  fecharModal()

}())