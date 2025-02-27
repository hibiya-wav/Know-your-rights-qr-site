import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Resources from "./links/Resources";
import Get_Together from "./links/Get_Together";
import Rights from "./links/Rights";
import Footer from "./links/Footer";
import "./App.css";

function App() {
    return (
        <div className="App">
            <h1 id="main_title">
                NO DEJES QUE UN CERDO TE ARRUINE LA VIDA. CONOCE TUS DERECHOS Y
                ORGANÍZATE.
            </h1>
            <div className="center_links"
             style={{
                paddingBottom: "50px",
            }}>
                <ul className="uhhh">
                    <li>
                        <Link to="/resources">Recursos & Derechos</Link>
                    </li>
                    {/* <li> */}
                    {/* <Link to="/rights">Rights</Link> */}
                    {/* </li> */}
                    <li>
                        <Link to="/organize">Organiza</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path="/resources" element={<Resources />} />
                {/* <Route path="/rights" element={<Rights />} /> */}
                <Route path="/organize" element={<Get_Together />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
