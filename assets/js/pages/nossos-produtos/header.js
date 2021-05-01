(function (){

  // GLOBAL

  const body = document.querySelector('body')

  // MODAL 1
  const header1 = document.querySelector('header[name="prime"]')
  const abrir1 = header1.querySelector('button[name="abrir"]')
  const modal1 = header1.querySelector('div[name="modal"]')
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
  const header2 = document.querySelector('header[name="infinity"]')
  const abrir2 = header2.querySelector('button[name="abrir"]')
  const modal2 = header2.querySelector('div[name="modal"]')
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
  const header3 = document.querySelector('header[name="magnific"]')
  const abrir3 = header3.querySelector('button[name="abrir"]')
  const modal3 = header3.querySelector('div[name="modal"]')
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
  const header4 = document.querySelector('header[name="pet"]')
  const abrir4 = header4.querySelector('button[name="abrir"]')
  const modal4 = header4.querySelector('div[name="modal"]')
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
  const header5 = document.querySelector('header[name="travesseiro"]')
  const abrir5 = header5.querySelector('button[name="abrir"]')
  const modal5 = header5.querySelector('div[name="modal"]')
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