import { getMethods } from '@/services/getFirstData'

const GetFistData = {
  namespace: 'getFirstDataHome',
  state: {
    initData: []
  },
  effects: {
    *fetchInitData (payload, { call, put }) {
      const response = yield call(getMethods, payload);
      yield put({
        type: 'saveInitData',
        payload: response
      })
      console.log('response is ===>>>', response)
    }
  },
  reducers: {
    saveInitData (state, { payload }) {
      return {
        ...state,
        initData: payload
      }
    }
  }
}
export default GetFirstData