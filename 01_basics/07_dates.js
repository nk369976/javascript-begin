let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

// let myCreatedate = new Date(2026,6,8)
// let myCreatedate = new Date(2026,6,8,6,26)
// let myCreatedate = new Date("2026-07-8")

// console.log(myCreatedate.toString());

// console.log(myCreatedate.tolocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myTimeStamp.getTime());
// console.log(Date.now()/1000);

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday:"long"
})







