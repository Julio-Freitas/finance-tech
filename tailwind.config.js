/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-1': '#463220',
        'color-2': '#66593c',
        'color-3': '#eceade',
        'color-4': '#f7f8f5',
        'color-5': '#fff',
      },
      spacing: {
        s: '0.652rem',
        gap: '1.25rem',
      },
    },
  },
  plugins: [],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
    },
  ],
};
