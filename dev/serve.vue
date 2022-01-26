<script>
import Vue from 'vue';
import VueAutocompleteEle from '@/vue-autocomplete-ele.vue';

export default Vue.extend({
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
