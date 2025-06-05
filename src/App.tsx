import { DataContextProvider } from './context/DataContext';
import { FintechRoute } from './routes';

function App() {
  return (
    <DataContextProvider>
      <h1>OLA</h1>
      <FintechRoute />
    </DataContextProvider>
  );
}

export default App;
