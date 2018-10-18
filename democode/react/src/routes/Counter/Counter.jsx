import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './Counter.less';

@connect(
  ({ count }) => ({ count }),
  dispatch => (
    {
      add: () => dispatch({ type: 'ADD' }),
      div: () => dispatch({ type: 'DIV' }),
    }
  ),
)
class Counter extends Component {
  render() {
    const {
      count: {
        num,
      },
      add,
      div,
    } = this.props;
    return (
      <div className={styles.contaienr}>
        <button type="button" onClick={add}>+</button>
        <button type="button" onClick={div}>-</button>
        <div>{num}</div>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.any,
};

Counter.defaultProps = {
  count: {},
};
export default Counter;

// https://www.cnblogs.com/liuyongjia/archive/2018/10/17/9807525.html
