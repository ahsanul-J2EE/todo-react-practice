import { Task } from "../Task";
import styles from "./tasks.module.css";

export function Tasks() {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Created tasks</p>
          <span>3</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed tasks</p>
          <span>3 of 3</span>
        </div>
      </header>

      <div className={styles.list}>
        <Task />
        <Task />
        <Task />
      </div>
    </section>
  );
}
