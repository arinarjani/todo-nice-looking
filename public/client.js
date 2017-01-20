function initialize() {
  // get all the elements on the page
  var input   = document.getElementById('txt-input'),
      addBtn  = document.getElementById('add-btn'),
      list    = document.getElementById('list'),
      todo    = null;
      
      addBtn.onclick = addTodo;
      
      input.onkeypress = function(event) {
        if ( event.which === 13 ) {
          addTodo();
        }
      }
      
      function addTodo() {
        var li = document.createElement('li');
        todo = input.value;
        if (todo === '') {
          return false;
        }
        
        li.textContent = todo;
        list.appendChild(li);
        input.value = '';
        li.onclick = deleteTodo;
      }
      
      function deleteTodo() {
        var ul = this.parentNode;
        ul.removeChild(this);
      }
      
      
}

window.onload = initialize;