import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importation des routes
import Home from "./pages/Home";
import About from "./pages/About";
import Error404 from "./pages/Error404";

const App = () => {

    return (

        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>


                {/* Erreur 404 */}
                <Route path="*" element={<Error404 />}></Route>

            </Routes>
        </BrowserRouter>

    );

};

export default App;
