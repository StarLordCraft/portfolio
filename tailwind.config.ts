import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  lightMode: 'class',
  theme: {
    extend: {
      colors:{
        primaryLight: "#FFF",
        primaryDark: '#131424',
        
        secondaryLight: "#FFF",
        secondaryDark: '#393A47',
        
        interaction: "#1d4ed8",
        interactionDark: "#3f51b5",

        accent: '#F13024',
      },

      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      
      container: {
        padding: {
          DEFAULT: '15px',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
export default config
