import { useEffect, useState } from 'react';
import CreateJobForm from './components/form/CreateJobForm.tsx';
import initializeSdk from './services/initializationSdk.ts';

function App() {
  const [sdkReady, setSdkReady] = useState(false);

  useEffect(() => {
    initializeSdk().then((sdk) => {
      if (sdk) {
        setSdkReady(true);
      }
    });
  }, []);

  if (!sdkReady) return <div>Loading Pipedrive SDK...</div>;

  return <CreateJobForm />;
}

export default App;
