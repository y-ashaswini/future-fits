import { Route, Routes, useLocation, Link } from "react-router-dom";
import Chatpage from "./Components/Chatpage";
import Test from "./Components/Test";

export default function App() {
    const location = useLocation();
    return (
        <div className="h-[100vh] p-12 md:py-16 md:px-20">
            <div className="flex gap-2 items-center sm:gap-4 md:gap-8 tracking-wider absolute top-4 text-zinc-200 outline-none">
                <Link to="/" className="md:text-5xl text-3xl font-light">FUTURE FITS</Link>
                <Link to="/test" className="hover:underline underline-offset-4">PSYCHOMETRIC ANALYSIS</Link>
                <Link to="/" className="hover:underline underline-offset-4">TEST REPORT</Link>
                <Link to="/" className="hover:underline underline-offset-4">COUNSELLING</Link>
                <Link to="/" className="hover:underline underline-offset-4">ABOUT US</Link>
                <Link to="/" className="hover:underline underline-offset-4">CONTACT US</Link>
            </div>

            <div className="h-full md:px-8 px-4 mt-8 py-4 bg-transparent relative text-zinc-200">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" exact element={<Chatpage />} />
                    <Route path="/test" exact element={<Test />} />
                </Routes>
            </div>
        </div>
    );
}
