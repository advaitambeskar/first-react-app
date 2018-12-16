import React from 'react';

class Header extends React.Component{
    render(){
        function handleClick(){
            e = this.handleClick(e);
        }
        return (
            <div className = 'header'>
            <div className = 'row'>
                <div>
                </div>
                <div className = 'border'>
                    <a className = 'button-size button-style border' href = "#" onclick = {handleClick}>ABOUT</a>
                    <a className = 'button-size button-style border' href = 'http://blog.advaitambeskar.com/'>BLOG</a>
                </div>
                <div className = 'border logo'>
                        <a className = 'logo-button-size logo-button-style' onclick = {handleClick}>Advait Ambeskar</a>
                </div>
                <div className = 'border'>
                    <a  className = 'button-size button-style border' href = "#" onclick = {handleClick}>PORTFOLIO</a>
                    <a  className = 'button-size button-style border' href = "#" onclick = {handleClick}>RESUME</a>
                </div>
            </div>
        </div>
        )
    }
}

export default Header;