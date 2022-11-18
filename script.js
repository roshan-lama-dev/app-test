// caputring the form data from the users

const tableId = document.getElementById("tabletoshow");

const badtableId = document.getElementById("baddisplay");

const displayTotalHours = document.getElementById("displayTotalHours");
const disaplyBadHours = document.getElementById("disaplyBadHours");

const taskArray = [];
const badArray = [];

const sumHours = 0;

let htcounter = 0;

//
const handleonsubmit = (i) => {
  const formData = new FormData(i);

  const task = formData.get("task");
  const hour = formData.get("hour");

  const oj = {
    task,
    hour,
  };

  taskArray.push(oj);

  calculateHours();

  const sumHours = calculateHours() + calcualteBadHours();

  console.log(sumHours);
  // console.log(calculateHours());
  //   console.log(taskArray);
  display();

  //   console.log(tableID);
};

const display = () => {
  let str = "";
  let dummyhr = "";
  taskArray.map((item, index) => {
    htcounter = htcounter + +item.hour;
    // console.log(htcounter);
    // t
    if (item.hour < 2) {
      //   console.log("hour");
      dummyhr = "hour";
    } else {
      //   console.log("hours");
      dummyhr = "hours";
    }
    // console.log(item);

    str += `

    <tr>
    <td>1</td>
  <td>${item.task}</td>
    <td>${item.hour} ${dummyhr}</td>
    <td><button onclick="handleOnClick(${index})" class="btn btn-warning "><i class="fa-solid fa-arrow-right"></i></button> </td>
 <td><button onclick="handleDelete(${index})" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
    </tr>
    `;
  });

  // console.log("This is finbal" + htcounter);

  tableId.innerHTML = str;
  displayTotalHours.innerHTML = calculateHours() + sumHours;
  // console.log(taskArray);
};

const handleOnClick = (i) => {
  //   alert("Hello");
  //   console.log(i);

  const modifiedarray = taskArray.splice(i, 1);
  // const modifiedarray = taskArray.filter((item, findex, arr) => {
  //   return i === findex;
  // });

  //   why do we spread
  // we spread to get the object inside an array

  badArray.push(modifiedarray[0]);
  calcualteBadHours();

  // sumHours = calculateHours() + calcualteBadHours();
  // console.log(sumHours);
  // console.log(badArray);

  // taskArray.splice(i, 1);
  display();
  displayBadItem();

  //   console.log(badArray);
};

const handleDelete = (i) => {
  taskArray.splice(i, 1);
  console.log(taskArray);
  display();
  displayBadItem();
};

const displayBadItem = () => {
  // console.log(badArray);
  let str = "";

  badArray.map((displ, index) => {
    // console.log(item);
    str += `

    <tr>
    <td>1</td>
  <td>${displ.task}</td>
    <td>${displ.hour} </td>
    <td><button onclick="handleTaskDelete(${index})" class="btn btn-warning "><i class="fa-solid fa-arrow-left"> </i></button> </td>
 <td><button onclick class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
    </tr>
    `;
    badtableId.innerHTML = str;
  });

  disaplyBadHours.innerHTML = calcualteBadHours();
};

const handleTaskDelete = () => {
  badArray.splice(i, 1);
  displayBadItem();
};

// create a function to add the hours from the array and return the total

const calculateHours = () => {
  const toalhours = taskArray.reduce((acc, item) => {
    acc = acc + +item.hour;

    return acc;
  }, 0);
  return toalhours;
};

const calcualteBadHours = () => {
  const totalBadHours = badArray.reduce((acc, item) => {
    acc = acc + +item.hour;

    return acc;
  }, 0);

  return totalBadHours;
};
