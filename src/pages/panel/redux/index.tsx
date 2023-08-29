import { Provider } from 'react-redux';
import store from 'redux/store';
import Cake from 'components/redux/cake';
import Soda from 'components/redux/soda';

const Redux = () => {
  return (
    <Provider store={store}>
      <Cake />
      <Soda />
    </Provider>
  );
};

export default Redux;
