
//RENDER THE DOM//
$( document ).ready( function(){
  addButtonFunc();
  renderLists();
  $('body').on('click', '.doneButton', doneStatus)
});
//RENDER THE DOM//


// RENDER THE TO DO LIST//
function renderLists(){
  $.ajax({
    type: 'GET',
    url: '/toDO'
  }).then(function(response) {
    $('#toDos').empty();
    for (let toDo of response) {
      if(toDo.status == 'To Do'){
      $('#toDos').append(`
        <tr>
          <td>${toDo.toDoItem}</td>
          <td><button data-id=${toDo.id} class="doneButton">Done</button></td>
          <td><button data-id=${toDo.id} class="deleteButton">Delete</button></td>
        </tr>
    `);
      }else{
        $('#toDos').append(`
        <tr class="done">
          <td>${toDo.toDoItem}</td>
          <td>Done</td>
          <td><button data-id=${toDo.id} class="deleteButton">Delete</button></td>
        </tr>
    `);
    // $('.done').css("background-color", "green");
    $('.done').css("color", "green");
      }
    console.log(toDo.id)
    }
  }).catch(function(error){
    console.log('error in GET', error);
  });
} //END RENDER//



//CREATE LIST ITEM//
function addButtonFunc() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    let ItemToSend = {
      toDoItem: $('#toDoIn').val(),
      status: 'To Do'
    };
    saveListItem(ItemToSend);
  }); 
}
//END CREATE LIST ITEM//


//ITEM POST ROUTE//
function saveListItem( newItem ){
  console.log(newItem);
  $.ajax({
    type: 'POST',
    url: '/toDo',
    data: newItem,
    }).then(function(response) {
      renderLists();
    }).catch(function(error) {
      console.log(error)
    });
}
//ITEM POST ROUTE//



//ITEM PUT ROUTE//
function doneStatus() {
  let idToUpdate = $(this).data().id;
  $.ajax({
    method: 'PUT',
    url: `/toDo/${idToUpdate}`,
    data: {
      status: 'Done'
    }
  }).then((response) => {
    console.log(idToUpdate)

    renderLists();
  }).catch((error) => {
    console.log(error);
  })
}
//END ITEM PUT ROUTE//


//ITEM DELETE ROUTE//

//END ITEM DELETE ROUTE//
