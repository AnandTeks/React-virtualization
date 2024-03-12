import {
    Route,
    Routes
} from 'react-router-dom';
import About from '../About/index'
import Home from '../Home/index';
import Virutal  from '../Virtual';
const Approutes = () => (<>
    <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="virtual" element={<Virutal />} />
    </Routes>
</>);
export default Approutes;