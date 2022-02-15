(function (){

  // CONST
  const header = document.querySelector('header')
  const buttonSolteiro = header.querySelector('button[name="solteiro"]')
  const buttonCasal = header.querySelector('button[name="casal"]')

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