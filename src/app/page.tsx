"use client"
import { store } from '@/provider/store';
import { Provider } from 'react-redux';
import Dashboard from './Dashboard/page';


function MyApp() {
  return (
    <Provider store={store}>
        <Dashboard/>
    </Provider>
  );
}

export default MyApp;