<template>
  <button
    :class="btnClass"
    class="font-semibold"
    @click="$emit('click', $event)"
  >
    <slot>
      {{ text }}
    </slot>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      default: "grey",
      validator(val) {
        return ["primary", "grey"].includes(val);
      },
    },
    size: {
      type: String,
      default: "md",
      validator(val) {
        return ["sm", "md", "lg"].includes(val);
      },
    },
  },
  computed: {
    btnClass() {
      return {
        "bg-blue-600 text-white": this.type === "primary",
        "bg-slate-100 text-black": this.type === "grey",
        "py-1 px-3": this.size === "sm",
        "py-2 px-5": this.size === "md",
        "py-4 px-8": this.size === "lg",
      };
    },
  },
};
</script>

<style></style>
