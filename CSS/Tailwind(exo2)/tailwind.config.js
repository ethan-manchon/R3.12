/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        red: "var(--clr-red)",
        blue: "var(--clr-blue)",
        white: "var(--clr-white)",
        VLgrayish: "var(--clr-very-light-grayish-blue)",
        LgrayishOne: "var(--clr-light-grayish-blue-1)",
        Lgrayishtwo: "var(--clr-light-grayish-blue-2)",
        grayish: "var(--clr-grayish-blue)",
        Dgrayish: "var(--clr-dark-grayish-blue)",
        VdarkBlue: "var(--clr-very-dark-blue)",
    },
    fontFamily: {
      jakara: "var(--ff-jakarta)",
    },
  },
  plugins: [],
}
}