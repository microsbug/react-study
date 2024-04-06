import { createSlice } from '@reduxjs/toolkit';

// 创建学校的slice
const schoolSlice = createSlice({
  name: 'school',
  initialState: {
    name: '清华大学',
    address: '北京'
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    }
  }
})

export const { setName, setAddress } = schoolSlice.actions;
export const { reducer: schoolReducer } = schoolSlice