import { AppBar,  Toolbar, Typography} from '@mui/material';
import React from 'react';


const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h4"color="inherit">
          DNアシスタント
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;