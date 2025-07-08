<script setup lang="ts">
const authStore = useAuthStore();
</script>

<template>
  <div>
    <div class="hero bg-base-300 container mx-auto mt-4">
      <div class="hero-content text-center min-h-96">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">
            Travel Log
          </h1>
          <p class="py-6">
            Welcome to the Travel Log app! This is a simple application to log your travels and share them with others.
            You can create an account, log in, and start adding your travel experiences.
          </p>
          <AuthButton v-if="!authStore.user" />
          <NuxtLink
            v-else
            to="/dashboard"
            class="btn btn-primary"
          >
            Start Logging
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
