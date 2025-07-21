import { useState } from 'react';
import { Link } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount, increment, decrement, incrementByAmount } from '.';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [increaseAmount, setIncreaseAmount] = useState('2');
  const increaseAmountNum = Number(increaseAmount);

  return (
    <div className="items-center justify-center py-12">
      <div className="flex flex-row items-center justify-center mb-10">
        <button
          onClick={() => dispatch(decrement())}
          className="btn btn-accent btn-circle text-xl font-bold text-center"
        >
          -
        </button>
        <h1 className="text-6xl px-5">{count}</h1>
        <button
          onClick={() => dispatch(increment())}
          className="btn btn-accent btn-circle text-xl font-bold text-center"
        >
          +
        </button>
      </div>
      <div className="flex flex-row items-center justify-center mb-5">
        <input
          type="number"
          value={increaseAmountNum}
          onChange={(e) => setIncreaseAmount(e.target.value)}
          className="input input-bordered w-20 text-center font-bold text-lg"
        />
        <button
          onClick={() => dispatch(incrementByAmount(increaseAmountNum))}
          className="btn btn-neutral w-60 ml-5"
        >
          Add Amount
        </button>
      </div>
      <div className="flex flex-row items-center justify-center">
        <button className="btn btn-neutral w-60 mr-1">Add Async</button>
        <button className="btn btn-neutral w-60 ml-1">Add If Odd</button>
      </div>
      <div className="flex justify-center mt-40">
        <Link to="/" className="btn btn-outline">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Counter;
