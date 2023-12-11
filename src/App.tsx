import { DataContextProvider } from './context/DataContext';
import { FintechRoute } from './routes';

function App() {
  return (
    <DataContextProvider>
      <FintechRoute />
    </DataContextProvider>
  );
}

export default App;
