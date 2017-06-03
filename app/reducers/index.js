import Immutable from 'immutable';

import ActionTypes from '../constants/ActionTypes';
import { getInitColumns, getRandomPin } from '../utils/pinUtils';

export const columnNumSelector = state => state.get('columnNum');
export const columnsSelector = state => state.get('columns');
export const columnByIdSelector = (state, props) => columnsSelector(state).get(props.colIdx);
export const waterfallHeightSelector = state => state.get('waterfallHeight');
export const routesSelector = state => Immutable.List(['compass', 'message', 'profile']);
export const topScrollPosSelector = state => state.get('topScrollPos');

const pins = Array(20).fill().map(() => getRandomPin());
const columnNum = 5;
const columns = getInitColumns(pins, columnNum);

const defaultState = Immutable.Map({
  columnNum,
  columns,
  pins,
  tops: Immutable.List(new Array(columnNum)),
  topScrollPos: 0,
  height: 0,
  waterfallHeight: 800,
  width: 0,
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.APPEND_BOX: {
      return state.updateIn(
        ['columns', action.colIdx],
        pins => pins.push(getRandomPin()));
    }

    case ActionTypes.MEASURE_WINDOW: {
      return state.set('height', action.height)
        .set('width', action.width);
    }

    case ActionTypes.SET_TOP_SCROLL_POS: {
      return state.set('topScrollPos', action.topScrollPos);
    }

    case ActionTypes.UPDATE_PLACEHOLDER_TOP: {
      return state.updateIn(
        ['tops', action.colIdx],
        top => action.top,
      );
    }

    default:
      return state;
  }
}