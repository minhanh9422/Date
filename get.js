function get(event){
    let d= day.value
    let m= month.value
    let y= year.value
    let ngaythang= d+"/"+m+"/"+y
    document.getElementById("datetime").innerHTML = d+"/"+m+"/"+y;
}