import React, { useState,useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector, useDispatch } from "react-redux";
import { searchProduct } from '../redux';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function SearchProductNearBy(props) {
  const dispatch = useDispatch();
  
  const product =  useSelector((state) => state.searchProuduct);

  const [open, setOpen] = useState(false);
  
  const [options, setOptions] = useState([]);

  const loading = open && options.length === 0;


  useEffect(() => {
    dispatch(searchProduct());
  }, []);



  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    sleep(1e3);

    if (active) {
          setOptions(product.searchProduct);
        }
 
    return () => {
      active = false;
    };

  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (<div>
    <Autocomplete
      id="asynchronous-demo"
      
      open={open}
      onChange={(event, value) => 
        props.setProduct(value)
      }
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => 
        option.name === value.name
      }
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Product"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="secondary" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />

    
    </div>
  );
}