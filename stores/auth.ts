import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient();

export const useAuthStore = defineStore("useAuthStore", () => {
  const loading = ref(false);

  async function signIn(descProvider: string) {
    loading.value = true;
    await authClient.signIn.social({
      provider: descProvider,
      callbackURL: "/dashboard",
      errorCallbackURL: "/error",
    });
    loading.value = false;
  }

  return {
    loading,
    signIn,
  };
});
