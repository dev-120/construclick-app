import { Route, Redirect } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import { IonRouterOutlet, IonSplitPane } from "@ionic/react";

import Home from "./pages/Home/Home";
import Posts from "./pages/Posts/Posts";
import Menu from "./components/Menu/Menu";
import Cement from "./pages/Cement/Cement";
import Profile from "./pages/Profile/Profile";
import ViewPost from "./pages/ViewPost/ViewPost";
import Register from "./pages/Register/Register";
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
import Revoke from "./pages/Revoke/Revoke";
import RevokeCalculator from "./pages/Revoke/RevokeCalculator";
import Stucco from "./pages/Stucco/Stucco";
import StuccoCalculator from "./pages/Stucco/StuccoCalculator";
import Paint from "./pages/Paint/Paint";
import PaintCalculator from "./pages/Paint/PaintCalculator";
import Tiles from "./pages/Tiles/Tiles";
import TilesCalculator from "./pages/Tiles/TilesCalculator";
import Drywall from "./pages/Drywall/Drywall";
import DrywallCalculator from "./pages/Drywall/DrywallCalculator";
import Column from "./pages/Cement/Column/Column";
import ColumnCalculator from "./pages/Cement/Column/ColumnCalculator";
import Beam from "./pages/Cement/Beam/Beam";
import BeamCalculator from "./pages/Cement/Beam/BeamCalculator";
import Slabs from "./pages/Cement/Slabs/Slabs";
import SlabsCalculator from "./pages/Cement/Slabs/SlabsCalculator";
import Finance from "./pages/Management/Finance/Finance";
import LegalAspects from "./pages/Management/LegalAspects/LegalAspects";
import Schedule from "./pages/Management/Schedule/Schedule";
import ScheduleItemDetail from "./pages/Management/Schedule/ScheduleItemDetail";
import Warehouse from "./pages/Management/Warehouse/Warehouse";
import Recruitment from "./pages/Management/Recruitment/Recruitment";
import PayToStaff from "./pages/Management/PayToStaff/PayToStaff";
import CreateConstruction from "./pages/Management/CreateConstruction/CreateConstruction";
import ScheduleExecution from "./pages/Management/ScheduleExecution/ScheduleExecution";
import InterventionalReport from "./pages/Management/InterventionalReport/InterventionalReport";
import ClientApprobal from "./pages/Management/ClientApprobal/ClientApprobal";
import HandingReports from "./pages/Management/HandingReports/HandingReports";
import FinalPayment from "./pages/Management/FinalPayment/FinalPayment";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import MarketPlaceSell from "./pages/MarketPlaceSell/MarketPlaceSell";
import ShippingOption from "./pages/Checkout/ShippingOption";
import Payments from "./pages/Checkout/Payments";
import Review from "./pages/Checkout/Review";
import Purchases from "./pages/Purchases/Purchases";
import PurchaseDetail from "./pages/Purchases/PurchaseDetail";
import CreateProject from "./pages/CreateProject/CreateProject";
import useUser from "./hooks/useUser";
import UsersProfile from "./pages/UsersProfile/UsersProfile";
import EditProfile from "./pages/EditProfile/EditProfile";


