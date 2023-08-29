import { useSelector, useDispatch } from 'react-redux';
import { buySoda } from 'redux/soda/actions';

const Soda = () => {
  const sodas = useSelector((state) => state.soda.numOfSodas);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>remaining sodas: {sodas}</h2>
      <button onClick={() => dispatch(buySoda())}>buy soda</button>
    </div>
  );
};

export default Soda;