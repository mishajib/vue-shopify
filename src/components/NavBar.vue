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
                        <router-link to="/">
                          <img src="../assets/img/shopify-homepage.jpg" />
                        </router-link>
                      </div>
                      <!-- Collection of nav links, forms, and other content for toggling -->
                      <div
                        id="navbarCollapse"
                        class="collapse navbar-collapse navcustomcollaps"
                      >
                        <ul class="nav navbar-nav navcustom">
                          <li>
                            <router-link to="/"> Home </router-link>
                          </li>
                          <li>
                            <router-link to="/shop"> Pages </router-link>
                          </li>
                          <li>
                            <router-link to="/shop">Portfolio</router-link>
                          </li>
                          <li>
                            <router-link to="/blog">Blog</router-link>
                          </li>
                          <li>
                            <router-link to="/shop">Shop</router-link>
                          </li>
                          <li>
                            <router-link to="/contact">Contact</router-link>
                          </li>
                        </ul>

                        <ul class="nav navbar-nav navbar-right">
                          <li class="border">
                            <a id="clickthis" href="javascrip:void(0);">
                              <i class="fa fa-search" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li class="border1">
                            <a href="javascript:void(0);">
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
                </div>
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

<style>
.active {
  color: #000;
}
</style>
