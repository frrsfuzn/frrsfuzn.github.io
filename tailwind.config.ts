import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nepal': '#96B6C5',
        'casper': '#ADC4CE',
        'almond': '#EEE0C9',
        'pampas': '#F1F0E8',
        'martinique': '#2B2A4C',
        'tabasco': '#B31312',
      },
    },
  },
  plugins: [],
}
export default config
