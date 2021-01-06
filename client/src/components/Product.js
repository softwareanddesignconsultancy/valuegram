import React from 'react'
import SearchResult from './OnlineStore'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OnlineStore from './OfflineStore';
import ImageGridList from './ImageGridList';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function Product() {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <ImageGridList />
            </Grid>
            <Grid item xs={12} md={6}>
      <Typography variant="h2" component="h2" gutterBottom>
        PS 5
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    
            </Grid>




            <Grid item xs={12} md={4}>
        <Paper className={classes.paper}>
          Online Sellers in Your Area
          <SearchResult />
          
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
        <Paper className={classes.paper}>
          Offline Sellers in Your Area
          <OnlineStore />
          </Paper>
        </Grid>
        </Grid>
    )
}
