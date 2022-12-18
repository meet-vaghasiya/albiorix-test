<template>
  <div>
    <vue-final-modal
      v-model="isOpen"
      classes="modal-container"
      content-class="modal-content"
      v-slot="{ close }"
    >
      <div class="flex justify-between items-center py-3">
        <h2 class="text-2xl">{{ title }}</h2>
        <button class="modal-close text-2xl" @click="close">&times;</button>
      </div>
      <slot></slot>
      <slot name="actions">
        <div class="flex justify-end items-center gap-x-3">
          <custom-button class="bg-slate-100" @click="close"
            >Cancel</custom-button
          >
          <custom-button type="primary">Submit</custom-button>
        </div>
      </slot>
    </vue-final-modal>
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
  components: {
    CustomButton,
  },
  props: {
    value: {
      required: true,
      default: false,
      type: Boolean,
    },
    title: {
      required: true,
      type: String,
    },
  },
  watch: {
    value(newVal) {
      this.isOpen = newVal;
    },
    isOpen(newVal) {
      this.$emit("input", newVal);
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>
.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  position: relative;
  width: 50%;
  max-height: 300px;
  padding: 16px;
  overflow: auto;
  background-color: #fff;
  border-radius: 4px;
}
.modal-close {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin: 8px 8px 0 0;
  cursor: pointer;
}
.modal-close:hover {
  color: gray;
}
</style>
