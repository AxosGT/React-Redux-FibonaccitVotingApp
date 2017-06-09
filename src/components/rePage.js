import React, {Component} from 'react';
import Button from './button'
import '../myCss/rePage.css'


class RePage extends Component {

    render() {
      console.log();
      return (
        <div className='rePage'>
          <h1>Vote! {this.props.activeVote}</h1>
          <Button
            onClick={(e)=>{e.preventDefault(); this.props.onChangePage('home')}}
            buttonDis={'Reset vote'}
          />
        </div>
      );
    }
}

export default RePage;
