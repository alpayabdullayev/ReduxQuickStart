import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from '../features/calculator/calculatorSlice';
import todoReducer from '../features/todos/todoSlice';
import averageReducer from '../features/average/averageSlice';

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    todos: todoReducer,
    average : averageReducer
  },
});
