import Link from "next/link";
import TodoItem from "./components/TodoItem";
import getTodos from "./utils/getTodos";
import toggleTodo from "./utils/toggleTodo";

const Home = async () => {
    const todos = await getTodos();

    return (
        <>
            <header className="flex justify-between mb-4 items-center">
                <h1>Todos</h1>
                <Link
                    className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
                    href="/new"
                >
                    New
                </Link>
            </header>
            <ul className="pl-4">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
                ))}
            </ul>
        </>
    );
};
export default Home;
