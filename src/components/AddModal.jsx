import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {useState, useEffect} from "react";

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
        data[category] = [
            ...data[category],
            {
                name:text1,
                day:text2,
                url:text3
            }
        ]
        setText1("")
        setText2("")
        setText3("")
        setItemList(data)
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
                <p id="child-modal-description">
                    <div>
                        <p>商品名称（全角）<input type="text" value={text1} onChange={(e) => {setText1(e.target.value)}}/></p>
                        <p>何日ごとにリマインド（半角数字のみ）<input type="text" value={text2} onChange={(e) => {setText2(e.target.value)}}/></p>
                        <p>商品のURL<input type="text" value={text3} onChange={(e) => {setText3(e.target.value)}}/></p>
                    </div>
                </p>
            <Button onClick={handleClose}>保存して閉じる</Button>
            </Box>
        </Modal>
    </React.Fragment>
    );
}

export default function NestedModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

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
                <p id="parent-modal-description">
                    追加
                </p>
                <ChildModal />
            </Box>
            </Modal>
        </div>
    );
}
export {ChildModal,NestedModal};