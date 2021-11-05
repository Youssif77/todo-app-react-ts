import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <div className={classes.item}>
      <li>{props.text}</li>
      <button type="button" onClick={props.onRemoveTodo}>
        X
      </button>
    </div>
  );
};

export default TodoItem;
