import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper'

// Light Theme
const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    background: '#f0e7db',
    text: '#000000',
    primary: '#800080',
    accent: '#ff63c3',
    placeholder: '#525252',
    grassTeal: '#88ccca'
  }
};

// Dark Theme
const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    background: '#202023',
    text: '#ffffff',
    primary: '#ffa500',
    accent: '#3d7aed',
    placeholder: '#525252',
    grassTeal: '#88ccca'
  },
};

export { lightTheme, darkTheme };
