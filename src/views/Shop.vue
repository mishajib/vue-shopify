<template>
  <div>
    <Topbar />
    <Navbar />
    <Pageheader title="Store" />

    <div class="menumain0">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-3">
            <div class="left_side">
              <div class="search">
                <h2>SEARCH</h2>
                <form class="navbar-form customsearch" role="search">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control customform"
                      placeholder="Search this site"
                    />
                    <span class="input-group-btn">
                      <button type="submit" class="btn btn-default custombtn">
                        <span class="glyphicon glyphicon-search"></span>
                      </button>
                    </span>
                  </div>
                </form>
              </div>
              <div class="categories">
                <h2>CATEGORIES</h2>
                <ul>
                  <li v-for="(category, index) in categories" :key="index">
                    <a href="#">{{ category.title }}</a>
                    <a class="counter" href="#">({{ category.stock }})</a>
                  </li>
                </ul>
              </div>
              <div class="recentpost">
                <h2>RECENT POST</h2>
                <ul>
                  <li v-for="(post, index) in recentPosts" :key="index">
                    <a href="#">
                      <img :src="post.img" />
                    </a>
                    <div class="discrip">
                      <p style="color:#3C3C3C">{{ post.title }}</p>
                      <p style="color:#797A7A">{{ post.price }}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-sm-8">
            <div class="right_side">
              <div class="row">
                <div class="col-md-12">
                  <div class="collec_list">
                    <ul>
                      <li>Item 1 to 12 of 50 Items</li>
                      <li>
                        Show&nbsp;&nbsp;
                        <input type="box" />&nbsp;&nbsp;Per
                        Page
                      </li>
                      <li>Short By</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div v-for="(product, index) in products" :key="index" class="col-md-4 col-sm-4">
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
              <div class="row">
                <div v-for="(product, index) in products" :key="index" class="col-md-4 col-sm-4">
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
              <div class="row">
                <div v-for="(product, index) in products" :key="index" class="col-md-4 col-sm-4">
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
              <div class="row">
                <div v-for="(product, index) in products" :key="index" class="col-md-4 col-sm-4">
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

              <div class="row">
                <div class="col-md-12 right">
                  <div class="npbtn">
                    <div class="btn-group">
                      <button type="button" class="btn btn-default">←Previous</button>
                      <button type="button" class="btn btn-default">1</button>
                      <button type="button" class="btn btn-default">2</button>
                      <button type="button" class="btn btn-default">3</button>
                      <button type="button" class="btn btn-default">4</button>
                      <button type="button" class="btn btn-default">5</button>
                      <button type="button" class="btn btn-default">Next→</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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

export default {
  name: "Shop",
  data() {
    return {
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
      ],
      recentPosts: [
        {
          img: require("../assets/img/post1.jpg"),
          title: "Men's Full Pant",
          price: "$125",
        },

        {
          img: require("../assets/img/post2.jpg"),
          title: "Men's Full Pant",
          price: "$125",
        },

        {
          img: require("../assets/img/post3.jpg"),
          title: "Men's Full Pant",
          price: "$125",
        },
      ],
      categories: [
        {
          title: "Men",
          stock: 65,
        },
        {
          title: "Women",
          stock: 75,
        },
        {
          title: "Kid",
          stock: 95,
        },
        {
          title: "Summer",
          stock: 25,
        },
        {
          title: "Accesories",
          stock: 45,
        },
        {
          title: "Household",
          stock: 35,
        },
        {
          title: "Others",
          stock: 100,
        },
      ],
    };
  },
  components: {
    Navbar,
    Topbar,
    Pageheader,
    Contact,
    Footer,
    Copyright,
  },
};
</script>
