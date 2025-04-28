import styles from "./styles.module.css"

import { Checkbox } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskItem({ item, index, dark, handleChangeChbk, handleEditItem, handleDeleteItem }) {
  return (
    <li key={index} className={styles.checkboxContainer}>
      <Checkbox
        className={styles.checkbox}
        checked={item.checked}
        onChange={() => handleChangeChbk(index)}                      
      />
      <p className={item.checked ? styles.riscado : ''}>{item.text}</p>
      <div className={styles.buttonsEditDelete}>
        <button onClick={() => handleEditItem(index)}><EditIcon /></button>
        <button onClick={() => handleDeleteItem(index)}><DeleteIcon /></button>
      </div>
      <br/>                    
    </li>
  );
}