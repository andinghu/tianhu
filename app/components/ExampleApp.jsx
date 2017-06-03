import classNames from 'classnames';
import { connect } from 'react-redux';
import Measure from 'react-measure';
import React from 'react';

import { measureWindow } from '../actions';
import SearchNavBar from './SearchNavBar';
import WaterFall from './WaterFall';
import styles from './ExampleApp.scss';


export class ExampleApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Measure
        onMeasure={(dimensions) => {
          this.props.measureWindow(dimensions)
        }}
      >
        <div
          className={classNames('exampleApp', styles.exampleApp)}
        >
          <SearchNavBar />
          <WaterFall />
        </div>
      </Measure>
    )
  }
}

export default connect(null, {
  measureWindow,
})(ExampleApp);
