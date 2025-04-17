/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#3d63dd",
          light: "#3d63dd",
          light1: "#f5f8ff",
          light2: "#e5edff",
          light3: "#d6e1ff",
          light4: "#c6d5ff",
          light5: "#b7c9ff",
          light6: "#a7bdff",
          light7: "#98b1ff",
          light8: "#88a5ff",
          light9: "#7999ff",
          light10: "#698dff",
          light11: "#5a81ff",
          light12: "#4a75ff",
        },
        body: {
          light1: "#f8f9fa",
          light2: "#e9ecef",
          light3: "#dee2e6",
          light4: "#ced4da",
          light5: "#adb5bd",
          light6: "#6c757d",
          light7: "#495057",
          light8: "#343a40",
          light9: "#212529",
          light10: "#1a1d20",
          light11: "#141619",
          light12: "#0d0f10",
          striped: "#f8f9fa",
        },
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
