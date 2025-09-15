import { createTheme } from '@mui/material/styles';

// Retro, peaceful theme as specified in the guide
export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#7B68EE', // Medium slate blue - retro purple
      light: '#9F8FEF',
      dark: '#5A4FCF',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#98D8C8', // Mint green - peaceful
      light: '#B8E6D9',
      dark: '#7BC4B4',
      contrastText: '#2C3E50',
    },
    background: {
      default: '#FFF8F0', // Warm white - peaceful
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C3E50', // Dark blue-gray
      secondary: '#5D6D7E',
    },
    info: {
      main: '#85C1E9', // Light blue
      light: '#AED6F1',
      dark: '#5DADE2',
    },
    success: {
      main: '#58D68D', // Soft green
      light: '#82E0AA',
      dark: '#28B463',
    },
    warning: {
      main: '#F7DC6F', // Soft yellow
      light: '#F9E79F',
      dark: '#F4D03F',
    },
    error: {
      main: '#EC7063', // Soft red
      light: '#F1948A',
      dark: '#E74C3C',
    },
  },
  typography: {
    fontFamily: [
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 600,
      fontSize: '2.5rem',
      color: '#2C3E50',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      color: '#2C3E50',
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.5rem',
      color: '#2C3E50',
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.25rem',
      color: '#2C3E50',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12, // Rounded corners for retro feel
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25, // Rounded buttons
          textTransform: 'none', // Normal case text
          fontWeight: 600,
          padding: '10px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 12px rgba(123, 104, 238, 0.15)', // Soft purple shadow
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#7B68EE',
          boxShadow: '0 2px 8px rgba(123, 104, 238, 0.2)',
        },
      },
    },
  },
});
