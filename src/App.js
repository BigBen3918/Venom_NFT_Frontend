import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Wallet from "./Pages/wallet";
import { initVenomConnect } from "./venom-connect/config";

function App() {
    const [venomConnect, setVenomConnect] = useState();

    useEffect(() => {
        (async () => {
            const _venomConnect = await initVenomConnect();
            setVenomConnect(_venomConnect);
        })();
    }, []);

    return (
        <Routes>
            <Route index element={<Home />} />
            <Route
                path="/wallet"
                element={<Wallet venomConnect={venomConnect} />}
            />
        </Routes>
    );
}

export default App;
