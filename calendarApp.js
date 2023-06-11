let d = new Date ()
const date1 = ('5th July, 2023 08:00am');
const date2 = ('6th July, 2023 08:00am');

let calendar =[
    {title: "Event 1", d:date1, location:"Lavington", attendees: (["John", "Dan", "Mos"]),}
]

calendar.push({title: "Event 2", d:date2, location:"Lavington", attendees: (["John", "Dan", "Moses"]),})




function registar(event){
    return[event.title, event.attendees].join(": ");
}
let x = calendar.map(registar)

console.log(x)
console.log(calendar)