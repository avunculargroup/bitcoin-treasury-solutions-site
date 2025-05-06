/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        primary: "#3d63dd",
        "primary-dark": "#2d4db3",
        "primary-light-10": "rgb(61 99 221 / 0.1)",
        "primary-dark-10": "rgb(45 77 179 / 0.1)",
        "primary-color": "#ffffff",
        "body-light": "#f8f9fa",
        "body-light-1": "#ffffff",
        "body-dark": "#0d0f10",
        "body-dark-1": "#1e293b",
        "body-dark-2": "#334155",
        "body-dark-3": "#475569",
        "body-dark-4": "#64748b",
        "body-dark-5": "#94a3b8",
        "body-dark-6": "#cbd5e1",
        "body-dark-7": "#e2e8f0",
        "body-dark-8": "#f1f5f9",
        "body-dark-9": "#f8fafc",
        "body-dark-10": "#f1f5f9",
        "body-dark-11": "#64748b",
        "body-striped": "#f8f9fa",
        alpha: {
          light: "#d6dbfc2f",
        },
        beta: {
          light: "#adc5f30f",
        },
      },
      borderColor: {
        alpha: {
          light: "#00073527",
          dark: "#d6dbfc2f",
        },
      },
      backgroundColor: {
        body: {
          striped: {
            light: "#00005506",
            dark: "#adc5f30f",
          },
        },
      },
      boxShadow: {
        "card-1": "0px 0px 40px 0px rgba(0, 0, 0, 0.08)",
        "card-2": "0px 10px 20px 0 rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
