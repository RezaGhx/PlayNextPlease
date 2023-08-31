import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from 'redux/user/actions';

const User = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const { users, error, loading } = userData;

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        userData &&
        users.length > 0 && (
          <div>
            <h2>user list</h2>
            {users?.map((user) => (
              <p key={user?.id}>{user?.name}</p>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default User;
