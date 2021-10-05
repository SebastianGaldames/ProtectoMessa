<template>
  
  <div>
    
    <div>


      

      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input id="formulario" v-model="textoBusqueda" size="sm" class="mr-sm-2" placeholder="Buscar"></b-form-input>
              
              <!-- Redirecciona a la Busqueda --> 
              <!--<router-link to="/Busqueda">-->
              
              <!--<b-button id="botonBusqueda" href="#" size="sm" class="my-2 my-sm-0" type="submit">GO</b-button>-->
              <button class="btn btn-info mb-2" id="boton">GO</button>

              
              <!--</router-link>-->
              
            </b-nav-form>

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

       <!-- Para imprimir el valor de lo que busca la persona --> 
       <div class="mt-2">Value: {{ textoBusqueda }}</div>
      

       
    </div>



    <div>
        <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="200"
        img-height="200"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide>
          <template #img>
            <!-- Con esto se puede reenderizar imagen -->
            <b-img src="https://picsum.photos/1024/480/?image=54" width="500" height="400">
            </b-img>
          </template>
        </b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide >

          <template #img>

            <!-- Con esto se puede reenderizar imagen -->
            <b-img src="https://picsum.photos/1024/480/?image=54" width="500" height="400">
            </b-img>
            
          </template>


        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide> 
          <template #img>

            <!-- Con esto se puede reenderizar imagen -->
            <b-img src="https://picsum.photos/1024/480/?image=54" width="500" height="400">
            </b-img>
            
          </template>
  
        ></b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template #img>

            <!-- Con esto se puede reenderizar imagen -->
            <b-img src="https://picsum.photos/1024/480/?image=54" width="500" height="400">
            </b-img>
            
          </template>
        </b-carousel-slide>

      </b-carousel>

      <p class="mt-4">
        Slide #: {{ slide }}<br>
        Sliding: {{ sliding }}
      </p>
    </div>
    
  </div>
</template>


<script>

  export default {

    
    data() {
      return {
        slide: 0,
        sliding: null,
        textoBusqueda: ""
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
      
    }
  }

</script>

