// middleware/auth.ts
export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useFbAuth()?.currentUser;
  // redirect the user to the login page
  if (!user) {
    console.log("redirect");

    return navigateTo({
      path: "/login",
      query: {
        redirect: to.fullPath,
      },
    });
  }
});
