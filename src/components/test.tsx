import React from 'react';
import { selectUser, selectUserError } from '@/store/user/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, setUser } from '@/store/user/slice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux/reduxHooks';

export const HelloWorld: React.FC = () => {
  return (
    <div>
      <p>Hello, World!</p>
    </div>
  );
};

export const HelloWorld2: React.FC = () => {
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()
 
  return (

    <div>
      <p>Hello, {user !== null && user.name ? user.name : "noname"}</p>
      <button onClick={()=>{console.log(user)}}>Show user</button><br/>
      <button onClick={()=>{dispatch(setUser({user:{name: "Timmy"}}))}}>Set "Timmy"</button><br/>
      <button onClick={()=>{dispatch(removeUser())}}>Clear</button><br/>
    </div>
  );
};
