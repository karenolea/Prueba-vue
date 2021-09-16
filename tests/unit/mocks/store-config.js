export default {
    state: {
      games:[],
      opinion:[],
      opiniones:[]
    },
  
    mutations: {
      //recibe el primer parametro que es la comunicacion con el state y el payload corresponde al commit
      Get_Juegos(state, games) {
          //el estado global con atributo games es igual al parametro que recibe de la mutacion
          state.games = games
      },
      //agregar opinion
      Guardar_opinion(state, opinion) {
          const nuevaOpinion = { ...opinion, id: new Date().toISOString() }
          state.opiniones.push(nuevaOpinion)
      },
      eliminarOpiniones(state, id) {
          const indice = state.opiniones.findIndex((opinion) => opinion.id === id)
          state.opiniones.splice(indice, 1)
      },
      opinion(state, payload) {
          state.opinion = state.opiniones.find(item => item.id === payload)
      },
      editarOpinion(state,{id, nombre, opinion}){
          const opinionEditada = state.opiniones.find(opinion => opinion.id === id )
          opinionEditada.nombrePersona = nombre
          opinionEditada.opinionPersona = opinion
      }
  },
  actions: {
      //se extrae el metodo commit(desestructuracion )
      async get_Juegos({ commit }) {
          //obtenemos del metodo get un json
          const { data: { results: games } } = await axios.get("https://api.rawg.io/api/games?key=6d35c72397fc452ca6d824af370b630d")
          //de la respuesta que obtenemos extraemos el atributo data (games)
          //ejecutamos metodo commit, para pasar como payload a una mutacion el arreglo de objetos
          commit("Get_Juegos", games)
          // console.log(games)
      },
      setOpiniones({ commit }, opinion) {
          commit('set', opinion)
      },
      setOpinion({ commit }, id, nombre, opinion) {
          commit('opinion, id')
      }
  },
  //busca id
  getters: {
      gameById: (state) => (id) => {
          const game = state.games.find((p) => p.id == id)
          return game;
      },
      get_games: (state) => {
          return state.games
      },
      get_opinion: (state) => {
          return state.opiniones
      },
      get_buscarOpinion: (state) => (id) =>{
          const opinion = state.opiniones.find((p) => p.id == id)
          return opinion;
      }


  }
  }