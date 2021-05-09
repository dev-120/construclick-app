import { Redirect, Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import { IonApp, IonRouterOutlet } from "@ionic/react";

/* --- Firebase */
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from "@react-firebase/auth";
import firebase from "firebase/app";
import "firebase/auth";

import Home from "./pages/Home/Home";
import Posts from "./pages/Posts/Posts";
import { firebaseConfig } from "./config/environtment";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";

/* Theme variables */
import "./theme/variables.css";

const Router = (
  <IonReactRouter>
    <IonRouterOutlet>
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/">
        <Redirect to="/posts" />
      </Route>
    </IonRouterOutlet>
  </IonReactRouter>
);

const App: React.FC = () => (
  <IonApp>
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <FirebaseAuthConsumer>
        {({ isSignedIn }) => {
          if (isSignedIn === true) {
            return Router;
          } else {
            return <Home/>;
          }
        }}
      </FirebaseAuthConsumer>
    </FirebaseAuthProvider>
  </IonApp>
);

export default App;
