import React from 'react';

class Header extends React.Component{
    render(){
        return (
            <div className = 'header'>
            <div className = 'row'>
                <div>
                </div>
                <div className = 'border'>
                    <button className = 'button-size button-style'>ABOUT</button>
                    <button className = 'button-size button-style'>BLOG</button>
                </div>
                <div className = 'border logo'>
                        <button className = 'logo-button-size logo-button-style'>Advait Ambeskar</button>
                </div>
                <div className = 'border'>
                    <button  className = 'button-size button-style'>PORTFOLIO</button>
                    <button  className = 'button-size button-style'>RESUME</button>
                </div>
            </div>
        </div>
        )
    }
}

export default Header;