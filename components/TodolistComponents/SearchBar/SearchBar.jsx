import styles from "./styles.module.css"

import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ dark, searchTerm, setSearchTerm }) {
  return (
    <TextField
      className={styles.TextField}
      variant="outlined"
      type="search"
      label="Pesquisar tarefa"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: dark ? '#F7F7F7' : 'black' }} />
          </InputAdornment>
        ),
      }}
      sx={{
        height: '40px',
        '& .MuiOutlinedInput-root': {
          height: '40px',
          width: '400px',
          '@media (max-width: 600px)': {
            width: '300px',
            '@media (max-width: 500px)': {
              width: '170px',
            }
          },
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
  );
}