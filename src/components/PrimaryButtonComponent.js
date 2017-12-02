import React,{Component} from 'react';

export default class PrimaryButton extends Component {
  render() {
    return (
      <button className='btn-info btn-lg'>
        {this.props.name}
      </button>
    );
  }
}
