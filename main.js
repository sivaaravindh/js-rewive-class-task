class Trainee{
    constructor(name,age,mobil,dob,rating) {
            this.name=name;
            this.age=age;
            this.mobil=mobil;
            this.dob=dob;
            this.rating=rating;
    }
    identification(value){
        this.rating=value;
    }
}
// var details=[]; 
// for(let  i=0; i<3; i++){
//     var traineeNew=new Trainee(
//         prompt("name"),parseInt(prompt("age")),parseInt(prompt("mobil")),parseInt(prompt("dob")));
//     details.push(traineeNew)
//     traineeNew. identification()
// }
    var trainee1=new Trainee("siva","19","9361400856","02-06-2003","5");
    var trainee2=new Trainee("chitra","20","934567756","10-10-2001","4");
    var trainee3=new Trainee("aravind","20","9781400856","10-06-2000","5");
    var trainee4=new Trainee("vicky","19","9761400856","11-10-2003","4");
    var trainee5=new Trainee("Ram","21","958400856","02-10-2001","3");

    var details=[]; 
    details.push(trainee1);
    details.push(trainee2);
    details.push(trainee3);
    details.push(trainee4);
    details.push(trainee5);

    console.log(details);


    var cont=document.getElementById("table-body");

details.forEach(function(value,index){

    var tableRow=document.createElement("tr");
    cont.appendChild(tableRow);

    var car1=document.createElement("td");
    car1.innerText=index+1;
    cont.appendChild(car1);
    
    var div2=document.createElement("td");
    div2.innerHTML=value.name;
    cont.appendChild(div2);

    var div3=document.createElement("td");
    div3.innerHTML=value.age;
    cont.appendChild(div3);

    var div4=document.createElement("td");
    div4.innerHTML=value.mobil;
    cont.appendChild(div4);
    
    var div5=document.createElement("td");
    div5.innerHTML=value.dob;
    cont.appendChild(div5);

    var div6=document.createElement("td");
    div6.innerHTML=value.rating;
    cont.appendChild(div6);

    var udating=document.createElement("td");
    cont.appendChild(udating) ;

    var changInput=document.createElement("input");
    changInput.setAttribute("id","uptade");
    changInput.setAttribute("tupe","number");
    udating.appendChild(changInput);

    var changebut=document.createElement("button");
    changebut.innerText="change";
    changebut.setAttribute("onclick","changeradting(this)")
    udating.appendChild(changebut);


});

function changeradting(e){
    e.parentNode.previousElementSibling.innerText=e.previousElementSibling.value;
    e.previousElementSibling.value="";
}



// let cont=document.querySelector(".container");

// let car1=document.createElement("div");
// car1.classList.add("row");
// cont.appendChild(car1);

//   food.forEach(e=>{
//     let div=document.createElement("div");
//     div.classList.add("col");
//     car1.appendChild(div);

//     let div2=document.createElement("div");
//     div2.classList.add("col-card");
//     div.appendChild(div2);

//     let  img=document.createElement("img");
//      img.src=e.imagurl1;
//     div2.appendChild(img);

//     let head=document.createElement("h3");
//      head.innerHTML=e.name;
//     div2.appendChild(head);

//     let para=document.createElement("p");
//     para.innerHTML=e.culsin;
//     div2.appendChild(para);


// post.innerHTML +=`<div> <p>${data.text}</p>
// <span class="option">
//     <i onClick="new2(this)" class="fa fa-edit"></i>
//     <i onClick="delete1(this)" class="fa fa-trash"></i>
// </span>
// </div>`