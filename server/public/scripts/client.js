
//RENDER THE DOM//
$( document ).ready( function(){
  renderLists();
});
//RENDER THE DOM//


// RENDER THE TO DO LIST//
function renderLists(){
  console.log( 'in getKoalas' );
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
          <td>${toDo.status}</td>
          <td><button data-id=${toDo.id} class="doneButton">Done</button></td>
          <td><button data-id=${toDo.id} class="deleteButton">Delete</button></td>
        </tr>
    `);
      }else{
        $('#toDos').append(`
        <tr>
          <td>${toDo.toDoItem}</td>
          <td>${toDo.status}</td>
          <td><button data-id=${toDo.id} class="deleteButton">Delete</button></td>
        </tr>
    `);
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
      name: $('#toDoIn').val(),
      age: 'To DO'
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