//Submits on spacebar
function inputKeyUp(e) {
    e.which = e.which || e.keyCode;
    if(e.which == 32) {
        calculate()
    }
}



function calculate (number) {
  var money = parseInt($('input#money_to_invest').val());
  var years = parseInt($('input#years').val());
  var total = money * Math.pow(1.1, years);


	$('#years_text').text(years);
  $('#money_in_the_bank').text(Math.floor(total));

  //*****MY FUNCTION**//
  ///Figures out net pay
  let days_worked = parseInt($('#days').val());
  let pay = (days_worked*77);
  let pay_at = Math.round(pay-(pay*.2));

  //List of expenses
  let rent = {
  	name:'rent',
    expected:250,
    actual:Math.floor(pay_at*.4)}
  let groceries = {
  	name:'groceries',
    expected:40,
    actual:Math.floor(pay_at*.1)
  }
  let debt = {
  	name:'debt',
    expected:50,
    actual:Math.floor(pay_at*.05)
  }
  let bills = {
  	name:'bills',
    expected:50,
    actual:Math.floor(pay_at*.15)
  }
    let invest = {
  	name:'invest',
    expected:'none',
    actual:Math.floor(pay_at*.1)
  }
  let excess = {
  	name:'excess',
    expected:'none',
    actual:Math.floor(pay_at*.2)
  }
  let expenses = [rent,groceries,debt,bills];


   //Displays How much you get paid
   $('#netpay').text(pay_at);

  //Displays expenses
  $('#rent').text(rent.actual);
  $('#groceries').text(groceries.actual);
  $('#debt').text(debt.actual);
  $('#bills').text(bills.actual);
  $('#excess').text(excess.actual);
  $('#invest').text(invest.actual);

   //Tells if im on budget with my expenses
  expenses.map(function(obj){
  	if(obj.expected>obj.actual){
    	alert('You didnt make enough for ' + obj.name)
    }

  	else if(obj.expected<obj.actual){
			alert('You can afford to spend more on '+ obj.name);
}
  })


}
