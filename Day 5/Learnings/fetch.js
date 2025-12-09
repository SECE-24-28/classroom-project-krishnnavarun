//counter
let n;
const num=document.getElementById('num')
const btnmElement=document.getElementById('btnm')
btnmElement.addEventListener('click',()=>{
    let i=num.innerHTML
    num.innerHTML=parseInt(i)-1;
    fetchData()
})
const btnpElement=document.getElementById('btnp')
btnpElement.addEventListener('click',()=>{
    let j=num.innerHTML
    num.innerHTML=parseInt(j)+1;
    fetchData()
})

 const fetchData = async () => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${num.innerHTML}`)
            const json = await res.json()
            console.log(json)
            document.getElementById('Details').innerHTML =`
            <div><strong>Name:</strong> ${json.name}</div>
            <div><strong>Email:</strong> ${json.email}</div>
            <div><strong>phone:</strong> ${json.phone}</div>
            <div><strong>website:</strong> ${json.website}</div>
            <div><strong>company:</strong> ${json.company}</div>
            <div><strong>address:</strong> ${json.address.street},${json.address.suite},${json.address.city}</div>`
        } catch(err) {
            console.log('ERROR', err)
        }
    }
    fetchData()