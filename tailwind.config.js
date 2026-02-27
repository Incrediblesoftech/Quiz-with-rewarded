/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        coinFlip: {
          '0%': { transform: 'rotatey(0deg)' },
          '100%': { transform: 'rotatey(360deg)' },
        },
        spin360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        coinFlip: 'coinFlip 1s linear infinite',
        spin360: 'spin360 1s linear infinite',
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary1: "#172031", //Main Background Color
        primary2: "hsla(0, 0%, 100%, .639)", //text color 
        primary3: "#3b4559 ", //main page content bg color
        primary4: "#ffb540",   // yellow color
        primary5: "#80808042", //Bg box color
        primary6: "#8e8f98",// text color gry
        primary7: "#6DCD01", //  grren 
      },
      backgroundImage: {
        'gradient-primary6-fade': 'linear-gradient(to right, rgba(188, 97, 255, 0.1), rgba(255, 255, 255, 1))',
        'ecf0f9-fade': 'linear-gradient(to right, rgba(188, 97, 255, 0.1), rgba(255, 255, 255, 1))',
        'border-gradient-top': 'linear-gradient(to bottom, #ECF0F9, rgba(236, 240, 249, 0))',

      },
      screens: {
        xs: "400px",
        ls: "550px",
        sm: "640px",
        md: "768px",
        lg: "1000px",
        xl: "1200px",
        "2xl": "1536px",
        "3xl": "1636px",
      },
      boxShadow: {
        custom: "2px 2px 14px rgb(0 0 0 / 40%)",
      },
      fontFamily: {
        jockey: ['"Jockey One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
