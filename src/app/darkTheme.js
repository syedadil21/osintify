'use client'
import { createTheme } from '@mui/material/styles';

const darkPalette = {
  mode: 'dark',
  primary: {
    main: '#3f51b5', // Adjust to your desired primary color
  },
  secondary: {
    main: '#f44336', // Adjust to your desired secondary color
  },
  background: {
    default: '#212121', // Dark background color
    paper: '#303030', // Darker background for cards and surfaces
  },
  text: {
    primary: '#fff', // White text for dark background
  },
  // Add other color options as needed (error, warning, etc.)
};

const darkTheme = createTheme({
  palette: darkPalette,
  // Add other theme customizations (typography, spacing, etc.)
});

export default darkTheme;
