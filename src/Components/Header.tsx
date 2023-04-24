import todoLogo from '../assets/Logo.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={todoLogo} alt='ToDo Logo' />

        <form className={styles.newTask}>
          <input type='text' placeholder='Adicione uma nova tarefa' />
          <button>Criar</button>
        </form>
      </header>
    </>
  )
}
