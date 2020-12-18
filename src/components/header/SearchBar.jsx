import React, { Component } from 'react';

class SearchBar extends Component {
    inputRef = React.createRef();

    handleSearch = (e) =>{
        if(e.type === 'click' || e.key === 'Enter'){
            e.preventDefault();
            this.props.onSearch(this.inputRef.current.value);
            this.props.clear();
        }   
    }

    render() {
        return (
            <div className="searchBar">
                    <input ref={this.inputRef} className="searchBar-input" type="text" placeholder="검색" onKeyPress={this.handleSearch} ></input>
                    <button className="searchBar-btn" onClick={this.handleSearch}><i className="fas fa-search"></i></button>
            </div>  
        );
    }
}

export default SearchBar;