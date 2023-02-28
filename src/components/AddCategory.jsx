import {NestedModal,  ChildModal } from "./AddModal"


const styles = {
    border: '1px solid black',
    borderRadius: '10px',
    padding: '10px',
};

const AddCategory = ({category, index, todos, setTodos,itemLists,setItemLists}) => {
    const handleTodoDelete = () => {
        const newTodos = [...todos]
        newTodos.splice(index,1)
        setTodos(newTodos)
    }
    const handleCategoryDelete = () => {
        const newLists = [...itemLists]
        newLists.splice(index, 1)
        setItemLists(newLists)
    }

    return (
        <div style={styles}>
            <p>{category}</p>
            <NestedModal/>
            <ChildModal category={category}/>
            <button onClick={handleTodoDelete}>アイテム削除</button>
            <button onClick={handleCategoryDelete}>カテゴリー削除</button>
        </div>
    )
}

export default AddCategory