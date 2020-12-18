import React, { PureComponent } from 'react';
import SearchBar from './SearchBar';

class Header extends PureComponent {
    returnMain = () =>{
        this.props.returnMain();
        this.props.clear();
    }
    render() {
        return (
            <header className="VT-header">
                <div className="haederScope">
                    <button className="sideBar-btn"><i className="fas fa-bars"></i></button>
                    <div className="headerLogo" onClick={this.returnMain}>
                        <i className="fas fa-play-circle"></i>
                        <span className="headerLogo-name">TubePlayer</span>
                    </div>   
                </div>
                <SearchBar onSearch={this.props.onSearch} clear={this.props.clear} />
                <div>
                    {/* 공백 */}
                </div>
            </header>
        );
    }
}

export default Header;