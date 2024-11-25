function goToNewPage() {
    window.location.href = 'newpage.html';
}

let total_data=[{ SFn_i:"", SMn_i:"", SLn_i:"",FFn_i:"",FMn_i:"", FLn_i:"",MFn_i:"", MMn_i:"", MLn_i:"",Dob_i:"",std_i:"",hig_i:"",adh_i:"", phno_i:"",adds_i:"",email_i:"",time_i:""}];
let count=0;
function back() {
    window.location.href = 'FSWD_ass_day3(2).html';
}

function submiting_time(){

    setTimeout( submitForm(),1000);

}


function submitForm() {
   
    let SFn = document.getElementById("SFN").value;
    let SMn = document.getElementById("SMN").value;
    let SLn = document.getElementById("SLN").value;
    let FFn = document.getElementById("FFN").value;
    let FMn = document.getElementById("FMN").value;
    let FLn = document.getElementById("FLN").value;
    let MFn = document.getElementById("MFN").value;
    let MMn = document.getElementById("MMN").value;
    let MLn = document.getElementById("MLN").value;
    let Dob = document.getElementById("DOB").value;
    let std = document.getElementById("STD").value;
    let hig = document.getElementById("HIG").value;
    let adh = document.getElementById("ADHN").value;
    let phno = document.getElementById("PPNO").value;
    let adds = document.getElementById("ADDS").value;
    let email = document.getElementById("PEML").value;
    
    let currentTime = new Date();
    let time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    
   /* const student = {
        SFni: SFn,
        SMni: SMn,
        SLni: SLn,
        FFni: FFn,
        FMni: FMn,
        FLni: FLn,
        MFni: MFn,
        MMni: MMn,
        MLni: MLn,
        Dobi: Dob,
        stdi: std,
        higi: hig,
        adhi: adh,
        phnoi: phno,
        addsi: adds,
        emaili: email,
        timei: time
    };*/

    //const str = JSON.stringify(student);
   
    let storedData = localStorage.getItem("Student");
    let total=JSON.parse(storedData);
    total_data=total;
    total_data.push({SFn_i: SFn, SMn_i: SMn, SLn_i: SLn,
        FFn_i: FFn,
        FMn_i: FMn,
        FLn_i: FLn,
        MFn_i: MFn,
        MMn_i: MMn,
        MLn_i: MLn,
        Dob_i: Dob,
        std_i: std,
        hig_i: hig,
        adh_i: adh,
        phno_i: phno,
        adds_i: adds,
        email_i: email,
        time_i: time});

        let data=JSON.stringify(total_data);

     localStorage.setItem("Student", data);
     count++;
     setTimeout( alert_intered(count, SFn),5000);
   alert_intered(count, SFn);
}

function retrieveData() {
    const stu = localStorage.getItem("Student");
    let retri=document.getElementById("retrive_no").value;
    if (stu) {
        const parstudent = JSON.parse(stu);
      
        document.getElementById("SFname").innerHTML = parstudent[retri].SFn_i;
        document.getElementById("SMname").innerHTML = parstudent[retri].SMn_i;
        document.getElementById("SLname").innerHTML = parstudent[retri].SLn_i;
        document.getElementById("FFname").innerHTML = parstudent[retri].FFn_i;
        document.getElementById("FMname").innerHTML = parstudent[retri].FMn_i;
        document.getElementById("FLname").innerHTML = parstudent[retri].FLn_i;
        document.getElementById("MFname").innerHTML = parstudent[retri].MFn_i;
        document.getElementById("MMname").innerHTML = parstudent[retri].MMn_i;
        document.getElementById("MLname").innerHTML = parstudent[retri].MLn_i;
        document.getElementById("Dob").innerHTML = parstudent[retri].Dob_i;
        document.getElementById("Standard").innerHTML = parstudent[retri].std_i;
        document.getElementById("height").innerHTML = parstudent[retri].hig_i;
        document.getElementById("Aadhar number").innerHTML = parstudent[retri].adh_i;
        document.getElementById("Phone number").innerHTML = parstudent[retri].phno_i;
        document.getElementById("Complete Home Ad/s").innerHTML = parstudent[retri].adds_i;
        document.getElementById("Parent Email").innerHTML = parstudent[retri].email_i;
        document.getElementById("time").innerHTML = parstudent[retri].time_i;
        console.log("DATA :",total_data);
    } else {
        document.getElementById("userdata").innerHTML = "No data found.";
    }
}


 function delete_stu(){

    let del_no=document.getElementById("delete_no").value;
    let elem=localStorage.getItem("Student");
    let data_par=JSON.parse(elem);
    data_par.splice(del_no,1);
    total_data=  JSON.stringify(data_par);
    localStorage.setItem("Student",total_data);
    

}



 function alert_intered(count, SFn){
    alert(`Student is been added at sr.no:${ count}   by name ${SFn}`);
 }


   
