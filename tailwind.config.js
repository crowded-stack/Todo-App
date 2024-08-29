/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "75%": "75%",
        "70%": "70%",
        "60%": "60%",
        "20%": "20%",
        "15%": "15%",
        "10%": "10%",
      },
      width: {
        "80%": "80%",
        "70%": "70%",
        "60%": "60%",
        "50%": "50%",
        "40%": "40%",
        "30%": "30%",
      },
    },
  },
  plugins: [],
};
