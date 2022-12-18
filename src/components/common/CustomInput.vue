<template>
  <div>
    <label for="label" class="mb-2 block"> {{ label }}</label>
    <form-group :validator="v" v-bind="{ label }">
      <input
        class="border border-gray-400 px-3 py-1 w-full"
        type="text"
        id="label"
        v-model="inputVal"
        placeholder="Enter your name"
      />
    </form-group>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      required: false,
      type: String,
    },
    v: {
      type: Object,
      required: true,
    },
    placeholder: {
      required: false,
      type: String,
    },
    value: {
      required: true,
    },
  },
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.$emit("input", newVal);
      },
    },
  },
};
</script>

<style></style>
