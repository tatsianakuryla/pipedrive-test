import { CreateJobForm } from "./components/form/CreateJobForm.tsx";
// import { useEffect, useState } from "react";
// import {initializeSdk} from "./services/initializationSdk.ts";

export function App() {
  // const [sdkReady, setSdkReady] = useState(false);
  //
  // useEffect(() => {
  //   initializeSdk().then((sdk) => {
  //     if (sdk) {
  //       setSdkReady(true);
  //     }
  //   });
  // }, []);
  //
  // if (!sdkReady) return <div>Loading Pipedrive SDK...</div>;

  return <CreateJobForm/>;
}