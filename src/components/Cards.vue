<template>
  
    <div class="card m-2" style="width: 18rem">
      <img class="card-img-top" style="height:10rem" :src="game.short_screenshots[0].image" />
      <div class="card-body">
        <h4 class="card-title text-capitalize">{{ game.name }}</h4>
        <hr />
        <ul class="list-group list-group-flush ">
          <li class="text-start text-capitalize w-75 list-group-item">
            Rating: {{ game.rating }}
          </li>
          <li class="text-start text-capitalize w-75 list-group-item">
            Released: {{ game.released }}
          </li>
          <li class="text-start text-capitalize w-75 list-group-item">
            Updated: {{ game.updated }}
          </li>
        </ul>
      </div>
      <hr />
      <div class="d-flex justify-content-around">
        <button
          type="button"
          class="btn btn-primary mb-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          @click="mostrarModal(game.id)"
        >
          Opinar
        </button>
      </div>
    </div>
  
</template>

<script>
export default {
  name: "Cards",
  props:
  ["game"],
  methods:{
    mostrarModal(id){
      this.$emit("recibirId", id)
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
}
</style>