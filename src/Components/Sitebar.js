import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "@mui/material";
/**
 * Элемент сайдбара
 */
class SiteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: "",
    };
  }

  render() {
    return (
      <MenuItem>
        <ListItemText>{this.props.title}</ListItemText>
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
      items: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/category")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          items: result,
        });
      });
  }

  render() {
    const { items } = this.state;
    const sidebarList = items.map((item) => (
      <Link href={"/catalog/" + item.id}>
        <SiteItem title={item.title} />{" "}
      </Link>
    ));

    return (
      <Paper sx={{ width: 320, maxWidth: "100%", mt: 4 }}>
        <MenuList>{sidebarList}</MenuList>
      </Paper>
    );
  }
}

export default Sitebar;
