<template>
  <div id="recommend">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="Store_Head">
            <h1>RECOMMENDED</h1>
            <img :src="border" />
            <br />
            <p>
              Claritas processus dynamicus sequitur mutationem consuetudium
              lectorumseacula quarta decima futurum.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div v-for="product in products" :key="product.id" class="col-md-3 col-sm-3 col-xs-12">
          <div class="product">
            <div
              :class="product.sale != '' ? 'sale btnhover' : 'btnhover'"
              :data-caption="product.sale"
            >
              <img class="imghover imgres img-responsive" :src="product.img" />
              <router-link to="/product/details">
                <button id="sidebar">Shop now</button>
              </router-link>
              <h4 class="ammount">{{ product.price }}</h4>
              <p>{{ product.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  data() {
    return {
      border: require("../assets/img/border.jpg"),
      products: [
        {
          id: 1,
          img: require("../assets/img/ladiesp.jpg"),
          price: "$495.00",
          desc: `Lorriusm ipsum dollar monstar
                Lorriusm ipsum dollar`,
          sale: "SALE",
        },
        {
          id: 2,
          img: require("../assets/img/men.jpg"),
          price: "$310.00",
          desc: `Lorriusm ipsum dollar monstar
                Lorriusm ipsum dollar`,
          sale: "",
        },
        {
          id: 3,
          img: require("../assets/img/ladiesp1.jpg"),
          price: "$550.00",
          desc: `Lorriusm ipsum dollar monstar
                Lorriusm ipsum dollar`,
          sale: "SALE",
        },
        {
          id: 4,
          img: require("../assets/img/lasiesp2.jpg"),
          price: "$250.00",
          desc: `Lorriusm ipsum dollar monstar
                Lorriusm ipsum dollar`,
          sale: "",
        },
      ],
    };
  },
};
</script>
