const defaultTheme = require('tailwindcss/defaultTheme')

const defaultSans = [
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  '"Noto Sans"',
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
];

const defaultSerif = [
  "Georgia",
  "Cambria",
  '"Times New Roman"',
  "Times",
  "serif",
];
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    mode: "all",
    content: [
      "./components/**/*.{js,ts,jsx,tsx,css}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: { deep: [/blur$/] },
    },
  },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00caff",
        secondary: "#55DCFF",
        transparent: "transparent",
        current: "currentColor",
        // Overwrite default grays with a neutral shade (defaults are blue-ish)
        gray: {
          DEFAULT: "#555E70",
          50: "#F7F7F9",
          100: "#E9e9ffT",
          200: "#BEC3CE",
          300: "#98A1B1",
          400: "#737E95",
          500: "#555E70",
          600: "#4A5262",
          700: "#3F4653",
          800: "#343945",
          900: "#292D36",
        },
        white: colors.white,

        blue: {
          DEFAULT: "#00CAFF",
          50: "#8AE7FF",
          100: "#7AE3FF",
          200: "#5CDDFF",
          300: "#3DD7FF",
          400: "#1FD0FF",
          500: "#00CAFF",
          600: "#00BEF0",
          700: "#00B2E0",
          800: "#00A6D1",
          900: "#009AC2",
        },
      },
      fontSize: {
        "7xl": "4.5rem",
      },
      spacing: {
        px: "1px",
        0: "0",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        22: "5.5rem",
        24: "6rem",
        26: "6.5rem",
        28: "7rem",
        30: "7.5rem",
        32: "8rem",
        34: "8.5rem",
        36: "9rem",
        38: "9.5rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        68: "17rem",
        72: "18rem",
        76: "19rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
        104: "26rem",
        110: "28rem",
        118: "30rem",
        126: "32rem",
        132: "34rem",
        140: "36rem",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            blockquote: {
              borderLeftColor: theme("colors.gray.700"),
            },
            "ol > li::before": {
              color: theme("colors.gray.700"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.gray.700"),
            },

          },
        },

        dark: {
          css: {
            color: theme("colors.gray.100"),
            body: {
              backgroundColor: theme("colors.gray.900"),
            },
            blockquote: {
              borderLeftColor: theme("colors.gray.300"),
            },
            "ol > li::before": {
              color: theme("colors.gray.300"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.gray.800"),
            },
            a: {
              color: theme("colors.blue.500"),
            },
            h1: {
              color: theme("colors.gray.100"),
            },
            h2: {
              color: theme("colors.gray.100"),
            },
            h3: {
              color: theme("colors.gray.100"),
            },
            h4: {
              color: theme("colors.gray.100"),
            },
            h5: {
              color: theme("colors.gray.100"),
            },
            h6: {
              color: theme("colors.gray.100"),
            },
            strong: {
              color: theme("colors.gray.100"),
            },
            code: {
              color: theme("colors.gray.100"),
            },
            figcaption: {
              color: theme("colors.gray.100"),
            },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.200"),
            },
          },
        },
      }),
    },
    fontFamily: {
      san: ["Inter", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require("@tailwindcss/typography"),
  require('postcss-import'),
  require('tailwindcss'),
  require('autoprefixer'),
  require("tailwind-heropatterns")({
    // as per tailwind docs you can pass variants
    variants: ["dark"],

    // the list of patterns you want to generate a class for
    // the names must be in kebab-case
    // an empty array will generate all 87 patterns
    patterns: [],

    // The foreground colors of the pattern
    colors: {
      default: "#47465d",
      "dark": "#686688" //also works with rgb(0,0,205)
    },

    // The foreground opacity
    opacity: {
      default: "1.0",
      "100": "1.0"
    }
  }),
  ],
  variants: {
    extend: {
      typography: ["dark"],
      textColor: ['responsive', 'dark', 'hover', 'focus'],

    },
  },
};
