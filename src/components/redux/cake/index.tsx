// all commented parts all for the way we didn't use the react-redux built-in hooks
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
import { buyCake, buyCakeByCount } from 'redux/cake/actions';

// const Cake = (props) => {
const Cake = () => {
  const [count, setCount] = useState(0);
  const cakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        {/* <h2>remaining cakes: {props.numOfCakes}</h2> */}
        <h2>remaining cakes: {cakes}</h2>
      </div>
      <div>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
      </div>
      <div>
        <input type="text" onChange={(e) => setCount(e.target.value)} />
        <button onClick={() => dispatch(buyCakeByCount(count))}>
          buy {count} cake
        </button>
      </div>
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     numOfCakes: state.numOfCakes,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyCake: () => dispatch(buyCake()),
//   };
// };

export default Cake;
// export default connect(mapStateToProps, mapDispatchToProps)(Cake);
