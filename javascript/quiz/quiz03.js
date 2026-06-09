const personInfo = {
    name: "홍길동",
    age: 25,
    phone: "010-1234-5678",
    engName: "John Smith",
    nickname: " 복습마왕 "
}

console.log('변경 전');
console.log(personInfo);

// personInfo.engName = "JOHN SMITH";
personInfo.engName = personInfo.engName.toUpperCase();
personInfo.nickname = personInfo.nickname.trim();
personInfo.phone = [personInfo.phone.substring(0, 3), personInfo.phone.substring(4, 8), personInfo.phone.substring(9, 13)];

console.log('변경 후');
console.log(personInfo);