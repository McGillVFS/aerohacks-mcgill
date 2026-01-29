import Layout from "./Layout.jsx";
import Home from "./Home";
import Sponsors from "./Sponsors";
import About from "./About";
import Schedule from "./Schedule";
import Prizes from "./Prizes";
import Register from "./Register";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Sponsors: Sponsors,
    
    About: About,
    
    Schedule: Schedule,
    
    Prizes: Prizes,
    
    Register: Register,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                <Route path="/" element={<Home />} />
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Sponsors" element={<Sponsors />} />
                
                <Route path="/About" element={<About />} />
                
                <Route path="/Schedule" element={<Schedule />} />
                
                <Route path="/Prizes" element={<Prizes />} />
                
                <Route path="/Register" element={<Register />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}