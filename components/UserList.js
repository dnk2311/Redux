import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from './redux/action';

const UserList = () => {

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.reducer)

  useEffect(() => {
    dispatch(getUserList());
  }, []);
  console.warn("Xuất ra", userList);
  return (
    <View styles={styles.container}>
      {
        userList.length?
        userList.map((item)=>(<Text>Tên danh sách người dùng nhưng k thể xuất ra được vì quá dài</Text>))
        :null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default UserList;