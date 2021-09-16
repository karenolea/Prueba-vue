<template>
  <div>
    <nav class="navbar d-flex navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
          <a class="navbar-brand titulo" href="#"><i class="fas fa-headset pe-2"></i>Games Opinion</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mx-2 p-2">
            <li class="nav-item active">
                <!-- :to="{name: 'inicio'}" -->
              <router-link class="nav-link active" to='/'> <i class="fas fa-home"> </i> Home </router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link active" :to="{name:'Opiniones'}"> <i class="fas fa-comments"></i>  Opiniones </router-link>
            </li>
            <li class="nav-item active admi ">
              <router-link class="nav-link active " :to="{name:'administracion'}"> <i class="fas fa-users-cog "> Administracion</i> </router-link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>

   
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>