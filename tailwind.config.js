/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        'Hostshare': ['Hostshare', 'serif'],
        'HostshareBold': ['HostshareBold', 'serif'],
        'HostshareBook': ['HostshareBook', 'serif'],
        'HostshareLight': ['HostshareLight', 'serif'],
        'HostshareMedium': ['HostshareMedium', 'serif'],
        'HostshareXBold': ['HostshareXBold', 'serif'],
      },
      colors: {
        brand: "#329a9a",
        custom: "red"
      }
    },
  },
  plugins: [],
}

