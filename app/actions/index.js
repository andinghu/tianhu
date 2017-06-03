import ActionTypes from '../constants/ActionTypes';

export function appendBox({ colIdx }) {
  return {
    type: ActionTypes.APPEND_BOX,
    colIdx,
  }
}

export function measureWindow({ width, height }) {
  return {
    type: ActionTypes.MEASURE_WINDOW,
    width,
    height,
  };
}

export function setTopScrollPos({ topScrollPos }) {
  return {
    type: ActionTypes.SET_TOP_SCROLL_POS,
    topScrollPos,
  }
}

export function updatePlaceholderTop({ colIdx, top }) {
  return {
    type: ActionTypes.UPDATE_PLACEHOLDER_TOP,
    colIdx,
    top,
  }
}