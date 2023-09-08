import {Header} from "./components";
import {router} from "./components/router";

function App() {
    // @ts-ignore
    return (
        <div className="App">
            <Header/>

            <main>
                <div className="container">
                    {router()}
                </div>
            </main>

        </div>
    );
}

export default App;
