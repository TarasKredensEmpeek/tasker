import React from 'react';

export default class TitleUncorrect extends React.Component{

    render(){
        return(
            <div className="alert-wrap">
                <div id="alert-title-uncorrect">
                    <span className="close-alert"  onClick={this.props.onCloseAlert} title="Close"> × </span>
                    <span className="warning-mess">WARNING!</span>
                    <h4>Please check the value of the 'Title' field. This field should not be empty!</h4>
                    <button className="confirm-button" id="confirm-btn" title="Close" onClick={this.props.onConfirmAlert}>OK</button>
                </div>
            </div>

        );
    }
}