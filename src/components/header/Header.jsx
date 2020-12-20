import React, { PureComponent } from 'react';
import SearchBar from './SearchBar';
import styles from './Header.module.css'

class Header extends PureComponent {
    returnMain = () =>{
        this.props.returnMain();
        this.props.clear();
    }
    render() {
        return (
            <header className={styles.header}>
                <div className={styles.scope}>
                    {/* <button className={styles.btn}><i className="fas fa-bars"></i></button> */}
                    <div className={styles.logo} onClick={this.returnMain}>
                        <i className={`${styles.logoIcon} fas fa-play-circle`}></i>
                        <span className={styles.logoName}>TubePlayer</span>
                    </div>   
                </div>
                <SearchBar onSearch={this.props.onSearch} clear={this.props.clear} />
                <div className={styles.space}></div>
            </header>
        );
    }
}

export default Header;