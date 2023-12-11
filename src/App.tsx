import { DataContextProdiver } from './context/DataContext';
import { FintechRoute } from './routes';

function App() {
  return (
    <DataContextProdiver>
      <FintechRoute />
    </DataContextProdiver>
  );
}

export default App;
