/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#ec0000',
        dark: '#cc0000'
      },
      secondary: {
        yellow: '#FFCC33'
      },
      green: {
        medium: '#92CF96'
      },
      alternative: {
        DEFAULT: '#127277',
        light: '#f5f9fb',
        medium: '#CEDEE7',
        dark: '#0d5155'
      },
      info: {
        DEFAULT: '#23779a',
        light: '#f5f9fb'
      },
      success: {
        DEFAULT: '#008035',
        light: '#f0f8f0'
      },
      warning: {
        DEFAULT: '#856300',
        light: '#fffaeb'
      },
      error: {
        DEFAULT: '#990000',
        light: '#fee5e5'
      },
      focus: '#3366FF',
      white: '#ffffff',
      soft: '#727272',
      dark: '#222222',
      transparent: 'transparent',
      current: 'currentColor'
    },
    fontFamily: {
      sans: [
        'Santander Micro Text',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif'
      ],
      headline: [
        'Santander Headline',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif'
      ]
    },
    extend: {
      backgroundImage: {
        'checkbox-checked': 'url("/images/svg/checkbox-checked.svg")',
        'checkbox-readonly': 'url("/images/svg/checkbox-readonly.svg")',
        'checkbox-disabled': 'url("/images/svg/checkbox-disabled.svg")'
      },
      boxShadow: {
        button: '0 1px 6px 0 rgba(163, 163, 163, 0.4)',
        modal: '0 1px 10px 0 rgba(163, 163, 163, 0.4)'
      },
      colors: {
        button: {
          secondary: {
            hover: '#f6f6f6'
          }
        },
        border: {
          default: '#8F8F8F',
          disabled: '#CCCCCC'
        }
      },
      padding: {
        18: '4.5rem'
      }
    }
  },
  plugins: []
};
