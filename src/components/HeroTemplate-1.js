import React,{ Component } from 'react';
import PrimaryButton from './PrimaryButtonComponent';
import SecondaryButton from './SecondaryButtonComponent';
import homepageStyles from '../../homepage.css';

export default class HeroAdTempalte1 extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className={homepageStyles.carousel_item + (this.props.current ? 'current' : '')}>
        <div className={homepageStyles.carousel_heading}>
          <img src={this.props.ad1.Ad1ProductImage} />
          <h1 >{this.props.ad1.Ad1Headline1}</h1>
          <h2 >{this.props.ad1.Ad1Headline2}</h2>
          <a className={homepageStyles.aTag} href="#"><h3>{this.props.ad1.Ad1ProductLink1}</h3></a>
          <div className={homepageStyles.btnalign}>
          <PrimaryButton name={this.props.ad1.Ad1ProductLink2}/>
          <SecondaryButton name={this.props.ad1.Ad1ProductLink3}/>
          </div>
        </div>
      </div>
    );
  }
}
