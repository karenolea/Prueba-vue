<template>
  <div>
    <h1 v-text="titulo" class="p-5 tituloHome"></h1>
    <div class="row py-5">
      <div
        class="col-lg-4 d-flex justify-content-center"
        v-for="(game, index) in games"
        :key="index"
        :game="game"
      >
        <Cards :game="game" @recibirId="mostrarModal" />
      </div>
    </div>
     <div
      class="modal fade show" 
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true" 
      
    >
      <div class="modal-dialog" >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Editando la opinion de:
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3 text-start">
              <label for="exampleFormControlInput1" class="form-label"
                >Nombre:{{tituloJuego}}</label
              >
              <input
                type="string"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Evan You"
                 v-model="nombrePersona"
              />
            </div>
            <div class="mb-3 text-start">
              <label>Opiniones:</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Tu opinion debe ir aquí"
                v-model="opinionPersona"
              ></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button
              type="button"
              class="btn btn-info"
              data-bs-dismiss="modal"
              @click="GuardarOpinion"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
     </div>
  </div>
</template>

<script>
import Cards from "../components/Cards.vue";

//para consumir el state de games
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      tituloJuego: "",
      nombrePersona: "",
      opinionPersona: "",
    };
  },

  components: {
    Cards,
  },
  computed: {
    // ...mapGetters({"gameById"}),
    // game() {
    //   const { id } = this;
    //   return this.gameById(id), (this.tituloJuego = game.name);
    // },
    games() {
      return this.$store.getters.get_games
    },

    titulo() {
      return "Lista de Juegos Disponibles";
    },
  },
  methods: {
    ...mapActions(["setOpiniones"]),

    GuardarOpinion() {
      const opinion = {
        tituloJuego: this.tituloJuego,
        nombrePersona: this.nombrePersona,
        opinionPersona: this.opinionPersona,
      };
      this.$store.commit("Guardar_opinion", opinion);
      this.tituloJuego = "";
      this.nombrePersona = "";
      this.opinionPersona = "";
    },
    mostrarModal(id){
      const {name} = this.games.find((game)=> game.id === id)
      this.tituloJuego = name
     
    }
  },
};
</script>

<style></style>
