import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend:{
      backgroundColor: {
        'carousel': 'rgba(0, 0, 0, 0.1)',
        'seasonal' : 'rgba(228, 92, 186, 0.5)'
      }
    }
    
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config