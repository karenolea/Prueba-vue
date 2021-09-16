<template>
  <div>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item" v-for="(opinion, indice) in opiniones" :key="indice">
        <h2 class="accordion-header" :id="`heading-${indice}`">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#collapse-${indice}`"
            aria-expanded="true"
            :aria-controls="`collapse-${indice}`"
          >
            Opinion creada por: {{ opinion.nombrePersona }}. Para el Juego:
            {{ opinion.tituloJuego }}
          </button>
        </h2>
        <div
          :id="`collapse-${indice}`"
          class="accordion-collapse collapse show text-start mx-4"
          :aria-labelledby="`heading-${indice}`"
          data-bs-parent="#accordionExample"
        >
          Opinion: {{ opinion.opinionPersona }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListaOpinion from "../components/ListaOpiniones.vue";
export default {
  components: {
    ListaOpinion,
  },
  computed:{
    opiniones(){
      return this.$store.getters.get_opinion
    }
  }
};
</script>

<style>
</style>