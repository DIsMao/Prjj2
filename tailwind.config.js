/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./adaptTest.html",
    "./index.html",
    "./test.html",
    "./src/**/*.{html,js}"],
  theme: {

    extend: {
      colors: {
        "custom": "rgb(0, 183, 255)",
        "yellow-1": "#F2BE22",
        "custom-lg": "rgba(0, 0, 0, 0.04)",
        "white-c1": "#fdfdfd",
        "black-c1": "#1a3e3e",
        "black-c2":"#18121e",
        "black-c3":"rgba(26, 62, 62, 0.3)",
        "white-smth": "rgba(255, 255, 255, 0.2)",
        "gray-c1": "#f3f5f4",
        "gray-c2": "rgba(253, 253, 253, 0.4)",
      },
      fontSize: {
        '10px': '10px',
        '12px': '12px',
        '14px': '14px',
        '18px': '18px',
        '50px': '50px',
        '32px': '32px',
        '26px': '26px',
      },
      height: {
        '500px': '500px',
        '280px': '280px',
        '90px': '90px',
        '116px': '116px',
      },
      maxHeight: {
        '116px': '116px',
      },
      width: {
        '230px': '230px',
        '280px': '280px',
        '536px': '536px',
      },
      gap: {
        '10px': '10px',
        '18px': '18px',
        '50px': '50px',
        '32px': '32px',
      },
      padding: {
        '100px': '100px',
        '18px': '18px',
        '50px': '50px',
        '32px': '32px',
        '2px': '2px',
        '10px': '10px',
        '530px': '530px',
      },
      lineHeight: {
        '150%': '150%',
        '111%': '111%',
        '143%': '143%',
        '133%': '133%',
        '120%': '120%',
        '129%': '129%',
        '125%': '125%',
      },
      spacing: {
        '340px': '340px',
        '270px': '270px',
        '280px': '280px',
        '50px': '50px',
        '410px': '410px',
        '100px': '100px',
        'm50%': '-50%',
        '196px': '196px',
        '98px': '98px',
        'm98px': '-98px',
        '285px': '285px',
      },
      screens: {
        'xl': '1180px',
  
        '2xl': '1180px',
      },
      borderRadius: {
        "50px": "50px",
        "32px": "32px",
        "10px": "10px",
        "4px": "4px",
      },


    },
  },
  plugins: [],
}

