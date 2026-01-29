/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
   extend: {
  animation: {
    "bounce-slow": "bounce 2.5s infinite",
    blink: "blink 4s infinite",
    wave: "wave 1.5s infinite",
    float: "float 6s ease-in-out infinite",
    "float-slow": "float 9s ease-in-out infinite",
  },
  keyframes: {
    blink: {
      "0%, 95%, 100%": { transform: "scaleY(1)" },
      "97%": { transform: "scaleY(0.1)" },
    },
    wave: {
      "0%": { transform: "rotate(0deg)" },
      "50%": { transform: "rotate(20deg)" },
      "100%": { transform: "rotate(0deg)" },
    },
    float: {
      "0%, 100%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(-20px)" },
    },
  },
}
 


  },
  plugins: [],
};
