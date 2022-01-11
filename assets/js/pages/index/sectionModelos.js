(function (){

  // GLOBAL

  const body = document.querySelector('body')

  // MODAL 1
  const div1 = document.querySelector('div[name="prime"]')
  const abrir1 = div1.querySelector('button[name="abrir"]')
  const modal1 = div1.querySelector('div[name="modal"]')
  const fechar1 = modal1.querySelector('button[name="fechar"]')

  function abrirModal1 () {
    abrir1.addEventListener('click', () => {
      modal1.classList.add('mostrar')
      body.classList.add('bloqueado')
    })
  }

  function fecharModal1 () {
    fechar1.addEventListener('click', () => {
      modal1.classList.remove('mostrar')
      body.classList.remove('bloqueado')
    })
  }

  abrirModal1()
  fecharModal1()

  // MODAL 2
  const div2 = document.querySelector('div[name="infinity"]')
  const abrir2 = div2.querySelector('button[name="abrir"]')
  const modal2 = div2.querySelector('div[name="modal"]')
  const fechar2 = modal2.querySelector('button[name="fechar"]')

  function abrirModal2 () {
    abrir2.addEventListener('click', () => {
      modal2.classList.add('mostrar')
      body.classList.add('bloqueado')
    })
  }

  function fecharModal2 () {
    fechar2.addEventListener('click', () => {
      modal2.classList.remove('mostrar')
      body.classList.remove('bloqueado')
    })
  }

  abrirModal2()
  fecharModal2()

  // MODAL 3
  const div3 = document.querySelector('div[name="magnific"]')
  const abrir3 = div3.querySelector('button[name="abrir"]')
  const modal3 = div3.querySelector('div[name="modal"]')
  const fechar3 = modal3.querySelector('button[name="fechar"]')

  function abrirModal3 () {
    abrir3.addEventListener('click', () => {
      modal3.classList.add('mostrar')
      body.classList.add('bloqueado')
    })
  }

  function fecharModal3 () {
    fechar3.addEventListener('click', () => {
      modal3.classList.remove('mostrar')
      body.classList.remove('bloqueado')
    })
  }

  abrirModal3()
  fecharModal3()

  // MODAL 4
  const div4 = document.querySelector('div[name="pet"]')
  const abrir4 = div4.querySelector('button[name="abrir"]')
  const modal4 = div4.querySelector('div[name="modal"]')
  const fechar4 = modal4.querySelector('button[name="fechar"]')

  function abrirModal4 () {
    abrir4.addEventListener('click', () => {
      modal4.classList.add('mostrar')
      body.classList.add('bloqueado')
    })
  }

  function fecharModal4 () {
    fechar4.addEventListener('click', () => {
      modal4.classList.remove('mostrar')
      body.classList.remove('bloqueado')
    })
  }

  abrirModal4()
  fecharModal4()

  // MODAL 5
  const div5 = document.querySelector('div[name="travesseiro"]')
  const abrir5 = div5.querySelector('button[name="abrir"]')
  const modal5 = div5.querySelector('div[name="modal"]')
  const fechar5 = modal5.querySelector('button[name="fechar"]')

  function abrirModal5 () {
    abrir5.addEventListener('click', () => {
      modal5.classList.add('mostrar')
      body.classList.add('bloqueado')
    })
  }

  function fecharModal5 () {
    fechar5.addEventListener('click', () => {
      modal5.classList.remove('mostrar')
      body.classList.remove('bloqueado')
    })
  }

  abrirModal5()
  fecharModal5()

}())