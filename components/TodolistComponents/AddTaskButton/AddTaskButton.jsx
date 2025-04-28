import styles from "./styles.module.css"

import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function AddTaskButton({ handleOpen }) {
  return (
    <div className={styles.addButton}>            
      <AddCircleIcon fontSize="large" onClick={handleOpen} variant="contained">Adicionar Item</AddCircleIcon>
    </div>
  );
}