<template>
  <div class="relative">
    <form @submit.prevent="onSubmit">
      <custom-input
        label="Name"
        type="text"
        :v="$v.form.name"
        v-model="$v.form.name.$model"
        placeholder="Enter your name"
      />
      <custom-input
        label="Email"
        type="text"
        :v="$v.form.email"
        v-model="$v.form.email.$model"
        placeholder="Enter your email"
      />
      <custom-input
        label="Mobile"
        type="text"
        :v="$v.form.mobile"
        v-model="$v.form.mobile.$model"
        placeholder="Enter your mobile"
      />
      <custom-input
        label="Date of birth"
        type="date"
        :v="$v.form.birthDate"
        v-model="$v.form.birthDate.$model"
        placeholder="Enter your birth date"
      />

      <div class="flex justify-end items-center gap-x-3 mt-7">
        <custom-button class="bg-slate-100" @click="$emit('close')"
          >Cancel</custom-button
        >
        <custom-button
          :loading="submitting"
          submit
          type="primary"
          text="Submit"
        ></custom-button>
      </div>
    </form>
  </div>
</template>

<script>
import CustomInput from "@/components/common/CustomInput.vue";
import { required, email } from "vuelidate/lib/validators";
import CustomButton from "./common/CustomButton.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    CustomInput,
    CustomButton,
  },
  props: {
    editDetails: {
      required: false,
      default: () => {},
    },
  },

  data() {
    return {
      submitting: false,
      form: this.defaultData(),
    };
  },
  created() {
    if (this.editDetails) {
      this.setEditData(this.editDetails);
    }
  },
  watch: {
    editDetails(newVal) {
      if (newVal) {
        this.setEditData(newVal);
      } else {
        this.setEditData(this.defaultData());
      }
    },
  },

  validations: {
    form: {
      name: {
        required,
      },
      email: {
        required,
        email,
        isUnique(val, curr) {
          const user = this.users.find(
            (user) => user.email === val && user.id !== curr.id
          );
          return !user;
        },
      },
      mobile: {
        required,
      },
      birthDate: {
        required,
      },
    },
  },
  computed: {
    ...mapGetters("users", ["users"]),
  },
  methods: {
    ...mapActions("users", ["addUser", "editUser"]),

    async onSubmit() {
      const invalid = (this.$v.form.$touch(), this.$v.form.$invalid);
      if (invalid) return;

      try {
        this.submitting = true;
        if (!this.editDetails) {
          await this.addUser(this.form);
        } else {
          await this.editUser(this.form);
        }
        this.$emit("submitted");
      } catch (error) {
        console.log(error.response);
      } finally {
        this.submitting = false;
      }
    },
    setEditData(editDetails) {
      this.form.name = editDetails.name;
      this.form.email = editDetails.email;
      this.form.mobile = editDetails.mobile;
      this.form.birthDate = editDetails.birthDate;
      this.form.id = editDetails.id;
    },

    defaultData() {
      return {
        name: "",
        email: "",
        mobile: "",
        birthDate: "",
      };
    },
  },
};
</script>

<style></style>
