import React from 'react';
import Counter from './components/Counter';
import { CounterProvider } from './CounterContext';

function App() {
  return (
    <CounterProvider>
      <div style={{ padding: '20px' }}>
        <h1>Counter App</h1>
        <Counter />
      </div>
    </CounterProvider>
  );
}

export default App;