const Router = () => {
  const { user } = useUser();
  const RouterAuth = (
    <IonRouterOutlet id="main">
      <Route path="/view-post" component={ViewPost} />
      <Route path="/create-post" component={CreatePost} />
      <Route path="/create-project" component={CreateProject} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/edit-profile" component={EditProfile} />
      <Route exact path="/profile/:userId" component={UsersProfile} />
          <Route exact path="/marketplace" component={MarketPlace} />
          <Route exact path="/sell" component={MarketPlaceSell} />
          <Route
            exact
            path="/gestion/dashboard"
            component={ManagementDashboard}
          />
          <Route
            exact
            path="/gestion/create"
            component={CreateConstruction}
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
          <Route
            exact
            path="/shopping-cart"
            render={(props) => <ShoppingCart {...props} />}
          />
          <Route
            exact
            path="/shopping-cart/checkout/shipping"
            component={ShippingOption}
          />
          <Route
            exact
            path="/shopping-cart/checkout/payments"
            component={Payments}
          />
          <Route
            exact
            path="/shopping-cart/checkout/review"
            component={Review}
          />
          <Route exact path="/purchases" component={Purchases} />
          <Route
            exact
            path="/purchases/:id/detail"
            component={PurchaseDetail}
          />
          <Route exact path="/gestion" component={Management} />
          <Route exact path="/gestion/presupuesto" component={Budget} />
          <Route exact path="/gestion/financiacion" component={Finance} />
          <Route exact path="/gestion/cronograma" component={Schedule} />
          <Route
            exact
            path="/gestion/cronograma/:id"
            component={ScheduleItemDetail}
          />
          <Route
            exact
            path="/gestion/pago-al-personal"
            component={PayToStaff}
          />
          <Route exact path="/gestion/legal" component={LegalAspects} />
          <Route
            exact
            path="/gestion/materiales-equipo-almacen"
            component={Warehouse}
          />
          <Route
            exact
            path="/gestion/control-equipos-herramienta"
            component={Warehouse}
          />
          <Route
            exact
            path="/gestion/personal-contratos"
            component={Recruitment}
          />
          <Route
            exact
            path="/gestion/cronograma-ejecucion"
            component={ScheduleExecution}
          />
          <Route exact path="/gestion/actas" component={HandingReports} />
          <Route
            exact
            path="/gestion/reporte-interventoria"
            component={InterventionalReport}
          />
          <Route
            exact
            path="/gestion/aprobacion-cliente"
            component={ClientApprobal}
          />
          <Route exact path="/gestion/pago-final" component={FinalPayment} />
          <Route
            exact
            path="/marketplace/:productId"
            component={ProductDetail}
          />
          <Route exact path="/calculator/concrete" component={Cement} />
          <Route
            exact
            path="/calculator/concrete/foundation"
            component={Foundation}
          />
          <Route
            exact
            path="/calculator/concrete/foundation/zapata"
            component={OptionFoundation}
          />
          <Route exact path="/calculator/concrete/column" component={Column} />
          <Route
            exact
            path="/calculator/concrete/column/:title"
            component={ColumnCalculator}
          />
          <Route exact path="/calculator/concrete/beam" component={Beam} />
          <Route
            exact
            path="/calculator/concrete/beam/:title"
            component={BeamCalculator}
          />
          <Route exact path="/calculator/concrete/slabs" component={Slabs} />
          <Route
            exact
            path="/calculator/concrete/slabs/:type"
            component={SlabsCalculator}
          />
          <Route exact path="/calculator/walls" component={Walls} />
          <Route
            exact
            path="/calculator/walls/ceramic-brick"
            component={CeramicBrick}
          />
          <Route
            exact
            path="/calculator/walls/ceramic-brick/:holes"
            component={CeramicBrickCalculator}
          />
          <Route
            exact
            path="/calculator/walls/solid-brick"
            component={SolidBrick}
          />
          <Route
            exact
            path="/calculator/walls/solid-brick/:type"
            component={SolidBrickCalculator}
          />
          <Route exact path="/calculator/walls/brick" component={Brick} />
          <Route
            exact
            path="/calculator/walls/brick/:size"
            component={BrickCalculator}
          />
          <Route exact path="/calculator/revoke" component={Revoke} />
          <Route
            exact
            path="/calculator/revoke/:type"
            component={RevokeCalculator}
          />
          <Route exact path="/calculator/stucco" component={Stucco} />
          <Route
            exact
            path="/calculator/stucco/:type"
            component={StuccoCalculator}
          />
          <Route exact path="/calculator/paint" component={Paint} />
          <Route
            exact
            path="/calculator/paint/:type"
            component={PaintCalculator}
          />
          <Route exact path="/calculator/tiles" component={Tiles} />
          <Route
            exact
            path="/calculator/tiles/:type"
            component={TilesCalculator}
          />
          <Route exact path="/calculator/drywall" component={Drywall} />
          <Route
            exact
            path="/calculator/drywall/:type"
            component={DrywallCalculator}
          />
          <Route exact path="/calculator" component={Calculator} />
          <Redirect exact path="/" to='/marketplace' />
    </IonRouterOutlet>
  );

  const RouterWithOutAuth = (
    <IonRouterOutlet id="main">
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={Home} />
    </IonRouterOutlet>
  );

  return (
    <IonReactRouter>
      <IonSplitPane contentId="main">
        {user && <Menu />}
        {user ? RouterAuth : RouterWithOutAuth}
      </IonSplitPane>
    </IonReactRouter>
  );
};

export default Router;
