import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserProfile() {
    // useContext를 사용해서 context 값을 활용합니다.
    console.log(useContext(UserContext));
    const { name, setName } = useContext(UserContext);

    // 이제 UserContext에서 제공되는 값들을 사용할 수 있습니다.
    // 예를 들어: const { user, updateUser } = userContext;

    return <>
        {/* 여기에서 name과 setName 사용 */}
        <p>Name: {name}</p>
    </>;
}

export default UserProfile;
