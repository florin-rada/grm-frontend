export let passiveSupported = false;

try {
  const options = {
    get passive() {
      // This function will be called when the browser
      // attempts to access the passive property.
      passiveSupported = true;
      return false;
    },
  };

  window.addEventListener("test", null, options);
  window.removeEventListener("test", null, options);
} catch (err) {
  passiveSupported = false;
}

export let captureSupported = false;
try {
    const options = {
        get capture() {
            captureSupported = true;
            return false;
        },
    };
    window.addEventListener("test", null, options);
    window.removeEventListener("test", null, options);
} catch(err) {
    captureSupported = false;
}

export let onceSupported = false;
try {
    const options = {
        get once() {
            onceSupported = true;
            return false;
        },
    };
    window.addEventListener("test", null, options);
    window.removeEventListener("test", null, options);
} catch(err) {
    onceSupported = false;
}

