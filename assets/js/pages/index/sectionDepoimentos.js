(function (){

  // VARIABLES

  const section = document.querySelector('section[name="depoimentos"]')

  // MODAL 1

  const img1 = section.querySelector('img[name="clienteUm"]')
  const modal1 = section.querySelector('div[name="modalUm"]')
  const button1 = modal1.querySelector('button[name="fechar"]')
  const iframe1 = modal1.querySelector('iframe')

  function abrirModal1 () {
    img1.addEventListener('click', () => {
      modal1.classList.add('mostrar')
      iframe1.src = 'https://www.youtube.com/embed/CZcFNIJKDE4'
    })
  }

  function fecharModal1 () {
    button1.addEventListener('click', () => {
      modal1.classList.remove('mostrar')
      iframe1.src = ''
    })
  }

  // MODAL 2

  const img2 = section.querySelector('img[name="clienteDois"]')
  const modal2 = section.querySelector('div[name="modalDois"]')
  const button2 = modal2.querySelector('button[name="fechar"]')
  const iframe2 = modal2.querySelector('iframe')

  function abrirModal2 () {
    img2.addEventListener('click', () => {
      modal2.classList.add('mostrar')
      iframe2.src = 'https://www.youtube.com/embed/oTFBDBW5i0k'
    })
  }

  function fecharModal2 () {
    button2.addEventListener('click', () => {
      modal2.classList.remove('mostrar')
      iframe2.src = ''
    })
  }

  // MODAL 3

  const img3 = section.querySelector('img[name="clienteTres"]')
  const modal3 = section.querySelector('div[name="modalTres"]')
  const button3 = modal3.querySelector('button[name="fechar"]')
  const iframe3 = modal3.querySelector('iframe')

  function abrirModal3 () {
    img3.addEventListener('click', () => {
      modal3.classList.add('mostrar')
      iframe3.src = 'https://www.youtube.com/embed/u6FZM6i9tyk'
    })
  }

  function fecharModal3 () {
    button3.addEventListener('click', () => {
      modal3.classList.remove('mostrar')
      iframe3.src = ''
    })
  }

  // ATIVAR TUDO

  abrirModal1()
  fecharModal1()
  abrirModal2()
  fecharModal2()
  abrirModal3()
  fecharModal3()

}())