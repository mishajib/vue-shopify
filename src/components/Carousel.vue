<template>
  <div>
    <div class="container-fluid">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="slider">
              <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators idicate">
                  <li v-for="(slider, index) in sliders" :key="index" data-target="#myCarousel" :data-slide-to="index" :class="(index == 0) ? 'active': ''"></li>
                </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner vvvvv" role="listbox">
                  <div v-for="(slider, index) in sliders" :key="index" :class="(index == 0) ? 'item active':'item'">
                    <div class="shopit">
                      <h1>
                        {{ slider.title }}
                        <br /> {{ slider.subtitle }}
                      </h1>
                      <button class="shop_btn">SHOP IT NOW</button>
                    </div>
                    <img
                      class="slideromag"
                      :src="slider.img"
                      alt="Chania"
                      width="100%"
                      height="290px"
                    />
                  </div>
                </div>

                <!-- Left and right controls -->
                <a
                  class="left carousel-control control"
                  href="#myCarousel"
                  role="button"
                  data-slide="prev"
                >
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="right carousel-control control"
                  href="#myCarousel"
                  role="button"
                  data-slide="next"
                >
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      sliders: [
        {
          title: "Brand New Summer-sale",
          subtitle: "Special dress Now online",
          img: require("../assets/img/slider.jpg"),
        },

        {
          title: "Brand New Summer-sale",
          subtitle: "Special dress Now online",
          img: require("../assets/img/slider2.jpg"),
        },
      ],
    };
  },
};
</script>
