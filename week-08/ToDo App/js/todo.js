const addButton = document.querySelector('button');
const inputField = document.querySelector('input');
const shortInput = document.querySelector('#short-input');



// APPLICATION OBJECT
var App = function(todos) {

  this.init = function() {
    var pass = this;
    this.ajax = new Ajax();
    this.ajax.list(this.HTMLBuilder);

    // INPUTFIELD EVENTS
      // :: ADD BUTTON
    addButton.addEventListener('click', function() {
      if (inputField.value.length > 2) {
        app.ajax.add( function() {
          app.ajax.list(pass.HTMLBuilder);
        }, {text: inputField.value});
        inputField.value = "";
      } else {
          shortInput.style.display = 'inherit';
      }
    });
    // KEYBOARD :: ENTER
    inputField.addEventListener('keypress', function(event) {
      var key = event.which || event.keycode;
      if (key == 13 && inputField.value.length > 2) {
        app.ajax.add( function() {
          app.ajax.list(pass.HTMLBuilder);
        }, {text: inputField.value});
        inputField.value = "";
      } else if (inputField.value.length > 1) {
          shortInput.style.display = 'none';
      } else if (inputField.value.length <= 1) {
          shortInput.style.display = 'inherit';
      }
    });
  };

  // HTML CREATOR
  this.HTMLBuilder = function(todoList) {
    var mainBox = document.querySelector('.todo-list');
    var application = document.querySelector('.application');

    if (mainBox) {
      application.removeChild(mainBox);
    }
    var todoBox = document.createElement('div')
    todoBox.classList.add("todo-list");
    application.appendChild(todoBox);

    todoList.reverse().forEach(function(item, index) {
      if (index < 6) {
        const newDivTag = document.createElement('div');
        const newDivTag2 = document.createElement('div');
        const newDivTag3 = document.createElement('div');
        const newH2Tag = document.createElement('h2');
        const newImgTag = document.createElement('img');
        shortInput.style.display = 'none';

        todoBox.appendChild(newDivTag).classList.add('one-todo');
        newDivTag.appendChild(newH2Tag).textContent = todoList[index].text.substring(0, 25);
        newDivTag.appendChild(newDivTag2).classList.add('todo-img-box');

        newDivTag2.appendChild(newImgTag).classList.add('bin');
        newImgTag.setAttribute('src', 'imgs/garbage.svg');
        newDivTag2.appendChild(newDivTag3).classList.add('checkbox');
        if (todoList[index].completed) {
          newDivTag3.classList.add('checked')
        }

        app.binEvents(todoList[index], newImgTag, app.HTMLBuilder, newDivTag);
        app.checkboxEvents(todoList[index], newDivTag3, app.HTMLBuilder);
      };
    });
  };

  // BIN :: DELETE EVENTS
  this.binEvents = function(todo, bin, callback, parentDiv) {
    bin.addEventListener('click', function() {
      parentDiv.classList.add('off');
      app.ajax.remove( function() {
        app.ajax.list(callback);
      }, todo.id);
    })
  };

  // CHECKBOX :: PUT EVENTS
  this.checkboxEvents = function(todo, checkbox, callback) {
    checkbox.addEventListener('click', function() {
      if (checkbox.classList.contains('checked')) {
        checkbox.classList.remove('checked');
      } else {
        checkbox.classList.add('checked');
      }
      app.ajax.update( function() {
        app.ajax.list(callback);
      }, {text: todo.text, completed: !todo.completed}, todo.id)
    });
  };
};


// AJAX OBJECT
var Ajax = function() {
  this.list = function(callbackFunc) {
    this.collector("GET", '/todos', null, callbackFunc);
  }
  this.add = function(callbackFunc, data) {
    this.collector('POST', '/todos', data, callbackFunc);
  }
  this.update = function(callbackFunc, data, id) {
    this.collector('PUT', '/todos/' + id, data, callbackFunc);
  }
  this.remove = function(callbackFunc, id) {
    this.collector('DELETE', '/todos/' + id , null, callbackFunc);
  }



  // SERVER REQUEST
  this.collector = function(method, resource, data, callbackFunc) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, 'https://mysterious-dusk-8248.herokuapp.com' + resource, true);
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    data = (data) ? JSON.stringify(data) : null;
    xhr.send(data);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        callbackFunc(JSON.parse(xhr.responseText));
        }
      }
    };
  };

const app = new App();
setInterval(function loop() {
  app.init()
}, 1000);



// BACKGROUND COLOR CHANGING EFFECT
const colors = [
'rgb(230, 175, 75)',
'rgb(166, 230, 75)',
'rgb(75, 230, 184)',
'rgb(203, 75, 230)',
'rgb(230, 75, 75)'
]
var counter = 0;
const colorTimer = setInterval(backgroundEffect, 8000);

function backgroundEffect() {
  if (counter >= colors.length) {
    counter = 0;
  }
  document.body.style.backgroundColor = colors[counter];
  counter++;
};
