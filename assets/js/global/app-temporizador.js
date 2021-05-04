(function () {

  /* ---- Module ---- */

  const STORAGE = () => {
    const methods = {}
  
    /* ---- Constants ---- */
  
    const KEY_DATA_EXPIRACAO = 'data-expiracao'
    const TIMESTAMP_ADICIONAL = 1000 * 60 * 60 * 24 * 3 // 3 dias
  
    /* ---- Methods ---- */
  
    methods.receberDataExpiracao = () => {
      const timestampAgora = new Date().getTime()
      
      const timestampStorage = receberTimestampStorage() || 0
      if (timestampStorage > timestampAgora) {
        return new Date(Number(timestampStorage))
      }
  
      const dataExpiracao = timestampAgora + TIMESTAMP_ADICIONAL
      definirTimestampStorage(dataExpiracao)
      return new Date(dataExpiracao)
    }

    /* ---- Aux Functions ---- */
  
    function receberTimestampStorage () {
      return window.localStorage.getItem(KEY_DATA_EXPIRACAO)
    }
  
    function definirTimestampStorage (timestamp) {
      window.localStorage.setItem(KEY_DATA_EXPIRACAO, timestamp)
    }
  
    return methods
  }
  
  /* ---- Module ---- */

  const HELPERS = () => {
    const methods = {}
  
    /* ---- Methods ---- */
  
    methods.retornarDataAtual = () => {
      return new Date()
    }
  
    methods.calcularTempoRestante = (data1, data2) => {
      const diferenca = data1 - data2
      if (diferenca < 0) return 0
  
      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
      const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60))
      const segundos = Math.floor((diferenca % (1000 * 60)) / 1000)
  
      return { dias, horas, minutos, segundos }
    }
  
    return methods
  }
  
  /* ---- Module ---- */

  const VIEW = () => {
    const methods = {}
  
    /* ---- Methods ---- */
  
    methods.atualizarLayout = (componente, tempoRestante) => {
      componente.querySelector('h3[name="dias"]').innerText = tempoRestante.dias
      componente.querySelector('h3[name="horas"]').innerText = tempoRestante.horas
      componente.querySelector('h3[name="minutos"]').innerText = tempoRestante.minutos
      componente.querySelector('h3[name="segundos"]').innerText = tempoRestante.segundos
    }
  
    return methods
  }

  /* ---- Module ---- */
  
  class AppTemporizador extends window.HTMLElement {
    constructor () {
      super()
      this.__state = { dataExpiracao: null }
      this.definirDataExpiracao()
    }
  
    /* ---- Methods ---- */
    
    definirDataExpiracao () {
      const dataExpiracao = STORAGE().receberDataExpiracao()
      this.__state.dataExpiracao = dataExpiracao
    }
    
    iniciar () {
      const intervalo = setInterval(() => {
        const agora = HELPERS().retornarDataAtual()
        const dataExpiracao = this.__state.dataExpiracao
  
        const tempoRestante = HELPERS().calcularTempoRestante(dataExpiracao, agora)
        const tempoFinalizado = { dias: 0, horas: 0, minutos: 0, segundos: 0 }
  
        if (tempoRestante === 0) {
          VIEW().atualizarLayout(this, tempoFinalizado)
          clearInterval(intervalo)
          return
        }
  
        VIEW().atualizarLayout(this, tempoRestante)
      }, 1000)
    }
  }
  
  const INIT = () => {
    const methods = {}
  
    /* ---- Methods ---- */
  
    methods.iniciar = () => {
      window.customElements.define('app-temporizador', AppTemporizador)
      
      const temporizadores = document.querySelectorAll('app-temporizador')
      if (temporizadores.length === 0) return

      for (const timer of temporizadores) {
        timer.iniciar()
      }
    }
  
    return methods
  }
  
  INIT().iniciar()
}())
