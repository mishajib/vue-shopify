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
              <router-link to="/product/details">
                <button id="sidebar">Shop now</button>
              </router-link>
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
              <router-link to="/product/details">
                <button id="sidebar">Shop now</button>
              </router-link>
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
              <router-link to="/product/details">
                <button id="sidebar">Shop now</button>
              </router-link>
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
              <router-link to="/product/details">
                <button id="sidebar">Shop now</button>
              </router-link>
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
              <router-link to="/product/details">
                <button id="sidebar">Shop now</button>
              </router-link>
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
        <div v-for="(product, index) in products" :key="index" class="col-md-4 col-sm-4 col-xs-12">
          <div class="product product2">
            <div
              :class="product.sale != '' ? 'sale btnhover' : 'btnhover'"
              :data-caption="product.sale"
            >
              <img class="imghover imgres img-responsive" :src="product.img" />
              <router-link to="/product/details">
                <button id="sidebar">Shop now</button>
              </router-link>
              <h4 class="ammount">{{ product.price }}</h4>
              <p v-html="product.desc">{{ product.desc }}</p>
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
      products: [
        {
          img: require("../assets/img/product6.jpg"),
          price: "$295",
          desc: "Lorriusm ipsum dollar monstar <br> Lorriusm ipsum dollar",
          sale: "SALE",
        },
        {
          img: require("../assets/img/product4.jpg"),
          price: "$295",
          desc: "Lorriusm ipsum dollar monstar <br> Lorriusm ipsum dollar",
          sale: "",
        },
        {
          img: require("../assets/img/product1.jpg"),
          price: "$295",
          desc: "Lorriusm ipsum dollar monstar <br> Lorriusm ipsum dollar",
          sale: "",
        },
      ],
    };
  },
};
</script>