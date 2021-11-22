import Evaluate from './Evaluate';
import ACTIONS from './Actions';

function Reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentValue: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === '0' && state.currentValue === '0') {
        return state;
      }
      return {
        ...state,
        currentValue: `${state.currentValue || ''}${payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentValue == null && state.previousValue == null) {
        return state;
      }
      if (state.currentValue == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }
      if (state.previousValue == null)
        return {
          ...state,
          operation: payload.operation,
          previousValue: state.currentValue,
          currentValue: null,
        };
      return {
        ...state,
        previousValue: Evaluate(state),
        operation: payload.operation,
        currentValue: null,
      };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.EVALUATE:
      if (
        state.previousValue == null ||
        state.currentValue == null ||
        state.operation == null
      ) {
        return state;
      }
      return {
        ...state,
        previousValue: null,
        overwrite: true,
        operation: null,
        currentValue: Evaluate(state),
      };
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentValue: null,
        };
      }
      if (state.currentValue == null) return state;
      if (state.currentValue.length === 1) {
        return {
          ...state,
          currentValue: null,
        };
      }
      return {
        ...state,
        currentValue: state.currentValue.slice(0, -1),
      };
    default:
      return state;
  }
}

export default Reducer;
