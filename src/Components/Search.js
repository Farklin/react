
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        fetch('https://teisbubble.ru/api/products')
        .then(res => res.json())
        .then(
            (result ) => {
                this.setState({
                        products: result, 
                    }); 
                console.log(result); 
            }, 
        )
    }

    render(){
        const {products} = this.state; 
        return (
            <Stack spacing={2} sx={{ width: 300 }}>
    
              <Autocomplete
                size="small"
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={products.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Поиск товаров"
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                    }}
                  />
                )}
              />
            </Stack>
          );
    }
}


export default Search;
