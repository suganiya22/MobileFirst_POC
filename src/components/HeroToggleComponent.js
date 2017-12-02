import React,{Component} from 'react';
import homepageStyles from '../../homepage.css';
export default class HeroToggle extends Component {
  constructor(props) {
    super(props);
   }

  render() {
    let current = this.props.current;
    let toggleButtons = this.props.items.map( (el, index) => {
      return (
        <li
        className={index == current ? homepageStyles.dots : homepageStyles.dots_active}
        key={index}
        onClick={ () => this.props.changeSilde(current, index) }>

        </li>
      )
    });

    return (
      <ul className={homepageStyles.carousal_indicator_wrapper}>{toggleButtons}</ul>
    )
  }
}
