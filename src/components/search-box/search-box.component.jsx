import React from "react";

export const SearchBox = (props) => (
    <input type='search' placeholder='search for monsters'
           onChange={
               e => {
                   this.setState({props.searchField: e.target.value});
               }
           }
    />
)