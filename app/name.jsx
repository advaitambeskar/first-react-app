import React from 'react';
class DetectMobile extends React.Component{
    detectmob() { 
        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight;
        if (w <= 580){
            return  true;
        }
        else{
            return false;
        }
    }
}
//
// '-moz-linear-gradient(rgba(0, 0, 0, 0.295),  #000000b7);'
//
class Name extends DetectMobile{
    render(){
        const deviceStatus = DetectMobile.detectmob;
        var name;
        if(deviceStatus === true) {
            this.props.name = 'a.';
        }
        else{
            this.props.name = 'I AM ADVAIT AMBESKAR.';
        }
        var style = '';
        return(
            <div className = "firstName">
                <p className = "position">{this.props.name}</p>
            </div>
        )
    }
}

export default Name;