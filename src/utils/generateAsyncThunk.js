import { createAsyncThunk } from '@reduxjs/toolkit';

const generateAsyncThunk = (actionName, actionHandler) => {
  const handler = createAsyncThunk(actionName, async (...args) => {
    const response = await actionHandler(...args);

    return response.data;
  });

  return handler;
};

export default generateAsyncThunk;
