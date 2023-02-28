import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@mui/material';
import React, { useEffect, useState } from 'react'
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
  const data = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
  const [todos, setTodos] = useState(data)
  const [itemList, setItemList] = useState({});

  useEffect(() => {
        const json = JSON.stringify(todos)
        localStorage.setItem("todos",json)
    }, [todos])

    useEffect(() => {
      const storedItemList = localStorage.getItem("itemList");
      if (storedItemList) {
        setItemList(JSON.parse(storedItemList));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem("itemList", JSON.stringify(itemList));
    }, [itemList]);
  
    useEffect(() => {
      const newTodos = Object.keys(itemList).map((category) => ({ category }));
      setTodos(newTodos);
    }, [itemList]);

  return (
    <div>
      <ThemeProvider theme={theme}>
      <Header/>
      <div>
        <ListComponent todos={todos} setTodo={setTodos} itemList={itemList} setItemList={setItemList}/>
      </div>
      <div>
        <CategoryComponent  todos={todos} setTodos={setTodos}itemLists={itemList} setItemLists={setItemList}/>
      </div>
      </ThemeProvider>
    </div>
  )
}

export default HomePage