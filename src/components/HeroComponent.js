import React,{ Component } from 'react';
import Helmet from "react-helmet";
import HeroToggle from './HeroToggleComponent'
import HeroAdTempalte1 from './HeroTemplate-1';
import HeroAdTempalte2 from './HeroTemplate-2';
import HeroAdTempalte3 from './HeroTemplate-3';
import homepageStyles from '../../homepage.css';

export default class HeroComponent extends Component {
  constructor(props) {
    super(props);
    const ads1 = this.props.mainContent[0].ProductLinkList.list;
    this.prevItem = this.prevItem.bind(this);
    this.nextItem = this.nextItem.bind(this);
    this.goToHistoryClick = this.goToHistoryClick.bind(this);
    this.state = {
      counter: 0,
      timeout: typeof window!=='undefined'? setTimeout(this.nextItem, this.props.timeoutTime):""
      };
  }
   prevItem() {
    var prevItem = this.state.counter - 1 < 0 ? this.props.mainContent[0].ProductLinkList.list.length - 1 : this.state.counter - 1;
    clearTimeout(this.state.timeout);
    this.setState({
      counter: prevItem,
      timeout: setTimeout(this.nextItem, this.props.timeoutTime)
    });
  }

  nextItem() {
    var nextItem = this.state.counter + 1 < this.props.mainContent[0].ProductLinkList.list.length ? this.state.counter + 1 : 0;
    clearTimeout(this.state.timeout);
    this.setState({
      counter: nextItem,
      timeout: setTimeout(this.nextItem, this.props.timeoutTime)
    });
  }
  
  
   

  goToHistoryClick( curIndex, index ) {
    let next = (curIndex < index);
    this.setState({
      counter: index,
      timeout: setTimeout(this.nextItem, this.props.timeoutTime)
    });
  
  }

  renderItem(item, current) {
    console.log(item,current);
    if(item.hasOwnProperty('ad1')){
    return (
      <HeroAdTempalte1 {...item} key={0} current={current}/>
    );
    }
    else if(item.hasOwnProperty('ad2')){
      return (
          <HeroAdTempalte2 {...item}  key={1} current={current} />
      );
    }
    else{
      return (
        <HeroAdTempalte3 {...item}  key={2}  current={current}/>
      );
    }
  }
  renderItems(items) {
    return items.map((item, index) => this.renderItem(item, (this.state.counter === index)));
  }

  render() {
    const ads = this.props.mainContent[0].ProductLinkList.list;
    const items = this.renderItems(ads);
    return (
    <div>
    <h3>HeroBlockComponent</h3>
    <Helmet
          title="Carousel-Banner"
        />
      <div className={homepageStyles.carousel}>
      <div className="carousel-prev" onClick={this.prevItem}></div>
        { items }
       <div className="carousel-next" onClick={this.nextItem}></div> 
       <HeroToggle
        current={this.state.counter}
        items={ads}
        changeSilde={this.goToHistoryClick}/>
      </div>
     </div>
    );
  }

}
