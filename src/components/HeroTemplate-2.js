import React,{ Component } from 'react';
import homepageStyles from '../../homepage.css';
export default class HeroAdTempalte2 extends Component {
  render() {
    return (
      <div className={homepageStyles.carousel_item  + (this.props.current ? 'current' : '')}>
       <div className={homepageStyles.carousel_heading}>
        <img src={this.props.ad2.Ad2ProductImage} />
          <h1>{this.props.ad2.Ad2Headline1}</h1>
          <a className={homepageStyles.aTag} href="#">
          <h3>{this.props.ad2.Ad2ProductLink1}</h3>
          </a>
        </div>
       </div>
    );
  }
}
