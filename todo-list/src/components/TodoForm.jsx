import { useState } from "react";

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //Caso não exista dados preenchidos pelo usuario
        if (!value || !category) return;

        //Set vazios para quando enviar o formulário os campos serem limpos
        addTodo(value, category);
        setValue("");
        setCategory("");
    };
    return (
        <div className="todo-form">
            <h2>Criar Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Digite o Titulo"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Selecione uma Categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit">Criar Tarefa</button>
            </form>
        </div>
    );
}

export default TodoForm;
