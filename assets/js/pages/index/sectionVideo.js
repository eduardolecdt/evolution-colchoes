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
      iframe1.src = 'https://www.youtube.com/embed/5lB__4AkS5E'
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

  // Vídeo 2

  const section2 = document.querySelector('section[name="video2"]')
  const img2 = section2.querySelector('img[name="previa"]')
  const modal2 = section2.querySelector('div[name="modal"]')
  const button2 = section2.querySelector('button[name="fechar"]')
  const iframe2 = section2.querySelector('iframe')

  // FUNCTIONS
  
  function abrirModal2 () {
    img2.addEventListener('click', () => {
      modal2.classList.add('mostrar')
      iframe2.src = 'https://www.youtube.com/embed/-_6_T-mvPog'
    })
  }

  function fecharModal2 () {
    button2.addEventListener('click', () => {
      modal2.classList.remove('mostrar')
      iframe2.src = ''
    })
  }

  abrirModal2()
  fecharModal2()

}())