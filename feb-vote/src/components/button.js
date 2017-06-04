import React, {Component} from 'react';

class Button extends Component {

    render() {
      return (
        <div>
          <button type="button" onClick = {this.props.onClick} >  {this.props.disNumber}</button>
        </div>
      );
    }
}

export default Button;
