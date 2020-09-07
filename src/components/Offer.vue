<template>
  <div>
    <div class="container">
      <div class="row">
        <div v-for="offer in offers" :key="offer.id" class="col-md-4 col-sm-4 col-xs-12">
          <div class="offer_img">
            <div class="offer_word">
              <h1 class="style1">{{ offer.title }}</h1>
              <h1 class="style2">{{ offer.subtitle }}</h1>
            </div>

            <img class="img-responsive imgres" :src="getImage(offer.img)" :alt="offer.title" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Offer",
  data() {
    return {
      offers: [
        {
          id: 1,
          title: "AUTOMN STYLE",
          subtitle: "2016",
          img: "offer1.jpg",
        },
        {
          id: 2,
          title: "SUMMER SALE",
          subtitle: "20%",
          img: "offer2.jpg",
        },
        {
          id: 3,
          title: "WINTER STYLE",
          subtitle: "2016",
          img: "offer3.jpg",
        },
      ],
    };
  },

  methods: {
    getImage(pic) {
      return require("../assets/img/" + pic);
    },
  },
};
</script>
