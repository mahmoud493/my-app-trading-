import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './features/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#0b1220',
        panel: '#121d31',
        border: '#263248',
        accent: '#40c6ff',
        highlight: '#6de6f7',
        success: '#42f5b4',
        warning: '#ffb84d',
        danger: '#ff6d6d'
      },
      boxShadow: {
        surface: '0 20px 80px rgba(0,0,0,0.18)'
      }
    }
  },
  plugins: []
};

export default config;
