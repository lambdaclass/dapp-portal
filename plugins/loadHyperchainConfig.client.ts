export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:beforeMount", () => {
    fetch("/api/config")
      .then((r) => {
        if (r.ok) {
          window.console.log(`config:\n ${r.json()}`);
          return r.json();
        }
        return Promise.reject(r);
      })
      .then((config) => {
        updateAppConfig(config);
      })
      .catch((e) => {
        window.console.error(e);
      });
  });
});
