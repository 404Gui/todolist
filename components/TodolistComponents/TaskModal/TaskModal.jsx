import styles from "./styles.module.css"

import { Modal, Box, Button, TextField } from '@mui/material';

export default function TaskModal({ 
  open, 
  dark, 
  editItemIndex, 
  inputValue, 
  setInputValue, 
  handleClose, 
  handleAddItem, 
  handleSaveItem 
}) {
  return (
    <Modal          
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box 
        className={styles.modalBox}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: dark ? '#1E1E1E' : 'background.paper',
          color: dark ? '#F7F7F7' : 'black',
          border: dark ? '1px solid #F7F7F7' : '',
          borderRadius: '1rem',
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2 className={`${styles.modalTitle} ${dark ? styles.modalTitleDarkTheme : ''}`} id="modal-title">
          {editItemIndex !== null ? 'Salvar' : "Adicionar tarefa"}</h2>
        
        <TextField
          fullWidth
          label="Digite algo.."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: dark ? '#F7F7F7' : '#6C63FF',
              },
              '&:hover fieldset': {
                borderColor: dark ? '#F7F7F7' : '#6C63FF', 
              },
              '&.Mui-focused fieldset': {
                borderColor: dark ? '#F7F7F7' : '#6C63FF', 
              },
            },
            '& .MuiInputLabel-root': {
              color: dark ? '#F7F7F7' : 'black', 
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: dark ? '#F7F7F7' : 'black',
            },
            '& .MuiInputBase-input': {
              color: dark ? '#F7F7F7' : 'black',
            },
          }}
        />

        <section className={styles.closeAddButtons}>
          {editItemIndex !== null ?
            (<Button 
              className={styles.buttonSaveEditModal}
              onClick={handleSaveItem}
              variant="contained"
              sx={{
                mt: 2,
                color: '#F7F7F7',
                bgcolor: '#6C63FF'
              }}
            >
              Salvar
            </Button>): (<Button
              className={styles.buttonSaveEditModal}
              onClick={handleAddItem}
              variant="contained"
              sx={{
                mt: 2,
                color: '#F7F7F7',
                bgcolor: '#6C63FF'
              }}
            >
              Adicionar
            </Button>)}              

          <Button
            className={styles.buttonCloseModal}
            onClick={handleClose}
            variant="contained"
            sx={{
              mt: 2,
              color: '#6C63FF',
              bgcolor: 'transparent'                 
            }}
          >
            Fechar
          </Button>
        </section>
      </Box>
    </Modal>
  );
}