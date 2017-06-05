import React, {Component} from 'react';
import '../myCss/button.css'

class Button extends Component {

    render() {
      return (
          <button type="button" className='button'
            onClick = {this.props.onClick} >
            {this.props.buttonDis}
          </button>
      );
    }
}

export default Button;
