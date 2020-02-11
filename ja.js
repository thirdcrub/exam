

// $(document).ready(function(){
//     // validate support storage

//     if(typeof(Storage) == "undefined") {   
//         alert("Not storage support");
//     }
//     // button click
//     $("#submit").click(function(){
//     // set storage
//         localStorage.setItem("Name", $("#name").val());
//         localStorage.setItem("Email", $("#url").val());




//     .then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
       
//         console.log(na);
//         console.log(la);
         
//         $('#na').val('')
//         $('#la').val('')
//         })

//     });
// });

// db.collection('users').orderBy("Name").onSnapshot(doc =>{
//     let table = $('tbody')[0]
//     $("tbody tr").remove()
//     doc.forEach(item => { 
//         let row = table.insertRow(-1)
//         let nameCell = row.insertCell(0)
//         let secoundCell = row.insertCell(1)

//         nameCell.textContent = item.data().Name

let e = true;
        // Pure javascript - Add 'submit' event listener to form with id="myForm"
// more info: https://www.w3schools.com/js/
console.log('Hi');
document.getElementById("submit").addEventListener('click', function(e) {
    console.log("Submittied"); 
    e = false;
    let name =document.getElementById("name").value;
    let url = document.getElementById("url").value;


    
    if(!(name.match('^[a-zA-Z]{3,16}$')) || name === "") {
        console.log('name');
        e = true;
        document.querySelector('#fe').textContent = "Please enter a valid name."
    }else{
        localStorage.setItem("NAME", $(name).val());
        document.querySelector('#fe').textContent = ""
    }if(!(url.match('^[a-zA-Z]{3,16}$')) || url=== "") {
        console.log('url');
        e = true;
        document.querySelector('#uuurl').textContent = "Please enter a valid name."
    }else{
        localStorage.setItem("URL", $(url).val());
        document.querySelector('#uuurl').textContent = ""  
    } 
    if(e){
        console.log('error');
        document.querySelector('#se').textContent = "Please enter a valid Info."

    }else{

    db.collection("users")
    .add({
        SiteName: name,
        UURL: url,

        
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        
        console.log(name);
        console.log(url);

        
        $('#name').val('')
        $('#url').val('')

    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}
})
    


   
   // or JQuery - Add 'submit' event listener to form with id="myForm"
   // more info: https://www.w3schools.com/jquery/default.asp
   $("myform").submit(function(e){
    console.log("Submitted");
    $("#spName").html( localStorage.getItem("sName"));
   
})
