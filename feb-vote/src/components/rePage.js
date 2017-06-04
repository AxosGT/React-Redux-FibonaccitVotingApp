import React, {Component} from 'react';
import Button from './button'

class RePage extends Component {

    render() {
      return (
        <div>
          <h1>Vote! {this.props.active}</h1>
          <Button
            onClick={(e)=>{e.preventDefault(); this.props.onChoseNum('home')}}
            disNumber={'Reset vote'}
          />
        </div>

      );
    }
}

export default RePage;
