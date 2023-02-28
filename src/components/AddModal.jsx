import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material';
import { EditNotificationsOutlined } from '@mui/icons-material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function ChildModal({category}) {

    var data = localStorage.getItem("itemList") ? JSON.parse(localStorage.getItem("itemList")) : {}
    const [itemList, setItemList] = useState(data)
    const [text1, setText1] = useState("")
    const [text2, setText2] = useState("")
    const [text3, setText3] = useState("")

    useEffect(() => {
        const json = JSON.stringify(itemList)
        localStorage.setItem("itemList", json)
    }, [itemList])
    

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };


    const handleClose = () => {
    if (!data[category]) data[category] = []
    
        // 入力内容が正しいかどうかをチェック
        if (text1 && text2 && text3) {
            data[category] = [      ...data[category],
            {
                id: uuidv4(),
                name: text1,
                day: text2,
                url: text3
            }
            ]
            setText1("")
            setText2("")
            setText3("")
            setItemList(data)
            
            // 保存処理は handleClose 関数内でのみ行うようにする
            const json = JSON.stringify(data)
            localStorage.setItem("itemList", json)
        }
    
    setOpen(false);
    };

    return (
    <React.Fragment>
        <Button onClick={handleOpen}>{category}追加</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box sx={{ ...style, width: 200 }}>
                <h2 id="child-modal-title">商品追加</h2>
                <div id="child-modal-description">
                    <div>
                        <p>商品名称（全角）<input type="text" value={text1} onChange={(e) => {setText1(e.target.value)}}/></p>
                        <p>何日ごとにリマインド（半角数字のみ）<input type="text" value={text2} onChange={(e) => {setText2(e.target.value)}}/></p>
                        <p>商品のURL<input type="text" value={text3} onChange={(e) => {setText3(e.target.value)}}/></p>
                    </div>
                </div>
            <Button onClick={handleClose}>保存して閉じる</Button>
            </Box>
        </Modal>
    </React.Fragment>
    );
}

function renderItems(items) {
    return items.map((item) => (
      <ListItem key={item.id}>
        <ListItemText primary={item.name} secondary={`期限: ${item.day}日`} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="edit">
            <EditNotificationsOutlined />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));
  }

function NestedModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // LocalStorage から itemList と todos を取得する
    const itemList = JSON.parse(localStorage.getItem("itemList"));
    const todos = JSON.parse(localStorage.getItem("todos"));

    // カテゴリごとにアイテムを表示するためのオブジェクトを作成する
    const itemsByCategory = {};
    for (const [category, items] of Object.entries(itemList)) {
        itemsByCategory[category] = renderItems(items);
    }

    return (
        <div>
        <Button onClick={handleOpen}>編集</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style, width: 400 }}>
            <h2 id="parent-modal-title">商品編集</h2>
            <p id="parent-modal-description">追加</p>
            {todos.map((todo) => (
                <div key={todo.category}>
                <h3>{todo.category}</h3>
                <List>{itemsByCategory[todo.category]}</List>
                </div>
            ))}
            </Box>
        </Modal>
        </div>
    );
}

export {ChildModal,NestedModal};