import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import React from 'react';
import ReactDOM from 'react-dom';

import { setTopScrollPos } from '../actions';
import { columnNumSelector, topScrollPosSelector, waterfallHeightSelector } from '../reducers';
import styles from './WaterFall.scss';
import WaterFallColumn from './WaterFallColumn';

export class WaterFall extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.attachScrollListener();
  }

  componentWillUnmount() {
    this.detachScrollListener();
  }

  componentDidUpdate() {
    this.attachScrollListener();
  }

  attachScrollListener() {
    const columnDOM =  ReactDOM.findDOMNode(this);
    columnDOM.addEventListener('scroll', this.handleScroll);
  }

  detachScrollListener() {
    const columnDOM =  ReactDOM.findDOMNode(this);
    columnDOM.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const waterFallDOM = ReactDOM.findDOMNode(this);
    const topScrollPos = waterFallDOM.scrollTop;

    this.props.setTopScrollPos({ topScrollPos });
  }

  render() {
    const { columnNum } = this.props;

    return (
      <div
        className={styles.waterfall}
      >
        {Array(columnNum).fill().map((value, i) => (<WaterFallColumn
            key={i}
            colIdx={i}
            onScroll={this.handleScroll}
          />)
        )}
      </div>
    );
  }
}

const selector = createStructuredSelector({
  columnNum: columnNumSelector,
  topScrollPos: topScrollPosSelector,
  waterfallHeight: waterfallHeightSelector,
});

export default connect(selector, {
  setTopScrollPos,
})(WaterFall);
