import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        viking: ['Viking', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
