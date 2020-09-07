<template>
  <div>
    <Topbar />
    <Navbar />
    <Pageheader title="Product" />
    <div class="container">
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
          <div class="product_img">
            <div id="big-image">
              <img
                class="img-responsive imgres"
                style="height:550px;width:475px"
                src="../assets/img/shirt.jpg"
              />
              <img class="img-responsive" style="height:550px;width:475px" src="../assets/img/ss2.jpg" />
              <img class="img-responsive" style="height:550px;width:475px" src="../assets/img/shirt.jpg" />
            </div>

            <div class="row small-images">
              <img class="col-md-4 col-xs-4 img-responsive" style src="../assets/img/shirt.jpg" />
              <img class="col-md-4 col-xs-4 img-responsive" style src="../assets/img/ss2.jpg" />
              <img class="col-md-4 col-xs-4 img-responsive" style src="../assets/img/shirt.jpg" />
            </div>
          </div>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-12">
          <div class="details">
            <h1>FULL COTTON MEN SHIRT</h1>
            <a href="#">
              <img src="../assets/img/availavle.jpg" />&nbsp; Available
            </a>
            <p>I have researched and viewed many templates from Hubspot. They are nice, simple and clean. I tried to Design a Homepage UI for a Business or service provider website. I forgot to ask for your logo or color choices, but i tried to implement some light and clean color combination. But we can play with the color anytime.</p>
            <h2>Features</h2>
            <div class="ulmenu">
              <ul>
                <li>
                  <a href="#">
                    <img src="../assets/img/fea.jpg" />&nbsp; 100% Cotton
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../assets/img/fea.jpg" />&nbsp; Designed by Lo'rotte
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../assets/img/fea.jpg" />&nbsp; 4 Color and Size Available
                  </a>
                </li>
              </ul>
            </div>
            <div class="size">
              <span>Size</span>
              <select name="size">
                <option class="opt_size" value="XL">XL</option>
                <option class="opt_size" value="MD">MD</option>
                <option class="opt_size" value="XS">SM</option>
                <option class="opt_size" value="XS">XS</option>
              </select>
            </div>
            <div class="quen">
              <h4>Quentity</h4>
              <div class="input-group custominput">
                <span class="input-group-btn">
                  <button
                    type="button"
                    class="btn btn-default btn-number custombtnn"
                    disabled="disabled"
                    data-type="minus"
                    data-field="quant[1]"
                  >
                    <span class="glyphicon glyphicon-minus"></span>
                  </button>
                </span>
                <input
                  type="text"
                  name="quant[1]"
                  class="form-control input-number customnum"
                  value="1"
                  min="1"
                  max="10"
                />
                <span class="input-group-btn">
                  <button
                    type="button"
                    class="btn btn-default btn-number custombtnn"
                    data-type="plus"
                    data-field="quant[1]"
                  >
                    <span class="glyphicon glyphicon-plus"></span>
                  </button>
                </span>
              </div>
              <button class="btadd">ADD TO CART</button>
            </div>
            <div class="social">
              <ul>
                <li>
                  <a href="#">Share</a>
                </li>
                <li class="socialico">
                  <a href="#">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="socialico">
                  <a href="#">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="socialico">
                  <a href="#">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="socialico">
                  <a href="#">
                    <i class="fa fa-youtube" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--....................-->
    <div class="container">
      <nav class="navbar navbar-default customnav0">
        <div class="navbar-header">
          <button
            class="navbar-toggle"
            type="button"
            data-toggle="collapse"
            data-target=".js-navbar-collapse"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>

        <div class="collapse navbar-collapse js-navbar-collapse">
          <ul class="nav navbar-nav cutomnav1">
            <li class="dropdown mega-dropdown dropdown open">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                PROFIT
                <span class="glyphicon glyphicon-chevron-down pull-right"></span>
              </a>

              <ul class="dropdown-menu mega-dropdown-menu row customrow active">
                <li class="col-sm-2">
                  <img class="img-responsive" src="../assets/img/menushort.jpg" />
                </li>

                <li class="col-sm-10">
                  <p class="droptext">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                    <br />text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                    <br />
                    <br />remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </li>
              </ul>
            </li>
            <li class="dropdown mega-dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                STRATEGIES
                <span class="glyphicon glyphicon-chevron-down pull-right"></span>
              </a>
              <ul class="dropdown-menu mega-dropdown-menu row customrow">
                <li class="col-sm-2">
                  <img class="img-responsive" src="../assets/img/menushort.jpg" />
                </li>

                <li class="col-sm-10">
                  <p class="droptext">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                    <br />text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                    <br />
                    <br />remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </li>
              </ul>
            </li>
            <li class="dropdown mega-dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                PROCESS
                <span class="glyphicon glyphicon-chevron-down pull-right"></span>
              </a>
              <ul class="dropdown-menu mega-dropdown-menu row customrow">
                <li class="col-sm-2">
                  <img class="img-responsive" src="../assets/img/menushort.jpg" />
                </li>

                <li class="col-sm-10">
                  <p class="droptext">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                    <br />text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                    <br />
                    <br />remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- /.nav-collapse -->
      </nav>
    </div>
    <Recommend />
    <Contact />
    <Footer />
    <Copyright />
  </div>
</template>

<script>
import Navbar from "../components/NavBar.vue";
import Topbar from "../components/TopBar.vue";
import Pageheader from "../components/PageHeader.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
import Copyright from "../components/Copyright.vue";
import Recommend from "../components/Recommend.vue";

export default {
  name: "Product",
  data() {
    return {};
  },
  components: {
    Navbar,
    Topbar,
    Pageheader,
    Contact,
    Footer,
    Copyright,
    Recommend,
  },
};
</script>