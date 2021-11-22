const Evaluate = ({ previousValue, currentValue, operation }) => {
  const prev = parseFloat(previousValue);
  const current = parseFloat(currentValue);
  if (isNaN(prev) || isNaN(current)) return '';
  let calculate = '';
  switch (operation) {
    case '+':
      calculate = prev + current;
      break;
    case '-':
      calculate = prev - current;
      break;
    case '*':
      calculate = prev * current;
      break;
    case '/':
      calculate = prev / current;
      break;
    default:
      calculate = '';
      break;
  }
  return calculate.toString();
};

export default Evaluate;
