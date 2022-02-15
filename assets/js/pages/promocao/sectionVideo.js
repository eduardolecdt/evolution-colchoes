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
      iframe1.src = 'https://www.youtube.com/embed/5Yi3kqSK7lo'
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

  
  // CONST
  const sectionVideo = document.querySelector('section[name="video"]')
  const buttonSolteiro = sectionVideo.querySelector('button[name="solteiro"]')
  const buttonCasal = sectionVideo.querySelector('button[name="casal"]')

  function ativarSolteiro () {
    buttonSolteiro.addEventListener('click', () => {
      buttonSolteiro.classList.add('ativo')
      buttonCasal.classList.remove('ativo')
    })
  }

  function ativarCasal () {
    buttonCasal.addEventListener('click', () => {
      buttonCasal.classList.add('ativo')
      buttonSolteiro.classList.remove('ativo')
    })
  }

  ativarSolteiro()
  ativarCasal()

}())