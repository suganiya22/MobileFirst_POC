import React,{ Component } from 'react';
import PrimaryButton from './PrimaryButtonComponent';
import SecondaryButton from './SecondaryButtonComponent';
import homepageStyles from '../../homepage.css';
export default class HeroAdTempalte3 extends Component {
  render() {
    return (
      <div className={homepageStyles.carousel_item + (this.props.current ? 'current' : '')}>
        
        <div className={homepageStyles.carousel_heading}>
        <img src={this.props.ad3.Ad3ProductImage}/>
          <div className={homepageStyles.btnalign}>
           <PrimaryButton name={this.props.ad3.Ad3ProductLink1}/>
          <SecondaryButton name={this.props.ad3.Ad3ProductLink2}/>
          </div>
        </div>
      </div>
    );
  }
}
