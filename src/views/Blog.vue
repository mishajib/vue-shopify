<template>
  <div>
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      name: "MI SHAJIB",
    };
  },
  created() {
    this.name = this.$route.params.name;
  },
};
</script>
