var userData = [
    {
        name: "Abdullah",
        fatherName: "Mushtaq",
        age: 37,
        rollNo: 4654,
      },
    {
        name: "Abdullah",
        fatherName: "Mushtaq",
        age: 37,
        rollNo: 4654,
    },
    {
        name: "Abdullah",
        fatherName: "Mushtaq",
        age: 37,
        rollNo: 4654,
      },
  ];



  var userTable = document.getElementById('usertable');
  var present = document.getElementById('present');
  var absent = document.getElementById('absent');
  var leave = document.getElementById('leave');
  var totlepresent = "1";
  var totleabsent = "1";
  var totleleave = "1";

  
  var userName = document.getElementById("name");
  var fatherName = document.getElementById("fatherName");
  var rollno = document.getElementById("rollno");
  var age = document.getElementById("age");
  

var btn1 =document.getElementsByClassName('btn1')


  function addData() {
    userTable.innerHTML = "";
    for (var i = 0; i < userData.length; i++) {
      userTable.innerHTML += `
      <div class="all">
      <h1>Student ID</h1>

      <div class="detail">
          <Span class="list"><b>name : </b>${userData[i].name}</Span>
          <Span class="list"><b>Father Name : </b>${userData[i].fatherName}</Span>
          <Span class="list"><b>age : </b>${userData[i].age}</Span>
          <Span class="list"><b>Rollno : </b>${userData[i].rollNo}</Span>
      </div>
      <div>
          <button onclick = "presentc(this)">Present</button>
          <button onclick = "absentc(this)">Absent</button>
          <button id="back" onclick = "leavec(this)">Leave</button>
      </div>

  </div>
      `;
    }
  }
  addData();


  function addUser() {
    var obj = {
      name: userName.value,
      fatherName: fatherName.value,
      rollNo: rollno.value,
      age: age.value,
    };
  
    userData.push(obj);
    console.log(userData);
    addData();
  }
  
  
  function presentc(element) {
    console.log(element);
    if (element.innerText == 'present') {
      present.innerText = present.innerText -1;
      element.innerText = 'Present';
      element.style.backgroundColor = '';
    } else {
      present.innerText = parseInt(present.innerText) +1;
      element.innerText = 'present';
      element.style.backgroundColor = 'green';
    }z
  }


  function absentc(element) {
    console.log(element);
    if (element.innerText == 'absent') {
      absent.innerText = absent.innerText -1;
      element.innerText = 'Absent';
      element.style.backgroundColor = '';
    } else {
      absent.innerText = parseInt(absent.innerText) +1;
      element.innerText = 'absent';
      element.style.backgroundColor = 'red';
    }
  }

  function leavec(element) {
    console.log(element);
    if (element.innerText == 'leave') {
      leave.innerText = leave.innerText -1;
      element.innerText = 'Leave';
      element.style.backgroundColor = '';
    } else {
      leave.innerText = parseInt(leave.innerText) +1;
      element.innerText = 'leave';
      element.style.backgroundColor = 'lightgreen';
    }
  }

