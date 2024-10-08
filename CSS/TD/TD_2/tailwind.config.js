/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {
      backgroundImage: {
        'reunion': "url('/screen/reunion.jpg')",
    },
      backgroundColor: {
        'blue-500': "hsla(var(--clr-bg)/ <alpha-value>)",
        'indigo-500': "hsla(var(--clr-button)/ <alpha-value>)",
        'white': "hsla(var(--clr-text)/ <alpha-value>)",
      },
      textColor: {
        'indigo-700': "hsla(var(--clr-text-btn)/<alpha-value>)",
        'white': "hsla(var(--clr-text)/<alpha-value>)",
      },
    },
  },
  plugins: [],
}

// npx tailwindcss -i ./src/style.css -o ./dist/style.css --watch