<template>
  <div class="w-3/5 m-auto">
    <div class="flex justify-between">
      <custom-input
        class="w-2/5"
        type="text"
        placeholder="Search by name,email or mobile number..."
        v-model.trim="search"
      />
      <custom-button type="primary" size="lg" @click="addUser">
        Add New User
      </custom-button>
    </div>
    <user-table @editData="editData" :users="filUsers" />
    <base-modal
      v-model="isModalOpen"
      :title="!editDetails ? 'Add user' : 'Edit user'"
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
import { mapGetters } from "vuex";
import CustomButton from "@/components/common/CustomButton.vue";
import UserForm from "./UserForm.vue";
import UserTable from "./UserTable.vue";
import CustomInput from "./common/CustomInput.vue";
// import { mapState } from "vuex";

export default {
  components: { BaseModal, CustomButton, UserForm, UserTable, CustomInput },
  data() {
    return {
      search: "",
      isModalOpen: false,
      editDetails: false,
      debounce: null,
      filUsers: this.users,
    };
  },
  computed: {
    ...mapGetters("users", ["users"]),
  },
  watch: {
    users() {
      this.filterUsers();
    },
    search: {
      immediate: true,
      handler() {
        clearTimeout(this.debounce);
        this.debounce = setTimeout(() => {
          this.filterUsers();
        }, 600);
      },
    },
  },

  methods: {
    filterUsers() {
      if (this.search.length < 3) {
        this.filUsers = this.users;
      } else {
        this.filUsers = this.users.filter((user) =>
          user.name.includes(this.search)
        );
      }
    },
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
