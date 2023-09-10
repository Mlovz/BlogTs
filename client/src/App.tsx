import {Header} from "./components";
import {router} from "./components/router";
import {useSelector, useDispatch} from 'react-redux'

function App() {
    const state:any = useSelector(state => state)
    const dispatch = useDispatch()


    const editName = () => {
        dispatch({type: 'EDIT', payload: 'Test'})
    }



    return (
        <div className="App">
            <Header/>


            <button onClick={editName}>Edit</button>

            <main>
                <div className="container">
                    {router()}
                </div>
            </main>

        </div>
    );
}

export default App;
