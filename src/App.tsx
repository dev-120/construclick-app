import React, { useEffect } from 'react';
import { IonApp } from "@ionic/react";

import './globalStyles';
import Router from './router';
import useUser from "./hooks/useUser";
import { runSaga } from './store/store';
import useCommons from './hooks/useCommons';


const App: React.FC = () => {
  const { loadTokenStorage } = useUser();
  const { loadDatasCommons } = useCommons();

  useEffect(() => {
    runSaga();
    loadTokenStorage();
    loadDatasCommons();
  }, []);

  return (
    <IonApp>
      <Router/>
    </IonApp>
  );
};

export default App;
