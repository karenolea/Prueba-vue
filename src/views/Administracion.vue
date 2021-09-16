<template>
<div class="padre">
  <router-view></router-view>
  <ListaOpiniones v-for="(opinion, indice) in opiniones" :key="indice" :opinion="opinion" :indice="indice" @eliminar="eliminarOpinion" />
   <!-- <button type="button" class="btn btn-info" @click="editarOpinion(opinion.id)">Editar</button> -->

</div>
  
</template>

<script>
import ListaOpiniones from "../components/ListaOpiniones.vue"
export default {
components:{
    ListaOpiniones
},
computed:{
    opiniones(){
      return this.$store.getters.get_opinion
    }
  },
methods:{
  eliminarOpinion(id){
    this.$store.commit("eliminarOpiniones", id)
  }
}
}
</script>

<style scoped>
 .padre{
   position: relative;
 }
</style>