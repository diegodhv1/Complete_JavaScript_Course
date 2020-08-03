
var budgetController = (function () {

  return {
    addItem: function () {
    }
  }

})();

var UIController = (function () {
  return {
    getInputs: function () {
      return {
        type: document.querySelector('.add__type').value,
        description: document.querySelector('.add__description').value,
        value: document.querySelector('.add__value').value
      }
    }
  }
})();

var controller = (function (budgetCtrl, UICtrl) {

  var ctrlAddItem = function () {
    var input = UICtrl.getInputs();
   var obj= document.querySelectorAll('.add__description, .add__value');
  //  console.log(obj);
    field = Array.prototype.slice.call(obj);
  //  console.log(field);

  field.forEach(element => {
    console.log(element.value);
  });
   
   //obj.value = "";
    
    
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function (event) {
    if(event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  })

})(budgetController, UIController);
