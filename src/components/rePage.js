import React, {Component} from 'react';
import Button from './button'
import '../myCss/rePage.css'


class RePage extends Component {

    render() {
      return (
        <div className='rePage'>
          <h1>Vote! {this.props.active}</h1>
          <Button
            onClick={(e)=>{e.preventDefault(); this.props.onChoseNum('home')}}
            buttonDis={'Reset vote'}
          />
        </div>

      );
    }
}

export default RePage;
