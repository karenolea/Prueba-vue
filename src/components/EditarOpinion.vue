<template>
  <div class=" opinion">
    <!-- EditarOpinion{{ $router.params }} -->
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Nombre</label>
      <input
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Evan You"
        v-model="nuevaOpinion.nombre"
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label"
        >Opiniones</label
      >
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        :placeholder="`Nueva Opinión sobre el juego {{titulo.juego}}`"
        v-model="nuevaOpinion.opinion"
      ></textarea>
    </div>
    <button type="button" class="btn btn-blue ml-2 btn-sm" @click="regresar">Regresar</button>
    <button
      type="button"
      class="btn btn- ml-2 btn-sm"
      @click="guardarOpinion"
    >
      guardar
    </button>
  </div>

</template>

<script>
export default {
  data() {
    return {
      nuevaOpinion: {
        id:"",
        nombre: "",
        opinion: "",
      },
    };
  },
  methods: {
    regresar(){
      this.$router.push({name:"administracion"})
    },
    guardarOpinion(){
      this.$store.commit("editarOpinion", this.nuevaOpinion)
      this.regresar()
    },

  },
  computed: {
    NuevaOpinionNOMBRE() {
      return this.nuevaOpinion.nombre;
    },
    opinionText() {
      return this.nuevaOpinion.opinion;
    },
     id() {
      return this.$route.params.id;
    },
  },
  created(){
    const {id, nombrePersona, opinionPersona}= this.$store.getters.get_buscarOpinion(this.id) 
    console.log(id);
    this.nuevaOpinion.id = id
    this.nuevaOpinion.nombre = nombrePersona
    this.nuevaOpinion.opinion = opinionPersona
  }
};
</script>
<style scoped>
 .opinion{
   position: absolute;
   z-index: 1000;
   top:0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: white;
 }
</style>

