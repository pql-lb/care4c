import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Page } from "./home/Page.tsx";
import { ServicePage } from "./service/Page.tsx";
import { ContactPage } from "./contact/page.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Page} />
                <Route path="/services" Component={ServicePage} />
                <Route path="/contact" Component={ContactPage} />
            </Routes>
        </Router>
    );
}

export default App;
