import React from 'react'
import SearchProductNearBy from '../components/SearchProductNearBy'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchResult from '../components/OnlineStore';
import Iframe from 'react-iframe';
import Product from '../components/Product';
import { useHistory } from "react-router-dom";


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

export default function Home(props) {
  const history = useHistory();

    const classes = useStyles();
    const [product, setProduct] = React.useState([]);
    const navigateTo = () => history.push('/product');

    return (
        <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><SearchProductNearBy setProduct={setProduct} />
          {product?.id ? (<Grid item xs={12}>{product.id} {product.name}</Grid>):null}
          </Paper>
        </Grid>
        <Grid item xs={12} md={12}>
        <Product />
        </Grid>
        </Grid> 
    )
}
