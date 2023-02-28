import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@mui/material';
import React, { useState } from 'react'
import CategoryComponent from './CategoryComponent';
import Header from './header';
import ListComponent from './ListComponent';

const theme = unstable_createMuiStrictModeTheme({
  palette: {
    primary: {
      main: '#BDF3CC', // 緑よりも薄い色の指定
    },
  },
});

function HomePage() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Header/>
      <div>
        <ListComponent todos={todos} setTodos={setTodos}/>
      </div>
      <div>
        <CategoryComponent />
      </div>
      </ThemeProvider>
    </div>
  )
}

export default HomePage