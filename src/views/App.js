import logo from './logo.svg';
import './App.scss';
import '../components/LoginPage/LoginPage'
import { render } from '@testing-library/react';
import LoginPage from '../components/LoginPage/LoginPage';

function App() {
  return (
    <LoginPage></LoginPage>
  );
}

export default App;
