/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
    "./july-19.html",
    "./privacy-policy.html"
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        serif: ["Zen Antique Soft", "serif"],
      },
      colors: {
        black: "#040B18",
        primary: "#123878",
        "primary-dark": "#1A2332",
        "primary-light-10": "rgb(61 99 221 / 0.1)",
        "primary-dark-10": "rgb(45 77 179 / 0.1)",
        "primary-color": "#ffffff",
        "secondary": "#4E4011",
        "body-light": "#FCF9F1",
        "body-light-1": "#ffffff",
        "body-striped": "#f8f9fa",
        "alpha-light": "#D4AF37",
        alpha: {
          light: "#D4AF37",
        },
        beta: {
          light: "#adc5f30f",
        },
      },
      borderColor: {
        alpha: {
          light: "#00073527",
        },
      },
      backgroundColor: {
        body: {
          striped: {
            light: "#00005506",
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
