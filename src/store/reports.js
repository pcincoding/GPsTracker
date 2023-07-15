/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const todayNepaliDate = NepaliFunctions.GetCurrentBsDate();
const date = new Date();
const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
// let hours = date.getHours() - 1;
// const minutes = date.getMinutes();
// const meanTime = hours > 12 ? 'PM' : 'AM';
// hours = hours > 12 ? hours - 12 : hours;
const { reducer, actions } = createSlice({
  name: 'reports',
  initialState: {
    groupIds: [],
    period: 'today',
    from: `${todayNepaliDate.year}-${todayNepaliDate.month > 9 ? todayNepaliDate.month : `0${todayNepaliDate.month}`}-${todayNepaliDate.day - 1} ${time}`,
    // from: `${todayNepaliDate.year}-${todayNepaliDate.month > 9 ? todayNepaliDate.month : `0${todayNepaliDate.month}`}-${todayNepaliDate.day} ${hours > 9 ? hours : `0${hours}`}:${minutes > 9 ? minutes : `0${minutes}`} ${meanTime}`,
    to: `${todayNepaliDate.year}-${todayNepaliDate.month > 9 ? todayNepaliDate.month : `0${todayNepaliDate.month}`}-${todayNepaliDate.day} ${time}`,
    // to: moment().locale('en').format(moment.HTML5_FMT.DATETIME_LOCAL),
  },
  reducers: {

    updateGroupIds(state, action) {
      state.groupIds = action.payload;
    },
    updatePeriod(state, action) {
      state.period = action.payload;
    },
    updateFrom(state, action) {
      state.from = action.payload;
    },
    updateTo(state, action) {
      state.to = action.payload;
    },
  },
});

export { actions as reportsActions };
export { reducer as reportsReducer };
