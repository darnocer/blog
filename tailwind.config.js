const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const customColors = {
  primary: {
    300: '#55C3D0',
    400: '#40BCCA',
    500: '#39B4C4',
    600: '#32A2B0',
    700: '#2C909D',
  },
  secondary: {
    100: '#fef9c3',
    200: '#fef08a',
    300: '#FCE047',
    400: '#FACC14',
    500: '#EAB307',
    600: '#CA8A04',
  },
  tertiary: {
    300: '#59B49D',
    400: '#45AA91',
    500: '#30A185',
    600: '#2C9178',
  },
  accent: {
    300: '#c76565',
    400: '#c05252',
    500: '#B93F3F',
    600: '#a73939',
    700: '#943232',
  },
  gray: {
    100: '#ffffff',
    200: '#e6e6e6',
    300: '#cdcccc',
    400: '#b3b3b3',
    500: '#9a9a9a',
    600: '#818181',
    700: '#4f4e4e',
    800: '#353535',
    900: '#1c1b1b',
  },
}

const sharedTypographyStyles = {
  css: [
    {
      color: colors.gray[800],
      a: {
        fontWeight: 600,
        color: customColors.primary[500],
        textDecoration: 'none',
        '&:hover': {
          color: customColors.primary[600],
          textDecoration: 'underline',
        },
      },
      h1: {
        fontWeight: '800',
        letterSpacing: defaultTheme.letterSpacing.tight,
        color: colors.gray[900],
      },
      h2: {
        fontWeight: '800',
        letterSpacing: defaultTheme.letterSpacing.tight,
        color: colors.gray[900],
      },
      h3: {
        fontWeight: '800',
        color: colors.gray[900],
      },
      'h4,h5,h6': {
        color: colors.gray[900],
      },
      pre: {
        backgroundColor: colors.gray[800],
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.75)',
      },
      code: {
        backgroundColor: colors.gray[200],
        color: colors.gray[700],
        padding: '3px',
        borderRadius: '0.15rem',
      },
      'pre code': {
        backgroundColor: 'transparent', // Ensure code blocks have no background here
      },
      details: {
        backgroundColor: colors.gray[200],
      },
      hr: {
        borderColor: colors.gray[200],
      },
      'ol li::marker': {
        fontWeight: '600',
        color: colors.gray[500],
      },
      'ul li::marker': {
        backgroundColor: colors.gray[500],
      },
      strong: {
        fontWeight: '800',
        color: colors.gray[800],
        // textDecoration: 'underline',
        // textDecorationColor: colors.teal[500],
        // textDecorationThickness: '4px',
        // textUnderlineOffset: '3px',
      },
      blockquote: {
        borderLeftColor: customColors.secondary[500],
      },
    },
  ],
}

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './lib/**/*.js',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontSize: {
        xxs: '.70rem',
      },
      fontFamily: {
        sans: ['ITC Avant Garde Pro', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        normal: 500,
      },
      colors: {
        ...customColors,
      },
      borderWidth: {
        1: '1px',
      },
      boxShadow: {
        greenDark: '0 0 22px 8px rgba(5, 255, 0, .25)',
        green: '0 0 22px 8px rgba(39, 161, 133, .25)',
        yellow: '0 0 22px 8px rgba(236, 172, 69, .25)',
        code: '0 8px 16px rgba(0, 0, 0, 0.75)',
      },
      typography: (theme) => ({
        DEFAULT: sharedTypographyStyles,
        dark: {
          css: {
            ...sharedTypographyStyles.css[0],
            color: colors.gray[200],
            a: {
              ...sharedTypographyStyles.css[0].a,
              color: customColors.primary[500],
              '&:hover': {
                color: customColors.primary[400],
                textDecoration: 'underline',
              },
            },
            h1: {
              ...sharedTypographyStyles.css[0].h1,
              color: colors.gray[200],
            },
            h2: {
              ...sharedTypographyStyles.css[0].h2,
              color: colors.gray[200],
            },
            h3: {
              ...sharedTypographyStyles.css[0].h3,
              color: colors.gray[200],
            },
            'h4,h5,h6': {
              color: colors.gray[200],
            },
            pre: {
              backgroundColor: colors.gray[800],
            },
            code: {
              ...sharedTypographyStyles.css[0].code,
              backgroundColor: colors.gray[700],
              color: colors.gray[200],
            },
            'pre code': {
              backgroundColor: colors.gray[800],
            },
            details: {
              backgroundColor: colors.gray[800],
            },
            hr: {
              borderColor: colors.gray[700],
            },
            'ol li::marker': {
              ...sharedTypographyStyles.css[0]['ol li::marker'],
              color: colors.gray[400],
            },
            'ul li::marker': {
              backgroundColor: colors.gray[400],
            },
            strong: {
              ...sharedTypographyStyles.css[0].strong,
              color: colors.gray[300],
            },
            blockquote: {
              ...sharedTypographyStyles.css[0].blockquote,
              color: colors.gray[100],
            },
            thead: {
              th: {
                color: colors.gray[100],
              },
            },
            tbody: {
              tr: {
                borderBottomColor: colors.gray[700],
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
