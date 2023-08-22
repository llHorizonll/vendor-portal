/* eslint-disable react/no-children-prop */
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  defer,
} from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ColorModeContextProvider } from "./utils/themes";
import { ProtectedLayout } from "./layout/ProtectedLayout";
import { AuthLayout } from "./layout/AuthLayout";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import RegisterCompany from "./pages/Register/RegisterCompany";
import RegisterUser from "./pages/Register/RegisterUser";
import RegisterSuccess from "./pages/Register/RegisterSuccess";
import Dashboard from "./pages/Dashboard";
import HomeLayout from "./layout/HomeLayout";
import ResetPassword from "./pages/ResetPassword";
import {
  getContactsList,
  getContactsById,
  updateContact,
} from "./services/contacts";
import {
  getProductList,
  getProductById,
  updateProduct,
} from "./services/products";
import Contacts from "./pages/Contacts/Contacts";
import ViewContact from "./pages/Contacts/View";
import EditContact from "./pages/Contacts/Edit";
import Quotations from "./pages/Quotations";
import PurchaseOrder from "./pages/PurchaseOrder";
import Catalogue from "./pages/Catalogue/Catalogue";
import EditCatalogue from "./pages/Catalogue/Edit";
import ViewCatalogue from "./pages/Catalogue/View";
import PriceLists from "./pages/PriceList/PriceLists";
import PriceListDetail from "./pages/PriceList/Details";
import { getPriceLists, getPriceListsById } from "./services/pricelist";
import Settings from "./pages/Settings/Settings";
import Help from "./pages/Help";

const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem("user");
      resolve(user);
    }, 1)
  );

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={<AuthLayout />}
        loader={() => defer({ userPromise: getUserData() })}
      >
        <Route element={<HomeLayout />}>
          <Route path="register" element={<RegisterCompany />} />
          <Route path="register2" element={<RegisterUser />} />
          <Route path="login" element={<Login />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="resetpassword" element={<ResetPassword />} />
        </Route>

        <Route path="register/success" element={<RegisterSuccess />} />

        <Route path="/" element={<ProtectedLayout />}>
          <Route
            index
            element={<Dashboard />}
            loader={async () => await fetch("src/services/dashboard.json")}
          />
          <Route
            path="contacts"
            element={<Contacts />}
            loader={getContactsList}
          />
          <Route
            path="contacts/:contactId"
            element={<ViewContact />}
            loader={getContactsById}
          />
          <Route
            path="contacts/:contactId/edit"
            element={<EditContact />}
            loader={getContactsById}
            action={updateContact}
          />

          {/* <Route path="contacts/:contactId/edit" element={<EditContact />} loader={contactLoader} action={editAction} />
          <Route path="contacts/:contactId/destroy" action={destroyAction} /> */}
          <Route path="/quotations" element={<Quotations />} />
          <Route path="/purchase-order" element={<PurchaseOrder />} />
          <Route
            path="/catalogue"
            element={<Catalogue />}
            loader={getProductList}
          />
          <Route
            path="catalogue/:catalogueId"
            element={<ViewCatalogue />}
            loader={getProductById}
          />
          <Route
            path="catalogue/:catalogueId/edit"
            element={<EditCatalogue />}
            loader={getProductById}
            action={updateProduct}
          />
          <Route
            path="/price-lists"
            element={<PriceLists />}
            loader={getPriceLists}
          />
          <Route
            path="/price-lists/:pricelistId"
            element={<PriceListDetail />}
            loader={getPriceListsById}
          />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
        </Route>
      </Route>
    )
  );

  return (
    <I18nextProvider i18n={i18n}>
      <ColorModeContextProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </ColorModeContextProvider>
    </I18nextProvider>
  );
};

export default App;
