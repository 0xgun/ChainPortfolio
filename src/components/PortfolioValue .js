import { useState, useEffect } from 'react';
import '../App.css';

function PortfolioValue({ nativeValue, tokens }) {
  function formatNumber(number) {
    const formatter = Intl.NumberFormat('en', { notation: 'compact' });
    return formatter.format(number);
  }
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    let val = 0;
    val = val + Number(nativeValue);
    setTotalValue(val.toFixed(2));
  }, [nativeValue, tokens]);
  return (
    <>
      <div className="totalValue">
        <h3>Portfolio Total Value</h3>
        <h2>${formatNumber(totalValue)}</h2>
      </div>
    </>
  );
}

export default PortfolioValue;
