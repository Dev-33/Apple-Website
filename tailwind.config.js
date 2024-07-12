/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'min-1000' : {'min':"1000px"},
        'max-1000' : {'max':"1000px"},
        'max-md' : {'max':"768px"},
        'max-sm' : {'max':"640px"},
        'max-200' : {'max':"210px"},
        'max-300' : {'max':"300px"},
        'max-350' : {'max':"350px"},
        'max-500' : {'max':"500px"},
        'max-435' : {'max':"435px"},
        'max-1120' : {'max':"1120px"},
        'max-820' : {'max':"820px"},
        'min-820' : {'min':"820px"},
        'max-680' : {'max':"680px"},
        'max-570' : {'max':"570px"},

      },
      backgroundColor:{
        'nav-background':'rgba(250, 250, 252, .8)',
      },
    },
  },
  plugins: [],
}

