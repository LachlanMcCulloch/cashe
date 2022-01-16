import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center"
  },
  paper: {
    padding: "2em",
    maxWidth: "60em"
  }
}));

const Example = () => {
  const classes = useStyles()
  return (
    <>
      <Typography className={classes.title} variant='h4' style={{ margin: "1em" }}>
        Hello World
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={9}>
          <Paper className={classes.paper}>
            <Typography variant='h5'>
              Paper Title
            </Typography>
          </Paper>
        </Grid>
      </Grid>

    </>

  )
}

export default Example
