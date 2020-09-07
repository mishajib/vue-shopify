<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="backimg">
            <img class="img-responsive" src="../assets/img/slide.jpg" />
            <div class="heading">
              <h1>{{ title }}</h1>
              <img src="../assets/img/border.jpg" />
              <h5>Home>{{ title }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    title: String,
  },
};
</script>
