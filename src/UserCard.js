import React from "react";

const user = {name: "둘리", age :20};

function UserCard() {
    return (
     <div>
       <p>안녕!! {user.name}님!! 나이 : {user.age}</p>
       <p>{user.age > 18 ? '성인' : '미성년자'}</p>
     </div>           
    )
}

export default UserCard;