const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textStrokeWidth: {
        '1': '1px',
        '2': '2px',
        // Add more stroke widths if needed
      },
      textStrokeColor: {
        black: 'black',
        white: 'white',
        secondary : '#BEFB7C'
        // Add more colors if needed
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-1': {
          '-webkit-text-stroke-width': '1px',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke-width': '2px',
        },
        '.text-stroke-black': {
          '-webkit-text-stroke-color': 'black',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke-color': 'white',
        },
        '.text-stroke-secondary': {
          '-webkit-text-stroke-color': '#BEFB7C',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
export default config;
