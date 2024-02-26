import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { AutoGenerateDesign } from "./pages/AutoGenerateDesign";
import { CreatePassword } from "./pages/CreatePassword";
import { GetStarted } from "./pages/GetStarted";
import { PlanSubmitted } from "./pages/PlanSubmitted";
import { Registered } from "./pages/Registered";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { Terms } from "./pages/Terms";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { WithScrollToTopComponent } from "./components/WithScrollToTopComponent";
import { Questionnaire } from "./pages/Questionnaire";
import { GetInTouch } from "./pages/GetInTouch";
import { VerificationCode } from "./pages/VerificationCode";
import PrivateRoute from "./components/routs/PrivateRoute";
import PublicRoute from "./components/routs/PublicRoute";
import { Profile } from "./pages/Profile";
import { Loader } from "./components/Loader";

import { EmailPlansSubmit } from "./components/EmailsTemplate/EmailPlansSubmit";

function App() {
  return (
    <WithScrollToTopComponent>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/signup" element={<PublicRoute redirectTo="/" />}>
          <Route index element={<SignUp />} />
        </Route> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/login" element={<PublicRoute redirectTo="/" />}>
          <Route index element={<Login />} />
        </Route> */}
        <Route path="/verification-code" element={<VerificationCode />} />
        <Route path="/profile" element={<PrivateRoute redirectTo="/" />}>
          <Route index element={<Profile />} />
        </Route>
        <Route path="/createPassword" element={<CreatePassword />} />
        <Route path="/registered" element={<Registered />} />
        <Route path="/getStarted" element={<GetStarted />} />
        <Route path="/autoGenerateDesign" element={<AutoGenerateDesign />} />
        <Route path="/planSubmitted" element={<PlanSubmitted />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Terms />} />
      </Routes>
    </WithScrollToTopComponent>
  );
}

export default App;