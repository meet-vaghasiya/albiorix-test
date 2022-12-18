<template>
  <div class="w-2/3 m-auto">
    <div class="flex justify-between">
      <input
        class="border-2 border-slate-400 hover:border-black w-1/3 py-2 px-4"
        type="text"
        placeholder="Search by name,email or mobile number..."
        v-model.trim="search"
      />
      <custom-button type="primary" size="lg" @click="addUser">
        Add New User
      </custom-button>
    </div>

    <base-modal v-model="isModalOpen" title="Add user"> </base-modal>
  </div>
</template>

<script>
import BaseModal from "@/common/BaseModal.vue";
import { mapState } from "vuex";
import CustomButton from "@/common/CustomButton.vue";
// import { mapState } from "vuex";

export default {
  components: { BaseModal, CustomButton },
  data() {
    return {
      search: "",
      isModalOpen: false,
    };
  },
  computed: {
    ...mapState("users", ["name"]),
  },
  methods: {
    addUser() {
      this.isModalOpen = true;
    },
  },
};
</script>

<style></style>
