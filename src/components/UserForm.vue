<template>
  <div>
    <custom-input
      label="Name"
      type="text"
      :v="$v.form.name"
      v-model="$v.form.name.$model"
      placeholder="Enter your name"
    />
  </div>
</template>

<script>
import CustomInput from "@/components/common/CustomInput.vue";
import { required, maxLength } from "vuelidate/lib/validators";
export default {
  components: {
    CustomInput,
  },
  data() {
    return {
      form: {
        name: "",
      },
    };
  },
  validations: {
    form: {
      name: {
        required,
        maxLength: maxLength(5),
      },
    },
  },
};
</script>

<style></style>
