import React, {Component} from 'react';
import Button from './button'

class Home extends Component {

    render() {
      var arryFeb = [0,1,2,3,5,8,13];
      return (
        <div>
            {arryFeb.map((n)=>
              <Button
                onClick={(e)=>{e.preventDefault(); this.props.onChoseNum(n)}}
                buttonDis={(n===0)?'Abstain':n}
                key={n.toString()}
              />
            )}
        </div>
      );
    }
}

export default Home;
