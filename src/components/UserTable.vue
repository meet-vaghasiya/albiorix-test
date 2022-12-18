<template>
  <div>
    <div class="grid grid-cols-6 table mt-20 m-auto bg-white">
      <div
        class="font-2xl font-bold"
        v-for="(header, index) in headers"
        :key="index"
        :class="{ 'col-span-2': index === headers.length - 1 }"
      >
        {{ header }}
      </div>
      <template v-for="{ id, name, email, mobile, birthDate } in users">
        <div :key="'name' + id" class="col-start-1">{{ name }}</div>
        <div :key="'email' + id">{{ email }}</div>
        <div :key="'mobile' + id">{{ mobile }}</div>
        <div :key="'birthDate' + id">{{ birthDate | dateFormat }}</div>
        <div
          :key="'action' + id"
          class="flex gap-x-2 items-center col-span-2"
          @click="currentUser = { id, name, email, mobile, birthDate }"
        >
          <custom-button
            @click="
              editData = { id, name, email, mobile, birthDate };
              $emit('editData', editData);
            "
            type="primary"
            size="sm"
            text="Edit"
          />
          <custom-button
            @click="isModalOpen = true"
            type="danger"
            size="sm"
            text="Delete"
          />
        </div>
      </template>
      <div class="col-span-full text-center py-4" v-if="!users.length">
        No users found.
      </div>
    </div>
    <base-modal
      v-model="isModalOpen"
      title="Delete user"
      v-slot="{ close }"
      @closed="currentUser = null"
    >
      <h3 class="text-center text-2xl mb-4">
        Are you sure you want to delete this {{ currentUser?.name }} ?
      </h3>
      <div class="my-5 mt-7 flex justify-end gap-x-3">
        <custom-button @click="close" type="primary" size="sm" text="Cancel" />
        <custom-button
          :loading="loading"
          type="danger"
          @click="remove"
          size="sm"
          text="Yes, Delete"
        />
      </div>
    </base-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import BaseModal from "./common/BaseModal.vue";
import CustomButton from "./common/CustomButton.vue";
export default {
  components: { CustomButton, BaseModal },
  props: {
    users: {
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      headers: ["Name", "Email", "Mobile", "Date of Birth", "Actions"],
      editData: null,
      isModalOpen: false,
      currentUser: null,
      loading: false,
    };
  },
  filters: {
    dateFormat(val) {
      return val.split("-").reverse().join("/");
    },
  },

  methods: {
    ...mapActions("users", ["deleteUser"]),
    async remove() {
      try {
        this.loading = true;
        await this.deleteUser(this.currentUser);
        this.loading = false;
        this.isModalOpen = false;
        this.currentUser = null;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.table div {
  word-break: break-all;
  padding: 5px 20px;
  border: 1px solid;
  align-items: center;
}
</style>
