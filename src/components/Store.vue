<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="Store_Head">
            <h1>{{ title }}</h1>
            <img :src="image" />
            <br />
            <p>{{ desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="product">
            <div class="sale btnhover" data-caption="SALE">
              <img class="imghover imgres img-responsive" src="../assets/img/product3.jpg" />
              <a href="single_product.html">
                <button id="sidebar">Shop now</button>
              </a>
              <h4 class="ammount">$495.00</h4>
              <p>
                Lorriusm ipsum dollar monstar
                <br />Lorriusm ipsum dollar
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="product">
            <div class="btnhover">
              <img class="imgres imghover img-responsive" src="../assets/img/product2.jpg" />
              <a href="single_product.html">
                <button id="sidebar">Shop now</button>
              </a>
              <h4 class="ammount">$495.00</h4>
              <p>
                Lorriusm ipsum dollar monstar
                <br />Lorriusm ipsum dollar
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="product">
            <div class="sale btnhover" data-caption="SALE">
              <img class="imghover imgres img-responsive" src="../assets/img/product1.jpg" />
              <a href="single_product.html">
                <button id="sidebar">Shop now</button>
              </a>
              <h4 class="ammount">$495.00</h4>
              <p>
                Lorriusm ipsum dollar monstar
                <br />Lorriusm ipsum dollar
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="product1">
            <div class="sale btnhover" data-caption="SALE">
              <img class="imghover imgres img-responsive" src="../assets/img/product4.jpg" />
              <button id="sidebar">Shop now</button>
              <h4 class="ammount">$495.00</h4>
              <p>
                Lorriusm ipsum dollar monstar
                <br />Lorriusm ipsum dollar
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="product"></div>
        </div>

        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="product1">
            <div class="sale btnhover" data-caption="SALE">
              <img class="imghover imgres img-responsive" src="../assets/img/product5.jpg" />
              <a href="single_product.html">
                <button id="sidebar">Shop now</button>
              </a>
              <h4 class="ammount">$495.00</h4>
              <p>
                Lorriusm ipsum dollar monstar
                <br />Lorriusm ipsum dollar
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="product product2">
            <div class="sale btnhover" data-caption="SALE">
              <img class="imghover imgres img-responsive" src="../assets/img/product6.jpg" />
              <a href="single_product.html">
                <button id="sidebar">Shop now</button>
              </a>
              <h4 class="ammount">$495.00</h4>
              <p>
                Lorriusm ipsum dollar monstar
                <br />Lorriusm ipsum dollar
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="product product2">
            <div class="btnhover" data-caption="SALE">
              <img class="imghover imgres img-responsive" src="../assets/img/product4.jpg" />
              <a href="single_product.html">
                <button id="sidebar">Shop now</button>
              </a>
              <h4 class="ammount">$495.00</h4>
              <p>
                Lorriusm ipsum dollar monstar
                <br />Lorriusm ipsum dollar
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="product product2">
            <div class="btnhover" data-caption="SALE">
              <img class="imghover imgres img-responsive" src="../assets/img/product1.jpg" />
              <a href="single_product.html">
                <button id="sidebar">Shop now</button>
              </a>
              <h4 class="ammount">$495.00</h4>
              <p>
                Lorriusm ipsum dollar monstar
                <br />Lorriusm ipsum dollar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Store",
  data() {
    return {
      title: "Popular in store",
      image: require("../assets/img/border.jpg"),
      desc:
        "Claritas processus dynamicus sequitur mutationem consuetudium lectorumseacula quarta decima futurum.",
    };
  },
};
</script>