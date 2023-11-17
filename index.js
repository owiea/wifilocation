test = document.getElementById("test")


async function getlatlon(d){

    ll =  fetch("https://maps.google.com/maps?q="+d+"&t=&ie=UTF8&iwloc=&output=embed")
    .then(e => {return e.text()})
    .then(e => {
        ll = e.match(/\d+\.\d+/g).splice(0,2)
        ll.push(e.match('1]],(.*?)null,')[1].match(',(.*?),')[1].match('"(.*)"')[1])
        console.log(ll[2])
        test.innerText = ll[2]
        return ll
    })

    return await ll

}

getlatlon("my location")