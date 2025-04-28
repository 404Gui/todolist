import styles from "./styles.module.css"

import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function FilterSelect({ dark, valueFilter, handleChangeFilter }) {
  return (
    <FormControl sx={{ width: 100, height: '40px', backgroundColor: '#6C63FF', borderRadius: '4px' }}>
      <InputLabel className={styles.input} id="filter-select-label">
        Options
      </InputLabel>
      <Select
        labelId="filter-select-label"
        id="filter-select"
        value={valueFilter}
        onChange={handleChangeFilter}
        sx={{
          height: '40px',
          '& .MuiOutlinedInput-root': {
            height: '40px',
            color: '#F7F7F7'
          },
        }}
      >
        <MenuItem value={10}>Todos</MenuItem>
        <MenuItem value={20}>Completos</MenuItem>
        <MenuItem value={30}>Incompletos</MenuItem>
      </Select>
    </FormControl>
  );
}