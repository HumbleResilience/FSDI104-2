let library={
    name:"The Library",
    address:{
        street: "Main st",
        number: "3A",
        zip: "5555",
        state: "AR",
        city: "Jonesboro"
    },
    hours:{
        open: "9 am",
        close: "8pm"
    },
    Students:[]
}

function Student(name,age,gender, booksOut, contactPhone){
    this.studentName=name;
    this.studentAge=age;
    this.studentGender=gender;
    this.sbooksOut=booksOut;
    this.studentPhone=contactPhone;
}


let Eric = new Student("Eric", 30, "M", 2, 555555555);
let Josh = new Student("Josh", 20, "M", 1, 553333333);


let txtName=document.getElementById("studentName");
let txtAge=document.getElementById("studentAge");
let txtGender=document.getElementById("studentGender");
let txtbooksOut=document.getElementById("booksOut");
let txtPhone=document.getElementById("contactPhone");


function register(){
    console.log(txtName.value,txtAge.value,txtGender.value, txtbooksOut.value, txtPhone.value)
    
    let newStudent= new Student(txtname.value,txtage.txtvalue,txtgender.value, txtbooksOut.value, txtcontactPhone.value)

    salon.Students.push(newStudent)

    console.log(salon.pets);
    

}