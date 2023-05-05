import Navbar from "./components/navbar";
import {Route, Routes} from "react-router-dom";
import Pancreatic from "./pages/pancreatic";
import Lung from "./pages/lung";
import Brain from "./pages/brain";
import Ovarian from "./pages/ovarian";
import Liver from "./pages/liver";
import NotFound from "./pages/notfound";

function App() {
    return (
        <div className="h-screen ">
            <Navbar/>
            <Routes>
                <Route path="/Pancreatic" element={<Pancreatic/>}/>
                <Route path="/Liver" element={<Liver/>}/>
                <Route path="/Ovarian" element={<Ovarian/>}/>
                <Route path="/Lung" element={<Lung/>}/>
                <Route path="/Brain" element={<Brain/>}/>
                <Route path="*" element={<NotFound/>}/> {/* A catch-all route */}

            </Routes>
        </div>
    );
}

export default App;
