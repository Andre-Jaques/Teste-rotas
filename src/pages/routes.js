import { 
Routes, 
Route, 
} from 'react-router-dom';

import Dashboard from './Dashboard';
import Profile from './Profile';
import Teste from './teste';

export default function MainRoutes(){
    return(
        
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/teste" element={<Teste />} />
        </Routes>
        
        
    );
}

