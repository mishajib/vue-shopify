<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="menu">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="main_menu">
                    <nav
                      role="navigation"
                      class="navbar navbar-default navbarcustom"
                    >
                      <!-- Brand and toggle get grouped for better mobile display -->
                      <div class="navbar-header">
                        <button
                          type="button"
                          data-target="#navbarCollapse"
                          data-toggle="collapse"
                          class="navbar-toggle"
                        >
                          <span class="sr-only">Toggle navigation</span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                        </button>
                        <a href="#">
                          <img src="../assets/img/shopify-homepage.jpg" />
                        </a>
                      </div>
                      <!-- Collection of nav links, forms, and other content for toggling -->
                      <div
                        id="navbarCollapse"
                        class="collapse navbar-collapse navcustomcollaps"
                      >
                        <ul class="nav navbar-nav navcustom">
                          <li>
                            <a href="index.html">Home</a>
                          </li>
                          <li>
                            <a href="Product_Page.html">Pages</a>
                          </li>
                          <li>
                            <a href="#">Portfolio</a>
                          </li>
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="#">Shop</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                        </ul>

                        <ul class="nav navbar-nav navbar-right">
                          <li class="border">
                            <a id="clickthis" href="#">
                              <i class="fa fa-search" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li class="border1">
                            <a href="#">
                              <i class="fa fa-share-alt" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    <form
                      style="display:none"
                      id="openit"
                      class="navbar-form customsearch"
                      role="search"
                    >
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control customform"
                          placeholder="Search this site"
                        />
                        <span class="input-group-btn">
                          <button
                            type="submit"
                            class="btn btn-default custombtn"
                          >
                            <span class="glyphicon glyphicon-search"></span>
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>

                  <!--                                <button >dolon.....</button>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
  name: "HelloWorld",
};
</script>
