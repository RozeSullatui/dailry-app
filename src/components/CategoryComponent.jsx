import { useEffect, useState } from "react"
import Todo from "./AddCategory"

const CategoryComponent = () => {

    const data = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
    const [inputText, setInputText] = useState("")
    const [todos, setTodos] = useState(data)

    useEffect(() => {
        const json = JSON.stringify(todos)
        localStorage.setItem("todos",json)
    }, [todos])

    const handleAddTodo = () => {
        if(inputText === "") {
            alert("空文字列は追加できません!!")
        } else {
            setTodos([
                ...todos,
                {
                    category: inputText
                }
            ])
        }
        setInputText("")
    }
    return (
        <div>
            <h1>カテゴリー別日用品</h1>
            <input type="text" value={inputText} onChange={(e) => {setInputText(e.target.value)}}/>
            <button onClick={handleAddTodo}>追加</button>
            <ul style={{listStyle: "none"}}>
                {
                    todos.map((item, index) => {
                        return (
                            <li key={index}>
                                <Todo category={item.category} index={index} todos={todos} setTodos={setTodos}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default CategoryComponent