import React from "react";
import Form from "./components/Form";
import FeedbackForm from "./components/FeedbackForm";
import SignUp from "./components/SignUpForm";
import Goals from "./components/Goals";
import GiftcardPage from "./components/GiftcardPage";
import DisplayDessertsList from "./components/DessertsList";
import ToDos from "./components/ToDos";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SideEffect from "./components/SideEffect";
import FetchAPI from "./components/FetchAPI";
import ReducerDemo from "./components/ReducerHookDemo";
import UseRefDemo from "./components/UseRefDemo";
import RandomUser from "./components/FetchData";
import UseCustomHook from "./components/UseCustomHooks";
import DialogBox from "./jsx/DialogBox";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster 
       position="top-right"
       reverseOrder={false}
      />
      <Router>
        <div>
          <nav>
            <ol>
              <li>
                <Link to="/form">Form</Link>
              </li>

              <li>
                <Link to="/desserts-list">Desserts</Link>
              </li>

              <li>
                <Link to="/feedback-form">Feedback</Link>
              </li>
              <li>
                <Link to="/giftcard-page">Claim Gift Card</Link>
              </li>
              <li>
                <Link to="/goals">Goals</Link>
              </li>
              <li>
                <Link to="/sign-up">Sign Up</Link>
              </li>
              <li>
                <Link to="/to-do">To Do</Link>
              </li>
              <li>
                <Link to="/side-effect"> Use Effect</Link>
              </li>
              <li>
                <Link to="fetch">Fetch</Link>
              </li>
              <li>
                <Link to="reducer">Reducer</Link>
              </li>
              <li>
                <Link to="use-ref">UseRef</Link>
              </li>
              <li>
                <Link to="fetch-data">Fetch Data</Link>
              </li>

              <li>
                <Link to="use-custom-hook">Use custom hook</Link>
              </li>
              <li>
                <Link to="dialog-box">Dialog Box</Link>
              </li>
            </ol>
          </nav>

          <main>
            <Routes>
              <Route path="/form" element={<Form />} />
              <Route path="/desserts-list" element={<DisplayDessertsList />} />
              <Route path="/giftcard-page" element={<GiftcardPage />} />
              <Route path="/feedback-form" element={<FeedbackForm />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/to-do" element={<ToDos />} />
              <Route path="/side-effect" element={<SideEffect />} />
              <Route path="fetch" element={<FetchAPI />} />
              <Route path="/reducer" element={<ReducerDemo />} />
              <Route path="/use-ref" element={<UseRefDemo />} />
              <Route path="/fetch-data" element={<RandomUser />} />
              <Route path="/use-custom-hook" element={<UseCustomHook />} />
              <Route path="/dialog-box" element={<DialogBox />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
