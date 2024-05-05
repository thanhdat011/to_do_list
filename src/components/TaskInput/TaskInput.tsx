import { useState } from 'react'
import { Todo } from '../../@types/todo.type'
import styles from './taskInput.module.scss'
interface TaskInputProps {
  addTodo: (name: string) => void
  editTodo: (name: string) => void
  finishedEditTodo: () => void
  currentTodo: Todo | null
}
export default function TaskInput(props: TaskInputProps) {
  const { addTodo, currentTodo, editTodo, finishedEditTodo } = props
  const [name, setName] = useState<string>('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (currentTodo) {
      finishedEditTodo()
      if (name) setName('')
    } else {
      addTodo(name)
      setName('')
    }
  }
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (currentTodo) {
      editTodo(value)
    } else {
      setName(value)
    }
  }

  return (
    <div>
      <h1 className={styles.title}>To do list typescript</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input placeholder='Caption goes here' value={currentTodo ? currentTodo.name : name} onChange={onChangeInput} />
        <button type='submit'>{currentTodo ? '✔️' : '➕'}</button>
      </form>
    </div>
  )
}
