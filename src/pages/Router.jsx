import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./home/Home";
import Company from "./company/Company";
import Produits from "./produits/Produits";
import Commandes from "./commandes/Commandes";
import Messages from "./messages/Messages";
import Contactes from "./contactes/Contactes";
import RFQ from "./RFQ/RFQ";
import Transaction from "./transactions/Transaction";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import UpdateCompany from "./company/UpdateCompany";
function Router() {

  //assuming user is logged in
  const user = true

  return (
    <Routes>
      {user ? (
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/updatecompany" element={<UpdateCompany/>}/>
          <Route path="/produits" element={<Produits />} />
          <Route path="/commandes" element={<Commandes />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/contactes" element={<Contactes />} />
          <Route path="/rfq" element={<RFQ />} />
          <Route path="/transaction" element={<Transaction />} />
        </Route>
      ) : (
        <Route >
          <Route index path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      )}
    </Routes>
  );
}

export default Router;
