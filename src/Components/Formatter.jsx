
const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
    MaximumFractionDigits: 0,
  });
  
  const formatResult = (result) => {
    if (result == null) return;
    const [integer, decimal] = result.split('.');
    if (decimal == null) return INTEGER_FORMATTER.format(integer);
    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
  };

export default formatResult;