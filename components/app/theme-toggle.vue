<script lang="ts" setup>
const colorMode = useColorMode();
const isDark = computed({
  get: () => colorMode.value === "dracula",
  set: (value) => {
    colorMode.value = value ? "dracula" : "silk";
  },
});
</script>

<template>
  <label class="swap swap-rotate mx-4">
    <!-- this hidden checkbox controls the state -->
    <input v-model="isDark" type="checkbox">

    <!-- sun icon -->
    <Icon
      class="swap-on"
      name="tabler:sun"
      size="24"
    />

    <!-- moon icon -->
    <Icon
      class="swap-off"
      name="tabler:moon-filled"
      size="24"
    />
  </label>
</template>
