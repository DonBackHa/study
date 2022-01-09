import React from "react";
import {useNavigate} from "react-router-dom";
import {userInfoData} from "../App";

interface HomeProps {
    user: userInfoData;
    logout: () => void;
}

function Home(props: HomeProps) {
    const {user, logout} = props
    const navigate = useNavigate();

    function goMyPage() {
        navigate("/MyPage")
    }

    return (
        <div>
            <div>HOME</div>
            <button onClick={goMyPage}>사용자 정보 입력</button>
            <button onClick={logout}>사용자 로그아웃</button>
            <div>사용자 이름 : {user.name}</div>
            <div>사용자 이메일 : {user.email}</div>
            <div>test</div>
        </div>
    )
}

export default Home;
