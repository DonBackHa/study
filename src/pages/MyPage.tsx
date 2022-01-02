import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {userInfoData} from "../App";

interface MyPageProps {
    user: userInfoData,
    login: (user: userInfoData) => void;
}

function MyPage(props: MyPageProps) {
    const {user, login} = props
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");

    function goHome() {
        navigate("/Home")
    }

    function saveInfo() {
        const userInfoData: userInfoData = {
            email: email,
            name: userName,
            id: 0
        }
        login(userInfoData)
    }

    return (
        <div>
            <div>MyPage</div>
            <button onClick={goHome}>홈으로 가기</button>
            <div>사용자 이름 : {user.name}</div>
            <div>사용자 이메일 : {user.email}</div>
            <div>
                <span>사용자 이름 입력하기</span>
                <input onChange={event => setUserName(event.target.value)}/>
            </div>
            <div>
                <span>이메일 입력하기</span>
                <input onChange={event => setEmail(event.target.value)}/>
            </div>
            <button onClick={saveInfo}>저장하기</button>
        </div>
    )
}

export default MyPage;
