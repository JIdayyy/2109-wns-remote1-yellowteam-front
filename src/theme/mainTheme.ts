/* eslint-disable @typescript-eslint/no-explicit-any */

const mainTheme = {
  config: { initialColorMode: 'light', useSystemColorMode: false },
  textStyles: {
    fonts: {
      heading: 'Open Sans, sans-serif',
      body: 'Poppins',
    },
    titleLogin: {
      fontSize: ['24', '24', '24', '24'],
      fontWeight: '800',
      color: '#252733',
      fontFamily: 'Poppins',
    },
    loginText: {
      fontSize: ['14'],
      fontWeight: '400',
      color: '#9FA2B4',
      fontFamily: 'Poppins',
    },
    formLabel: {
      fontSize: ['12'],
      fontWeight: '800',
      color: '#9FA2B4',
    },
    formPlaceholder: {
      fontSize: ['14'],
      fontWeight: '400',
      color: '#9FA2B4',
    },
    h1: {
      fontSize: ['16', '18'],
      fontWeight: 'bold',
      color: '#24323F',
      fontFamily: 'Poppins',
    },

    body: {
      fontSize: ['12', '14'],
      color: '#24323F',
      fontFamily: 'Poppins',
      fontWeight: 'bold',
    },
  },

  section: {
    card: {
      backgroundColor: 'white',
      minHeight: '800px',
      margin: '0px 50px 50px 120px',
      borderRadius: '8px',
      padding: '30px 30px 30px 50px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
  },
}

export default mainTheme
