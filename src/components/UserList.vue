<template>
  <h1>Hello {{ name }}</h1>
</template>

<script>
import { mapState } from "vuex";
// import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("users", ["name"]),
  },
};
</script>

<style></style>
