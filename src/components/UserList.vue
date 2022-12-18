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
    <user-table @editData="editData" />
    <base-modal
      v-model="isModalOpen"
      title="Add user"
      v-slot="{ close }"
      @closed="modalClosed"
    >
      <user-form
        @submitted="close"
        ref="userForm"
        @close="close"
        v-bind="{ editDetails }"
      />
    </base-modal>
  </div>
</template>

<script>
import BaseModal from "@/components/common/BaseModal.vue";
import { mapState } from "vuex";
import CustomButton from "@/components/common/CustomButton.vue";
import UserForm from "./UserForm.vue";
import UserTable from "./UserTable.vue";
// import { mapState } from "vuex";

export default {
  components: { BaseModal, CustomButton, UserForm, UserTable },
  data() {
    return {
      search: "",
      isModalOpen: false,
      editDetails: false,
    };
  },
  computed: {
    ...mapState("users", ["name"]),
  },
  methods: {
    addUser() {
      this.isModalOpen = true;
    },
    editData(data) {
      this.editDetails = { ...data };
      this.isModalOpen = true;
    },
    modalClosed() {
      this.resetFormValidation();
      this.editDetails = null;
    },
    resetFormValidation() {
      this.$refs.userForm.$v.form.$reset();
    },
  },
};
</script>

<style></style>
