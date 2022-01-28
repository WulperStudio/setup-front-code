import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          scrollbarColor: '#f6f7fc transparent',
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: 'transparent',
            width: 6,
            height: 6,
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 6,
            backgroundColor: '#f6f7fc',
            border: '1px solid transparent',
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
            {
              backgroundColor: '#f6f7fc',
            },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
            {
              backgroundColor: '#f6f7fc',
            },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
            {
              backgroundColor: '#f6f7fc',
            },
          '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: ['Poppins'].join(','),
  },
  palette: {
    primary: {
      main: '#14BFE2',
    },
    error: {
      main: '#F25A5A',
    },
    text: {
      primary: '#353E6C',
      secondary: '#B2BEDA',
    },
  },
});

export default defaultTheme;
