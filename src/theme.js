import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const theme = extendTheme({
  website: {
    headerHeight: '70px',
  },

  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: teal,
    //     secondary: deepOrange
    //   }
    // },
    // dark: {
    //   palette: {
    //     primary: cyan,
    //     secondary: orange
    //   }
    // }
  },
  // ...other properties

  components: {
    // Name of the component
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '10px',
            height: '10px',
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdc3c7',
            borderRadius: '10px',
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#7f8c8d',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderWidth: '0.5px',
          color: 'white',
          fontWeight: 600,
          '&:hover': {
            borderWidth: '0.5px',
          },
        },
      },
    },
  },
});

export default theme;
