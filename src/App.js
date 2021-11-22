import { useReducer } from 'react';
import './App.css';
import ACTIONS from './Components/Actions';
import Reducer from './Components/Reducer';
import DigitButton from './Components/DigitButton';
import OperationButton from './Components/OperationButton';
import formatResult from './Components/Formatter';

const App = () => {
  const [{ currentValue, previousValue, operation }, dispatch] = useReducer(
    Reducer,
    {}
  );
  return (
    <div className="container">
      <div className="result">
        <div className="previous-value">
          {formatResult(previousValue)} {operation}
        </div>
        <div className="current-value">{formatResult(currentValue)}</div>
      </div>
      <button
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
      >
        AC
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
        DEL
      </button>
      <OperationButton operation="/" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
      >
        =
      </button>
    </div>
  );
};

export default App;
