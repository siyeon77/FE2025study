//const는 변하지 않는 사용자의 기본정보
const USER_ID = "user_12345";
const SIGNUP_DATA = "2024 09 28";

//let 뱐경되는 상태 정보
let isOline = false;//온라인 상태
let lasActiveTime = DataTransfer.now();//마지막 활동시간
let unreadMessageCount = 0;//읽지 않은 메세지 수

