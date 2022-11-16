// caputring the form data from the users

const tableId = document.getElementById("tabletoshow");

const badtableId = document.getElementById("baddisplay");

const taskArray = [];
const badArray = [];

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
  //   console.log(taskArray);
  display();
  //   console.log(tableID);
};

const display = () => {
  let str = "";
  let dummyhr = "";
  taskArray.map((item, index) => {
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

  tableId.innerHTML = str;
  console.log(taskArray);
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
  console.log(badArray);

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
  console.log(badArray);
  let str = "";

  badArray.map((displ, index) => {
    // console.log(item);
    str += `

    <tr>
    <td>1</td>
  <td>${displ.task}</td>
    <td>${displ.hour} </td>
    <td><button onclick="handleTaskDelete(${index})" class="btn btn-warning ">Move</button> </td>
 <td><button onclick class="btn btn-danger">D</button></td>
    </tr>
    `;
    badtableId.innerHTML = str;
  });
};

const handleTaskDelete = () => {
  badArray.splice(i, 1);
  displayBadItem();
};
