import NestedModal, { ChildModal } from "./AddModal"

const AddCategory = ({category, index, todos, setTodos}) => {
    const handleTodoDelete = () => {
        const newTodos = [...todos]
        newTodos.splice(index,1)
        setTodos(newTodos)
    }
    return (
        <div>
            <p>{category}</p>
            <NestedModal/>
            <ChildModal category={category}/>
            <button onClick={handleTodoDelete}>消去</button>
        </div>
    )
}

export default AddCategory