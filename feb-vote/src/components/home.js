import React, {Component} from 'react';
import Button from './button'

class Home extends Component {

    render() {
      var arryFeb = [1,2,3,5,8,13];
      return (
        <div>
          <div>
            {arryFeb.map((n)=>
              <Button
                onClick={(e)=>{e.preventDefault(); this.props.onChoseNum(n)}}
                disNumber={n}
                key={n.toString()}
              />
            )}
          </div>
          <Button
            onClick={(e)=>{e.preventDefault(); this.props.onChoseNum(0)}}
            disNumber={'Abstain'}
          />
        </div>
      );
    }
}

export default Home;
