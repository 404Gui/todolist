import { Button, Tooltip, FormControl  } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';

export default function ThemeToggle({ dark, handleChangeDark }) {
  return (
    <FormControl sx={{ width: 50, height: '40px' }}>
      <Button
        onClick={handleChangeDark}
        sx={{
          width: '100%',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid',
          borderColor: 'rgba(0, 0, 0, 0.23)',
          borderRadius: '4px',
          backgroundColor: '#6C63FF',
          color: '#F7F7F7' 
        }}
      >
        <Tooltip title={dark ? "Altere para o modo claro" : "Altere para o modo escuro"}>
          {dark ? (<Brightness4OutlinedIcon />) : (<DarkModeOutlinedIcon />) }                
        </Tooltip>
      </Button>
    </FormControl>

  );
}