
import React, { useState } from "react";
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

/**
 * Элемент сайдбара
 */
class SiteItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            url: "", 
        }
    }

    render() {
        return(
            <MenuItem>
                <ListItemText>{this.props.title}</ListItemText>
                <Typography variant="body2" color="text.secondary">
                ⌘
                </Typography>
            </MenuItem>
        ); 
    }
}   



/**
 * Класс сайдар 
 */
class Sitebar extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            items: [
                {title: "Пункт 1" , url: "123"}, 
                {title: "Пункт 2" , url: "123"},
                {title: "Пункт 3" , url: "123"},
                {title: "Пункт 4" , url: "123"},
                {title: "Пункт 5" , url: "123"},
                {title: "Пункт 6" , url: "123"},
            ] 
        }
    }

    render(){
        const {items} = this.state; 
        const sidebarList = items.map(item => (
            <SiteItem title={item.title} /> 
        ));
        
        return( <Paper sx={{ width: 320, maxWidth: '100%', mt:4 }}>
                <MenuList>
                    {sidebarList}
                </MenuList>
            </Paper>
                
        ); 
    }
}



export default Sitebar;
