import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        "backgroundLight": "#FFF",
        "backgroundDark": "#181818",
        "interaction": "#1d4ed8",
        "interactionDark": "#3f51b5"
      }
    },
  },
  variants: {
    extend: {
      
    }
  },
  plugins: [],
}
export default config
