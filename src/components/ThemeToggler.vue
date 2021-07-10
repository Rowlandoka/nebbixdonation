<template>
  <button
    @click="toggleTheme"
    class="border-4 mx-auto p-8 dark:text-red-400 text-cyan-200"
  >
    Theme Toggle
  </button>
</template>

<script>
export default {
  methods: {
    toggleTheme() {
      this.$store.dispatch("toggleTheme");
    },
  },
};
</script>
