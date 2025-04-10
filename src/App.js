import React from "react";
import "./style.css";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WatchPage from './components/WatchPage';
import MainContainer from "./components/MainContainer";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
      </div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<MainContainer />} />
          <Route path="watch" element={<WatchPage />} />
          {/* <Route path="results" element={<SearchResults />} /> */}
        </Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  );
}
