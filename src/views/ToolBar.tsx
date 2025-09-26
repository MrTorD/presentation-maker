import styles from "./ToolBar.module.css";
import type { Presentation } from "../stock/types";

type ToolBarProps = {
  presentation: Presentation;
};

function ToolBar(props: ToolBarProps) {
  const p = props.presentation;

  return (
    <div className={styles.toolbar}>
      <button
        className={styles.button}
        onClick={() => console.log('Вы нажали кнопку "Редактировать"')}
      >
        Редактировать
      </button>

      <button
        className={styles.button}
        onClick={() => console.log('Вы нажали кнопку "Копировать"')}
      >
        Копировать
      </button>

      <button
        className={styles.button}
        onClick={() => console.log('Вы нажали кнопку "Вставить"')}
      >
        Вставить
      </button>
      <label className={styles.label}>
        Изменить название презентации
        <input
          className={styles.input}
          id="input"
          defaultValue={p.name}
          type="text"
          name="PresentationName"
        ></input>
        <button
          onClick={() =>
            console.log(
              "Новое название презентации: " +
                (document.getElementById("input") as HTMLInputElement).value,
            )
          }
        >
          Подтвердить
        </button>
      </label>
    </div>
  );
}

export default ToolBar;
