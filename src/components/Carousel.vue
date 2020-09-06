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
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <!--
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                                <li data-target="#myCarousel" data-slide-to="3"></li>
                                <li data-target="#myCarousel" data-slide-to="4"></li>
                                <li data-target="#myCarousel" data-slide-to="5"></li>
                                <li data-target="#myCarousel" data-slide-to="6"></li>
                  -->
                </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner vvvvv" role="listbox">
                  <div class="item active">
                    <div class="shopit">
                      <h1>
                        Brand New Summer-sale
                        <br />Special dress Now online
                      </h1>
                      <button class="shop_btn">SHOP IT NOW</button>
                    </div>
                    <img
                      class="slideromag"
                      src="../assets/img/slider.jpg"
                      alt="Chania"
                      width="100%"
                      height="290px"
                    />
                  </div>

                  <div class="item">
                    <div class="shopit">
                      <h1>
                        Brand New Summer-sale
                        <br />Special dress Now online
                      </h1>
                      <button class="shop_btn">SHOP IT NOW</button>
                    </div>
                    <img
                      class="slideromag"
                      src="../assets/img/slider.jpg"
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
};
</script>
