<template>
  <IonPage>
    <IonContent>
      <div class="min-h-full flex flex-col justify-center sm:px-6 lg:px-8">
        <h2 class="my-6 text-center text-3xl font-extrabold">
          Sign into your account
        </h2>
        <div class="px-6">
          <input
            v-model="credentials.email"
            autocapitalize="none"
            autocomplete="none"
            type="email"
            class="w-full mb-4 text-normal py-2 px-1 border-cyan-700 border-solid border-2"
          />
          <input
            v-model="credentials.password"
            type="password"
            class="w-full mb-4 text-normal py-2 px-1 border-cyan-700 border-solid border-2"
          />
          <button
            @click="doSignIn"
            class="bg-cyan-700 hover:bg-cyan-500 text-white px-4 py-4 rounded mt-3 w-full"
          >
            Sign In
          </button>
        </div>
      </div>
    </IonContent>
  </IonPage>
</template>
<script lang="ts" setup>
import { signInWithEmailAndPassword, type Auth } from "firebase/auth";
import { useFbAuth } from "~/composables/useFbAuth";

const auth = useFbAuth();
const router = useRouter();
const credentials = ref({
  email: "",
  password: "",
});

const doSignIn = async () => {
  try {
    const response = await signInWithEmailAndPassword(
      auth as Auth,
      credentials.value.email,
      credentials.value.password,
    );
    if (!response?.user) {
      throw Error("User doesn't exist");
    }
    router.replace("/index");
  } catch (error) {
    alert((error as Error)?.message);
  }
};
</script>
