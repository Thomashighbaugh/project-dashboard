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
          100: "#9D9CB4",
          200: "#8583A2",
          300: "#727094",
          400: "#686688",
          500: "#5A5876",
          600: "#47465D",
          700: "#39384A",
          800: "#2B2A38",
          900: "#1C1C25",
        },
        white: colors.white,

        blue: {
          100: "#BBF1FF",
          200: "#77E3FF",
          300: "#55DCFF",
          400: "#33D5FF",
          500: "#00caff",
          600: "#00BDEE",
          700: "#00A2CC",
          800: "#006C88",
          900: "#004355",
        },
      },
      fontSize: {
        "7xl": "4.5rem",
      },
      spacing: {
        14: "3.375rem",
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
      display: ["Luckiest Guy", ...defaultSans],
      body: ["ASAP Condensed", ...defaultSerif],
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
      patterns: ["brick-wall", "signal"],

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
