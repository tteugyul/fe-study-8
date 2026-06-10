let strUrl1 = "https://human.or.kr";
let strUrl2 = "http://human.or.kr";
let strUrl3 = "http.human.or.kr";

/* {코딩부분} */

function changeLink(strUrl) {

    if (strUrl.includes("://") == false) {

        return "경로가 잘못되었습니다.";

    }

    let splitStr = strUrl.split("://");

    if (splitStr[0] == "https") { // https

        return "https://secure." + splitStr[1];

    } else { // http

        return "https://open." + splitStr[1];
    }

}


console.log(changeLink(strUrl1));

console.log(changeLink(strUrl2));

console.log(changeLink(strUrl3));