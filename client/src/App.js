import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { FilterTransaction } from './components/FilterTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';
import './datepicker.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        <FilterTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
