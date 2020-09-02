/*
 * @Author: tiw
 * @Date: 2020-07-25 23:49:41
 * @LastEditTime: 2020-07-27 14:53:32
 * @LastEditors: Please set LastEditors
 * @Description: 
 */ 
import { Effect, Reducer } from 'umi';

import { queryCurrent } from '@/services/user';

export interface CurrentUser {
  avatar?: string;
  name?: string;
  title?: string;
  group?: string;
  signature?: string;
  tags?: {
    key: string;
    label: string;
  }[];
  userid?: string;
  unreadCount?: number;
}

export interface UserModelState {
  currentUser?: CurrentUser;
}

export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    fetchCurrent: Effect;
  };
  reducers: {
    saveCurrentUser: Reducer<UserModelState>
  };
}

const UserModel: UserModelType = {
  namespace: 'user',

  state: {
    currentUser: {},
  },

  effects: {
    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },
  },

  reducers: {
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload || {},
      };
    }
  },
};

export default UserModel;
