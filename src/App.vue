<template>
  <div id="app " class="bg-gray-50 py-20 min-h-screen">
    <user-list />
  </div>
</template>

<script>
import UserList from "./components/UserList.vue";
export default {
  components: { UserList },
  name: "App",
};
</script>

<style>
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  line-height: 1.5;
}
</style>
