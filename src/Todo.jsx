import React,{useState} from 'react'

const Todo = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [todos, setTodos] = useState([])
    const [edit, setEdit] = useState(false)
    const [editIndex, setEditindex] = useState(null)

    

    const submit = () =>{

        let data = {
            title, content 
            
        }
        console.log(data)
        if (edit) {
            const newTodo = [...todos]
            newTodo[editIndex] = data
            setTodos(newTodo)
            setEdit(false)
            setEditindex(null)
        } else {
            setTodos([...todos, data])
        }
    }

    const deleteItem = (index)=>{
        setTodos(todos.filter((item, i)=> i !== index))

    }

    const editItem = (index) => {
        console.log("editing index");
        
        const item = todos[index]
        setTitle(item.title)
        setContent(item.content)
        setEdit(true)
        setEditindex(index)
    }
        
    


  return (
    <>
       <div>
         <input value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" />
         <input value={content} onChange={(e)=>{setContent(e.target.value)}} type="text" />
         <div>
            <button onClick={submit}>{edit ? "Update" : "Submit"}</button>
         </div>
         <table>
            <thead>
                    <tr>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Actions</th>
                    </tr>
                </thead>   
                <tbody>
                {todos.map((todo, index) => (    
        
                <tr key={(index)}>
                
                    <td>{todo.title}</td>
                    <td>{todo.content}</td>
                    <td><button onClick={()=>editItem(index)}>Edit</button>
                    <button  onClick={()=>deleteItem(index)}>Delete</button></td>
                </tr>
         ))}
                </tbody> 
         </table>
         
       </div>
    </>

  )

}

export default Todo