import { Provider } from 'react-redux';
import store from 'redux/store';
import Cake from 'components/redux/cake';
import Soda from 'components/redux/soda';
import User from 'components/redux/user';

const Redux = () => {
  return (
    <Provider store={store}>
      <div className="flex justify-center p-5 bg-slate-400">
        <Cake />
        <Soda />
        <User />
      </div>
    </Provider>
  );
};

export default Redux;
