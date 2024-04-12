let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function toMMsDD(date) {
    
    let d = new Date(date);
    let month = months[d.getMonth()];

    return `${d.getDate()} ${month.substring(0,3)}`;
}

export function toDDsMM(date) {
    
    let d = new Date(date);
    let month = months[d.getMonth()];

    return `${month.substring(0,3)} ${d.getDate()}`;
}

export function toMMDD_Y(date) {
    
    let d = new Date(date);
    let month = months[d.getMonth()];

    return `${d.getDate()} ${month.substring(0,3)}, ${(d.getFullYear()+"").substring(2,4)}`;
}

export function toMMDD_YY(date) {
    
    let d = new Date(date);
    let month = months[d.getMonth()];

    return `${d.getDate()} ${month.substring(0,3)}, ${(d.getFullYear())}`;
}

export function toDDbsMMbsYY(date) {
    
    let d = new Date(date);
    let month = months[d.getMonth()];

    return `${d.getDate()}/ ${month.substring(0,3)}/ ${(d.getFullYear())}`;
}

export function toYYbsMMbsDD(date) {
    
    let d = new Date(date);
    let month = months[d.getMonth()];

    return `${(d.getFullYear())}/ ${month.substring(0,3)}/ ${d.getDate()}`;
}



