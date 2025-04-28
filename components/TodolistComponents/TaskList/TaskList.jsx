import styles from "./styles.module.css"

import Vazio from "@/components/Empty/empty";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({ filteredItems, dark, handleChangeChbk, handleEditItem, handleDeleteItem }) {
  return (
    <div className={styles.tarefasContainer}>
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <TaskItem
              key={index}
              item={item}
              index={index}
              dark={dark}
              handleChangeChbk={handleChangeChbk}
              handleEditItem={handleEditItem}
              handleDeleteItem={handleDeleteItem}
            />
          ))
        ) : (
          <Vazio />
        )}
      </ul>
    </div>
  );
}