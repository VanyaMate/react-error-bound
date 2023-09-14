import { ErrorBoundary } from './components/hoc/catch/catchBound.tsx';
import Title from './components/title/title.tsx';


const App = () => {
    return (
        <div>
            <ErrorBoundary>
                <Title title={ 'title' }/>
            </ErrorBoundary>
        </div>
    );
};

export default App;