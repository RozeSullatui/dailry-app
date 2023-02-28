import NestedModal, { ChildModal } from "./AddModal"


const styles = {
    border: '1px solid black',
    borderRadius: '10px',
    padding: '10px',
};

const AddCategory = ({category, index, todos, setTodos}) => {
    const handleTodoDelete = () => {
        const newTodos = [...todos]
        newTodos.splice(index,1)
        setTodos(newTodos)
    }
    return (
        <div style={styles}>
            <p>{category}</p>
            <NestedModal/>
            <ChildModal category={category}/>
            <button onClick={handleTodoDelete}>消去</button>
        </div>
    )
}

export default AddCategory