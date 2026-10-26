window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        jet: '#0B0D12',
        ink: '#12151C',
        graphite: '#1A1E27',
        cerulean: { DEFAULT: '#007BA7', 50: '#E8F4F9', 100: '#D3EAF3', 300: '#5CC8F0', 400: '#2FA6D3', 600: '#00668B', 700: '#00506E' },
        rose: { DEFAULT: '#FF4D8D', 300: '#FF8DB5' },
        soft: '#F5F7FA',
        silver: { DEFAULT: '#A7B0BE', 100: '#EEF1F5', 200: '#E1E6ED', 300: '#C9D0DA', 500: '#8A94A3', 600: '#6B7482', 700: '#4A515C' }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  }
};
