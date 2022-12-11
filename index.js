let myData='';
function fetchAPI(){
    // console.log('fg')
    document.getElementById("addlInfo").innerHTML='';
    axios.get('https://randomuser.me/api').then((response)=>{
        // console.log("data fetched");
        // console.log(response);
        myData=response.data.results[0];
        // console.log(myData)
        document.querySelector('img').setAttribute('src',myData.picture.large);
        document.getElementById('fName').innerHTML=`${myData.name.title} ${myData.name.first} ${myData.name.last}`
        //set attributes to buttons
        document.getElementById('age').setAttribute('data-attr', myData.dob.age);
        document.getElementById('email').setAttribute('data-attr', myData.email);
        document.getElementById('phone').setAttribute('data-attr', myData.phone);
        //add eventlisteners to the buttons
        document.getElementById('age').addEventListener('click',clickHandler);
        document.getElementById('email').addEventListener('click',clickHandler);
        document.getElementById('phone').addEventListener('click',clickHandler);
        function clickHandler(event){
            // console.log("you clicked me");
            // console.log(event.target.attributes['data-attr'].value);
            document.getElementById('addlInfo').innerHTML=event.target.attributes['data-attr'].value;
        }
    }).catch(e=>{
        console.log(e)
    })
}
document.getElementById('getUser').addEventListener('click',fetchAPI);
console.log("script file loaded");