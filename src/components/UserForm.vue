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
        placeholder="Enter your name"
      />
      <custom-input
        label="Mobile"
        type="text"
        :v="$v.form.mobile"
        v-model="$v.form.mobile.$model"
        placeholder="Enter your name"
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
import { required, email, alpha } from "vuelidate/lib/validators";
import CustomButton from "./common/CustomButton.vue";
import { mapActions } from "vuex";
export default {
  components: {
    CustomInput,
    CustomButton,
  },
  data() {
    return {
      submitting: false,
      form: {
        name: "",
        email: "",
        mobile: "",
        birthDate: "",
      },
    };
  },
  validations: {
    form: {
      name: {
        required,
        alpha,
      },
      email: {
        required,
        email,
      },
      mobile: {
        required,
      },
      birthDate: {
        required,
      },
    },
  },
  methods: {
    ...mapActions("users", ["addUser"]),
    async onSubmit() {
      // const isInvalid = (this.$v.$touch(), this.$v.$invalid);
      // if (isInvalid) {
      //   console.log("not valid");
      //   return;
      // }
      try {
        this.submitting = true;
        await this.addUser(this.form);
      } catch (error) {
        console.log(error.response);
      } finally {
        this.submitting = false;
      }
      console.log("submitted");
    },
  },
};
</script>

<style></style>
