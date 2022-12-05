import React, {useState} from "react";
import './App.css';
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";

function App() {
    const [activeUserId, setActiveUserId] = useState(null)

    return (
        <div className="App">
        <div>
            <UserList setActiveUserId={setActiveUserId}/>
        </div>
        <div>
            {
                activeUserId && <UserDetail activeUserId={activeUserId}/>
            }
        </div>
        </div>
    );
}

export default App;
