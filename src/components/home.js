import React, {Component} from 'react';
import Button from './button'
import '../myCss/home.css'


class Home extends Component {

    render() {
      var arryFeb = [1,2,3,5,8,13,0];

      return (
        <div className='home'>
          <h1>{this.props.activeUser}</h1>
          <Button
            onClick={(e)=>{e.preventDefault(); this.props.onChangeUser()}}
            buttonDis={'Change User'}
          />
          <h1>Vote!</h1>
            {arryFeb.map((n)=>
              <Button
                onClick={(e)=>
                  {e.preventDefault();
                  this.props.onChoseNum(n);
                  this.props.onChangePage('rePage')}
                }
                buttonDis={(n===0)?'Abstain':n}
                key={n.toString()}
              />
            )}
        </div>
      );
    }
}

export default Home;
