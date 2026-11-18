/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#17191B",
        "soft-black": "#101112",
        "off-white": "#F2F0E9",
        sage: "#879889",
        olive: "#687A62",
        "warm-grey": "#A6A69D",
      },
      fontFamily: {
        display: ['"DM Serif Display"', "Georgia", "serif"],
        body: ["Manrope", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "1440px",
      },
    },
  },
  plugins: [],
};
