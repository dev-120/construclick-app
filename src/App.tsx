import { Redirect, Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";

/* --- Firebase */
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from "@react-firebase/auth";
import firebase from "firebase/app";
import "firebase/auth";

import Home from "./pages/Home/Home";
import Posts from "./pages/Posts/Posts";
import Menu from './components/Menu/Menu';
import Cement from "./pages/Cement/Cement";
import Profile from "./pages/Profile/Profile";
import ViewPost from './pages/ViewPost/ViewPost';
import Register from './pages/Register/Register';
import Budget from "./pages/Management/Budget/Budget";
import Calculator from "./pages/Calculator/Calculator";
import Management from "./pages/Management/Management";
import CreatePost from "./pages/CreatePost/CreatePost";
import MarketPlace from "./pages/MarketPlace/MarketPlace";
import ProductDetail from "./pages/MarketPlace/ProductDetail";
import Foundation from "./pages/Cement/Foundation/Foundation";
import ManagementDashboard from "./pages/Management/Dashboard/Dashboard";
import DataGeneralManagement from './pages/Management/DataGeneral/DataGeneral';
import PlaneRenderManagement from './pages/Management/PlaneRender/PlaneRender';

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
    <IonSplitPane contentId="main" >
      <Menu />
      <IonRouterOutlet id="main" >
        <Route path="/view-post" component={ViewPost} />
        <Route path="/create-post" component={CreatePost} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/marketplace" component={MarketPlace} />
        <Route exact path="/gestion/dashboard" component={ManagementDashboard} />
        <Route exact path="/gestion/datos-generales"  component={DataGeneralManagement} />
        <Route exact path="/gestion/planos-render" component={PlaneRenderManagement} />
        <Route exact path="/gestion" component={Management} />
        <Route exact path="/gestion/presupuesto" component={Budget} />
        <Route exact path="/marketplace/:productId" component={ProductDetail} />
        <Route exact path="/calculator/concrete" component={Cement}/>
        <Route exact path="/calculator/concrete/foundation" component={Foundation}/>
        <Route exact path="/calculator" component={Calculator}/>
        <Route exact path="/calculator/concrete/asdf" component={Cement}/>
        <Route exact path="/calculator/concrete/asffdf" component={Cement}/>
        <Route exact path="/" component={Home} />
      </IonRouterOutlet>   
    </IonSplitPane>
  </IonReactRouter>
);

const App: React.FC = () => (
  <IonApp>
    {Router}
  </IonApp>
);

export default App;
