<template>
  <div>
    <!-- Tabla con opiniones -->
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Persona</th>
          <th scope="col">Juego</th>
          <th scope="col">Opinion</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{{indice + 1}}</th>
          <td>{{opinion.nombrePersona}}</td>
          <td>{{opinion.tituloJuego}} </td>
          <td>{{opinion.opinionPersona}}</td>
          <td>
            <button type="button" class="btn btn-danger ml-2 btn-sm ms-1" @click="eliminarOpinion(opinion.id)">Eliminar</button>
                  
            <router-link class="btn btn-info ml-2 btn-sm ms-5" @click="editarOpinion(opinion.id)" 
            :to="{
              name:'EditarOpinion',
              params:{
                id:opinion.id
              }
              }">
              editar
              </router-link>
          </td>
              
          </tr>
          
      </tbody>
     
    </table>
  </div>
</template>

<script>

export default {
  props:["opinion", "indice"],
  methods:{
    eliminarOpinion(id){
      this.$emit("eliminar", id)
    }
  }
}
</script>

<style>

</style>