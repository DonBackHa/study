import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {HomePage, MyPage} from "./pages";

export interface userInfoData {
    email: string | null,
    name: string | null,
    id: number | null,
}

function App() {
    const [userInfo, setUserInfo] = useState<userInfoData>({
        name: null,
        email: null,
        id: null
    })

    function login_user(loginUserInfo: userInfoData) {
        setUserInfo(loginUserInfo);
    }

    function logout_user() {
        setUserInfo({name: null, email: null, id: null})
    }

    return (
        <div className={'App'}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/Home"/>}/>
                    <Route path={"/Home"} element={<HomePage user={userInfo} logout={logout_user}/>}/>
                    <Route path={"/MyPage"} element={<MyPage user={userInfo} login={login_user}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
