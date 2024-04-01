export default function changeDateFormat(date) {
    
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let d = new Date(date);
    let month = months[d.getMonth()];

    return `${d.getDate()} ${month.substring(0,3)},${(d.getFullYear()+"").substring(2,4)}`;
}