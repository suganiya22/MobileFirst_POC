import React,{Component} from 'react';

export default class SecondaryButton extends Component {
  render() {
    return (
      <button className='btn-default btn-lg'>
        {this.props.name}
      </button>
    );
  }
}
