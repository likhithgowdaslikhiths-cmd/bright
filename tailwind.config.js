/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
 extend: {
  animation: {
    chalkWrite: "chalkWrite 1.8s steps(12) forwards",
    chalkFade: "chalkFade 1s ease forwards",
    chalkLine: "chalkLine 1.2s ease-out forwards",
  },
  keyframes: {
    chalkWrite: {
      "0%": { clipPath: "inset(0 100% 0 0)" },
      "100%": { clipPath: "inset(0 0 0 0)" },
    },
    chalkFade: {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 },
    },
    chalkLine: {
      "0%": { width: "0", opacity: 0 },
      "100%": { width: "12rem", opacity: 0.4 },
    },
  },
}


 


  },
  plugins: [],
};
