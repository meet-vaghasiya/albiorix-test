<template>
  <div class="form-group" :class="{ error: hasErrors }">
    <slot />
    <div class="errors" v-if="hasErrors">
      <div
        class="text-red-600 text-xs"
        v-for="(error, index) in activeErrorMessages"
        :key="index"
        v-html="error"
      ></div>
    </div>
  </div>
</template>

<script>
import { singleErrorExtractorMixin } from "vuelidate-error-extractor";

export default {
  mixins: [singleErrorExtractorMixin],
};
</script>
