<script setup lang="ts">
const authStore = useAuthStore();
</script>

<template>
  <button
    :disabled="authStore.loading"
    class="btn btn-accent"
    @click="authStore.signIn('github')"
  >
    Sign in with Github
    <span v-if="authStore.loading" class="loading loading-spinner loading-sm" />
    <Icon
      v-else
      name="tabler:brand-github"
      size="24"
    />
  </button>
  <button
    :disabled="authStore.loading"
    class="btn btn-accent"
    @click="authStore.signIn('google')"
  >
    Sign in with Google
    <span v-if="authStore.loading" class="loading loading-spinner loading-sm" />
    <Icon
      v-else
      name="tabler:brand-google-filled"
      size="24"
    />
  </button>
</template>
