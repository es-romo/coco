function get_initial_color_scheme() {
  const storedPreference = window.localStorage.getItem("color-scheme");

  if (storedPreference) return storedPreference;

  const color_preference = window.matchMedia("(prefers-color-scheme: dark)");
  if (typeof color_preference.matches === "boolean") {
    return color_preference.matches ? "dark" : "light";
  }

  return "light";
}

function toggle_color_scheme() {
  // Get theme current theme
  const htmlelement = document.documentElement;
  const isDark = htmlelement.classList.contains("dark");
  const [oldScheme, newScheme] = isDark ? ["dark", "light"] : ["light", "dark"];

  htmlelement.classList.add(newScheme);
  htmlelement.classList.remove(oldScheme);

  window.localStorage.setItem("color-scheme", newScheme);
}

function init() {
  // Get initial theme
  const theme = get_initial_color_scheme();
  // Update html class
  const htmlelement = document.documentElement;
  htmlelement.classList.add(theme);
}

init();
