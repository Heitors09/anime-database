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
        'carousel-images' : 'rgba(0, 0, 0, 0.8)',
        'seasonal' : 'rgba(228, 92, 200, 0.7)',
        'anime-synopsis' : 'rgba(0, 0, 0, 0.3)'
      },
      backgroundImage: {
        'fade-out': 'linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.5) 10%, transparent 100%)',
      },

    }
    
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config