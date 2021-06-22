import { Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";

import "firebase/auth";

import Home from "./pages/Home/Home";
import Posts from "./pages/Posts/Posts";
import Menu from "./components/Menu/Menu";
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
import OptionFoundation from "./pages/Cement/Foundation/OptionFoundation";
import ManagementDashboard from "./pages/Management/Dashboard/Dashboard";
import DataGeneralManagement from "./pages/Management/DataGeneral/DataGeneral";
import PlaneRenderManagement from "./pages/Management/PlaneRender/PlaneRender";
import Walls from "./pages/Walls/Wall";
import SolidBrick from "./pages/Walls/SolidBrick/SolidBrick";
import Brick from "./pages/Walls/Brick/Brick";
import BrickCalculator from "./pages/Walls/Brick/BrickCalculator";
import SolidBrickCalculator from "./pages/Walls/SolidBrick/SolidBlockCalculator";
import CeramicBrick from "./pages/Walls/CeramicBrick/CeramicBrick";
import CeramicBrickCalculator from "./pages/Walls/CeramicBrick/CeramicBrickCalculator";
import Revoke from "./pages/Revoke/Revoke"
import RevokeCalculator from "./pages/Revoke/RevokeCalculator";

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
    <IonSplitPane contentId="main">
      <Menu />
      <IonRouterOutlet id="main">
        <Route path="/view-post" component={ViewPost} />
        <Route path="/create-post" component={CreatePost} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/marketplace" component={MarketPlace} />
        <Route
          exact
          path="/gestion/dashboard"
          component={ManagementDashboard}
        />
        <Route
          exact
          path="/gestion/datos-generales"
          component={DataGeneralManagement}
        />
        <Route
          exact
          path="/gestion/planos-render"
          component={PlaneRenderManagement}
        />
        <Route exact path="/gestion" component={Management} />
        <Route exact path="/gestion/presupuesto" component={Budget} />
        <Route exact path="/marketplace/:productId" component={ProductDetail} />
        <Route exact path="/calculator/concrete" component={Cement} />
        <Route exact path="/calculator/concrete/foundation" component={Foundation}/>
        <Route exact path="/calculator/concrete/foundation/zapata" component={OptionFoundation} />
        <Route exact path="/calculator/walls" component={Walls} />
        <Route exact path="/calculator/walls/ceramic-brick" component={CeramicBrick} />
        <Route exact path="/calculator/walls/ceramic-brick/:holes" component={CeramicBrickCalculator} />
        <Route exact path="/calculator/walls/solid-brick" component={SolidBrick} />
        <Route exact path="/calculator/walls/solid-brick/:type" component={SolidBrickCalculator}/>
        <Route exact path="/calculator/walls/brick" component={Brick} />
        <Route exact path="/calculator/walls/brick/:size" component={BrickCalculator} />
        <Route exact path="/calculator/revoke" component={Revoke} />
        <Route exact path="/calculator/revoke/:type" component={RevokeCalculator}/>
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/" component={Home} />
      </IonRouterOutlet>
    </IonSplitPane>
  </IonReactRouter>
);

const App: React.FC = () => <IonApp>{Router}</IonApp>;

export default App;
