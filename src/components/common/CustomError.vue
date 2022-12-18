<template>
  <div class="form-group mb-3" :class="{ error: hasErrors }">
    <slot />
    <div class="errors" v-if="hasErrors">
      <div class="text-red-600 text-xs" v-html="activeErrorMessages[0]"></div>
    </div>
  </div>
</template>

<script>
import { singleErrorExtractorMixin } from "vuelidate-error-extractor";

export default {
  mixins: [singleErrorExtractorMixin],
};
</script>
