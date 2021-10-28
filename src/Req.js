import React, { setState } from "react";

class List extends React.Component {
    render() {
        return <h1>Привет, {this.props.name}</h1>;
    }
}

export default List;