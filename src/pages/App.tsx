import React from 'react';
import Example from './example/Example';
import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { Route, Routes } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
}));

function App() {
  const classes = useStyles()

  return (
    <Box className={classes.root} display="flex" flexDirection="column">
      <Routes>
        <Route path="/" element={<Example />} />
      </Routes>
    </Box>
  );
}

export default App;
