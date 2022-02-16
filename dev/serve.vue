<script>
import { defineComponent } from 'vue';
import VueAutocompleteEle from '@/vue-autocomplete-ele.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    VueAutocompleteEle
  }
});
</script>

<template>
  <div id="app">
    <vue-autocomplete-ele />
  </div>
</template>
