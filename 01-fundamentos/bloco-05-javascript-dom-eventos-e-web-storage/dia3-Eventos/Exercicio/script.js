function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');

    if (day === 24 | day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 | day === 11 | day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  };
};

createDaysOfTheMonth();

function btnHoliday(btnName) {
  let btnContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let buttonID = 'btn-holiday';

  newButton.innerHTML = btnName;
  newButton.id = buttonID;
  btnContainer.appendChild(newButton);
}
btnHoliday("Feriados");


function displayHoliday() {
  let getBtnHoliday = document.getElementById('btn-holiday');
  let getHoliday = document.querySelectorAll('.holiday');
  let bg = 'rgb(238,238,238)';
  let newColor = 'black';


  getBtnHoliday.addEventListener('click', function(){
  for(let index = 0; index < getHoliday.length; index += 1) {
    if(getHoliday[index].style.backgroundColor === newColor) {
      getHoliday[index].style.backgroundColor = bg;
    }
    else {
      getHoliday[index].style.backgroundColor = newColor;
    }
  }

})
}
displayHoliday();


function btnSextou(btnSexta) {
  let btn = document.querySelector('.buttons-container');
  let newBtn = document.createElement('button');
  let btnID = 'btn-friday';

  newBtn.id = btnID;
  newBtn.innerHTML = btnSexta;
  btn.appendChild(newBtn);
}

btnSextou('Sexta-feira');

function displayFriday(fridaysArray) {
  let getBtnFriday = document.getElementById('btn-friday');
  let getFridays = document.getElementsByClassName('friday');
  let text = 'Sextou';


  getBtnFriday.addEventListener('click', function(){
    for(let index = 0; index < getFridays.length; index += 1) {
      if(getFridays[index].innerHTML !== text) {
      getFridays[index].innerHTML = text;
      }
      else {
        getFridays[index].innerHTML = fridaysArray[index];
      }
    }

  })

}

let dezFridays = [ 4, 11, 18, 25 ];
displayFriday(dezFridays);

  
  
  function zoomOut() {

    let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(evento){
    evento.target.style.fontSize = '30px';
    evento.target.style.fontWeight = 600;
  })
  }
  function zoomIn() {
    let days = document.querySelector('#days');
    days.addEventListener('mouseout', function(evento){
      evento.target.style.fontSize ='20px';
      evento.target.style.fontWeight = 200;
    })
  }


  zoomOut();
  zoomIn();

function addTasks(taskName) {
  let tasks = document.querySelector('.my-tasks');
  let newTask = document.createElement('span');

  newTask.innerHTML = taskName;
  tasks.appendChild(newTask);


}
addTasks('Projeto');

function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
};

newTaskDiv('green');

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();

function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

addNewTask();