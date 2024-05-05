import { Todo } from '../../@types/todo.type'
import styles from './taskList.module.scss'
interface TaskListProps {
  doneTaskList?: boolean
  todos: Todo[]
  handleDoneTodo: (id: string, done: boolean) => void
  startEditTodo: (id: string) => void
}
export default function TaskList(props: TaskListProps) {
  const { doneTaskList, todos, handleDoneTodo, startEditTodo } = props

  return (
    <div>
      <h2 className={styles.title}>{doneTaskList ? 'Hoàn thành' : 'Không hoàn thành'}</h2>
      <div className={styles.tasks}>
        {todos.map((todo) => (
          <div className={styles.taskItem} key={todo.id}>
            <input
              type='checkbox'
              className={styles.taskCheckbox}
              checked={todo.done}
              onChange={(event) => handleDoneTodo(todo.id, event.target.checked)}
            />
            <div className={`${styles.taskName} ${todo.done ? styles.taskNameDone : ''}`}>{todo.name}</div>
            <div className={styles.taskAction}>
              <button className={styles.taskBtn} onClick={() => startEditTodo(todo.id)}>
                🖊️
              </button>
              <button className={styles.taskBtn}>🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
