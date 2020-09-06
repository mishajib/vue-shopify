<template>
  <div>
    <TopBar />
    <NavBar />
    <Carousel />
    <Offer />
    <Store />
    <Recommend />
    <Contact />
    <Footer />
    <Copyright />
  </div>
</template>

<script>
import TopBar from "../components/TopBar.vue";
import NavBar from "../components/NavBar.vue";
import Carousel from "../components/Carousel.vue";
import Offer from "../components/Offer.vue";
import Store from "../components/Store.vue";
import Recommend from "../components/Recommend.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
import Copyright from "../components/Copyright.vue";

export default {
  name: "Home",
  components: {
    TopBar,
    NavBar,
    Carousel,
    Offer,
    Store,
    Recommend,
    Contact,
    Footer,
    Copyright,
  },
};
</script>
