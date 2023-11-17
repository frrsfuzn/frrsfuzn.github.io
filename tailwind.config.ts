import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
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
        'apricot': '#EA906C',
        'blackPearl': '#1B262C',
        'seashellCove': '#0F4C75',
        'blueSplash': '#3282B8',
        'arcticParadise': '#BBE1FA',
        'freinachtBlack': '#1e2c34',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
