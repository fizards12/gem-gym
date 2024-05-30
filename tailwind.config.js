/** @type {import('@material-tailwind/react').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
const breakpoints = {
  sm: "640px",
  // => @media (min-width: 640px) { ... }

  md: "768px",
  // => @media (min-width: 768px) { ... }

  lg: "1024px",
  // => @media (min-width: 1024px) { ... }

  xl: "1280px",
  // => @media (min-width: 1280px) { ... }

  "2xl": "1536px",
  // => @media (min-width: 1536px) { ... }
};
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      ...breakpoints,
      "max-2xl": { max: breakpoints["2xl"] },
      "max-xl": { max: breakpoints.xl },
      "max-lg": { max: breakpoints.lg },
      "max-md": { max: breakpoints.md },
      "max-sm": { max: breakpoints.sm },
    },
    extend: {
      scrollbar: {
        'default': {
          'thumb': 'bg-gray-500',
          'track': 'bg-gray-300',
        },
        'rounded': {
          'thumb': 'bg-blue-500 rounded-full',
          'track': 'bg-gray-300',
        },
      },
      fontSize: {
        "8xl": 80,
      },
      height: {
        1040: 1040,
        900:900
      },
      backgroundPosition: {
        "center-top": "center top",
      },
      fontFamily: {
        muli: `"muli", sans-serif`,
        oswald: `"Oswald",sans-serif`,
      },
      maxWidth: {
        "1/2": "50%",
        "1/3": "33.33333%"
      },
      skew:{
        "4":"4deg"
      },
      backgroundColor:{
        "gray-950": "#0a0a0a"
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
        },
        '.scrollbar-none': {
          'scrollbar-width': 'none',
        },
        '.scrollbar-track': {
          'scrollbar-color': 'rgba(255,255,255,0.5) transparent',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
});

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontSize:{
//         "8xl": 80
//       },
//       height:{
//         "1040": 1040
//       },
//       backgroundPosition:{
//         "center-top": "center top"
//       },
//       fontFamily: {
//         "muli": `"muli", sans-serif`,
//         "oswald": `"Oswald",sans-serif`
//       }
//     },
//   },
//   plugins: [],
// }
