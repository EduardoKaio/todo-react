import { useState } from 'react'

function TodoForm({addTodo}) {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (!value || !category) return;
        console.log(value, category)

        // Adicionar a lista e limpar os campos 
        addTodo(value,category)

        setValue("")
        setCategory("")
    }

    return (
        <div className="todoform">
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite o título" 
                value={value}
                onChange={(e) => setValue(e.target.value)}/>
                <select value={category} 
                onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm