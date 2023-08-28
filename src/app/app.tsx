import { Footer } from '../widgets/footer';
import { Header } from '../widgets/header';

import { AppRouter } from './providers/router';

export function App() {

    return (
        <div className='app'>  
            <Header /> 
            <AppRouter  />
            <Footer />
        </div>
    );
}

