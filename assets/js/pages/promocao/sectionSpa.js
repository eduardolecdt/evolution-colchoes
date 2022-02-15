(function (){

  // CONST
  const sectionSpa = document.querySelector('section[name="spa"]')
  const buttonSolteiro = sectionSpa.querySelector('button[name="solteiro"]')
  const buttonCasal = sectionSpa.querySelector('button[name="casal"]')
  const buttonQueen = sectionSpa.querySelector('button[name="queen"]')
  const buttonKing = sectionSpa.querySelector('button[name="king"]')
  const buttonBasebox = sectionSpa.querySelector('button[name="basebox"]')

  function ativarSolteiro () {
    buttonSolteiro.addEventListener('click', () => {
      buttonSolteiro.classList.add('ativo')
      buttonCasal.classList.remove('ativo')
      buttonQueen.classList.remove('ativo')
      buttonKing.classList.remove('ativo')
      buttonBasebox.classList.remove('ativo')
    })
  }

  function ativarCasal () {
    buttonCasal.addEventListener('click', () => {
      buttonCasal.classList.add('ativo')
      buttonSolteiro.classList.remove('ativo')
      buttonQueen.classList.remove('ativo')
      buttonKing.classList.remove('ativo')
      buttonBasebox.classList.remove('ativo')
    })
  }

  function ativarQueen () {
    buttonQueen.addEventListener('click', () => {
      buttonQueen.classList.add('ativo')
      buttonSolteiro.classList.remove('ativo')
      buttonCasal.classList.remove('ativo')
      buttonKing.classList.remove('ativo')
      buttonBasebox.classList.remove('ativo')
    })
  }

  function ativarKing () {
    buttonKing.addEventListener('click', () => {
      buttonKing.classList.add('ativo')
      buttonSolteiro.classList.remove('ativo')
      buttonCasal.classList.remove('ativo')
      buttonQueen.classList.remove('ativo')
      buttonBasebox.classList.remove('ativo')
    })
  }

  function ativarBasebox () {
    buttonBasebox.addEventListener('click', () => {
      buttonBasebox.classList.add('ativo')
      buttonSolteiro.classList.remove('ativo')
      buttonCasal.classList.remove('ativo')
      buttonQueen.classList.remove('ativo')
      buttonKing.classList.remove('ativo')
    })
  }

  ativarSolteiro()
  ativarCasal()
  ativarQueen()
  ativarKing()
  ativarBasebox()

}())