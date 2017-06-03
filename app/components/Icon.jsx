import React from 'react';

export default class Icon extends React.Component {
  static defaultProps = {
    height: 28,
    width: 28,
  };

  _mergeStyle(...args) {
    return Object.assign({}, ...args);
  }

  render() {
    return (
      <svg
        dangerouslySetInnerHTML={{
          __html: require(`../icons/${this.props.icon}.svg`),
        }}
        {...this.props}
    />);
  }
}

