const TodoItem = ({ id, title, complete }: { id: string, title: string, complete: boolean; }) => {
    return <li className="flex gap-1 items-center">
        <input type="checkbox" id={id} className="peer cursor-pointer " />
        <label htmlFor={id} className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500" >{title}</label>
    </li>;
};

export default TodoItem;