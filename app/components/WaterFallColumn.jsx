import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import React from 'react';
import ReactDOM from 'react-dom';

import { appendBox } from '../actions';
import { columnByIdSelector, topScrollPosSelector } from '../reducers';
import PlaceHolder from './PlaceHolder';
import Pin from './Pin';
import styles from './WaterFallColumn.scss';

export class WaterFallColumn extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
    this._setPlaceholderRef = this._setPlaceholderRef.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.topScrollPos !== nextProps.topScrollPos) {
      this.onWaterFallScroll();
    }
  }

  onWaterFallScroll() {
    const { colIdx } = this.props;
    const waterFallDOM = ReactDOM.findDOMNode(this);
    const waterFallBottom = waterFallDOM.scrollTop + waterFallDOM.offsetHeight;
    const placeholder = ReactDOM.findDOMNode(this.placeholderRef);
    const placeholderTop = placeholder.getBoundingClientRect().top;
    if (Number(placeholderTop) < waterFallBottom) {
      this.props.appendBox({ colIdx });
    }
  }

  handleScroll() {
    const { colIdx } = this.props;
    this.props.onScroll(colIdx);
  }

  render() {
    const {
      column,
    } = this.props;

    return (
      <div
        className={styles.column}
      >
        {column.map((box, i) => (
          <Pin
            box={box}
            key={i}
          />
        ))}
        <PlaceHolder
          ref={this._setPlaceholderRef}
        />
      </div>
    );
  }

  _setPlaceholderRef(ref) {
    this.placeholderRef = ref;
  }
}

const selector = createStructuredSelector({
  column: columnByIdSelector,
  topScrollPos: topScrollPosSelector,
});

export default connect(selector, {
  appendBox,
})(WaterFallColumn);
