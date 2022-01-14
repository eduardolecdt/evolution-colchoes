(function (){

  // Vídeo 1

  const section1 = document.querySelector('section[name="video1"]')
  const img1 = section1.querySelector('img[name="previa"]')
  const modal1 = section1.querySelector('div[name="modal"]')
  const button1 = section1.querySelector('button[name="fechar"]')
  const iframe1 = section1.querySelector('iframe')

  // FUNCTIONS
  
  function abrirModal1 () {
    img1.addEventListener('click', () => {
      modal1.classList.add('mostrar')
      iframe1.src = 'https://www.youtube.com/embed/kohoafPZeq4'
    })
  }

  function fecharModal1 () {
    button1.addEventListener('click', () => {
      modal1.classList.remove('mostrar')
      iframe1.src = ''
    })
  }

  abrirModal1()
  fecharModal1()

}())