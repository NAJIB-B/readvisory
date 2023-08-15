/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        primary: {
          1: '#222222',
          2: '#CEA964',
          3: '#F7F4EE',
        },
        secondary: {
          1: '#1F1F1F',
          2: '#484848',
          3: '#7676802B',
          4: '#DADADA',
          5: '#1E1E1E',
          6: '#FAFAFA',
        },
      },
    },
  },
  plugins: [],
};
