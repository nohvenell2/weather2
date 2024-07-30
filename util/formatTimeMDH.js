export default function formatTimeMDH(isoString){
    const date = new Date(isoString);
    const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
    const day = date.getDate();
    const hours = date.getHours();
    return `${month}월 ${day}일 ${hours}시`;
}