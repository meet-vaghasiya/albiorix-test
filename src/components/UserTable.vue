<template>
  <div class="grid grid-cols-5 table mt-20 w-3/4 m-auto bg-white">
    <div
      class="font-2xl font-bold"
      v-for="(header, index) in headers"
      :key="index"
    >
      {{ header }}
    </div>

    <template v-for="{ name, email, mobile, birthDate } in users">
      <div :key="name">{{ name }}</div>
      <div :key="email">{{ email }}</div>
      <div :key="mobile">{{ mobile }}</div>
      <div :key="birthDate">{{ birthDate }}</div>
      <div :key="birthDate">
        <custom-button />
        <custom-button />
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      headers: ["Name", "Email", "Mobile", "Date of Birth", "Actions"],
    };
  },
  computed: {
    ...mapGetters("users", ["users"]),
  },
};
</script>

<style scoped>
.table div {
  word-break: break-all;
  padding: 5px 20px;
  border: 1px solid;
}
</style>
