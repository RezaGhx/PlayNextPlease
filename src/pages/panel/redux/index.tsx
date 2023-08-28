import { Provider } from 'react-redux';
import store from 'redux/store';
import Cake from 'components/redux/cake';

const Redux = () => {
  return (
    <Provider store={store}>
      <Cake />
    </Provider>
  );
};

export default Redux;
