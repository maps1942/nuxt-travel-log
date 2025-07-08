<script setup lang="ts">
const authStore = useAuthStore();
</script>

<template>
  <div v-if="!authStore.loading && authStore.user" class="dropdown dropdown-end">
    <div
      tabindex="0"
      role="button"
      class="btn m-1"
    >
      <div v-if="authStore.user.image" class="avatar">
        <div class="w-8 rounded-full">
          <img :src="authStore.user.image" alt="User Avatar">
        </div>
      </div>
      {{ authStore.user.name }}
    </div>
    <ul tabindex="0" class="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
      <li>
        <NuxtLink to="/sign-out">
          <Icon name="tabler:logout-2" size="24" />
          Log out
        </NuxtLink>
      </li>
    </ul>
  </div>
  <div v-else class="dropdown dropdown-end">
    <div
      tabindex="0"
      role="button"
      class="btn m-1"
    >
      Sign in with...
    </div>
    <ul tabindex="0" class="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
      <li>
        <button
          :disabled="authStore.loading"
          class="btn btn-accent"
          @click="authStore.signIn('github')"
        >
          Github
          <span v-if="authStore.loading" class="loading loading-spinner loading-sm" />
          <Icon
            v-else
            name="tabler:brand-github"
            size="24"
          />
        </button>
      </li>
      <li>
        <button
          :disabled="authStore.loading"
          class="btn btn-accent"
          @click="authStore.signIn('google')"
        >
          Google
          <span v-if="authStore.loading" class="loading loading-spinner loading-sm" />
          <Icon
            v-else
            name="tabler:brand-google-filled"
            size="24"
          />
        </button>
      </li>
    </ul>
  </div>
</template>
