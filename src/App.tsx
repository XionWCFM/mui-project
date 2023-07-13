import {
  Box,
  Button,
  Container,
  Stack,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import Mui from './components/Mui';
import { useState } from 'react';

const App = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          height: 1200,
        }}
        bgcolor={'background.default'}
        color={'text.primary'}
      >
        {/* navbar */}
        <Mui />
        <Stack direction={'row'} spacing={5} justifyContent={'space-between'}>
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <Button onClick={() => setMode('light')}>엄준식</Button>
        <Button onClick={() => setMode('dark')}>엄준식</Button>
      </Box>
    </ThemeProvider>
  );
};

export default App;
