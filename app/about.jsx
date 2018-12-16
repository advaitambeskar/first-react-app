import React from 'react';

class About extends {
    render(){
        const deviceStatus = DetectMobile.detectmob;
        var name;
        if(deviceStatus === true) {
            this.props.description = 'a.';
        }
        else{
            this.props.description = 'I AM ADVAIT AMBESKAR.';
        }
        return(
            <div className = "aboutHeader">
                <div className = "aboutRow">
                    <div>
                        
                    </div>
                    <div>
                        <h1 className = "aboutTitle"><u>About Me</u></h1>
                        <p className = "aboutPosition">{this.props.description}</p>
                        (essentially description can be different for mobile and the desktop user)

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        )
    }
}