import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Page } from "./home/Page.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Page} />
            </Routes>
        </Router>
    );
}

export default App;
