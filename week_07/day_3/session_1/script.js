var button = document.getElementById('button');

button.addEventListener('click', function () {
  // extract name from input field
  var name = document.getElementById('name').value;
  // create a text node for name
  var nameNode = document.createTextNode(name);
  // extract email form input field
  var email = document.getElementById('email').value;
  // create a text node for email
  var emailNode = document.createTextNode(email);

  var opt = document.getElementById('option').value;

  var optNode = document.createTextNode(opt);



  //create a td for name tdname
  var tdName = document.createElement('td');
  //append nameNode to tdname
  tdName.appendChild(nameNode);
  //create a td for email tdemail
  var tdEmail = document.createElement('td');
  //append emailNode tdemail
  tdEmail.appendChild(emailNode);

  var tdOpt = document.createElement('td');
  tdOpt.appendChild(optNode);

  //create a tr element
  var tr = document.createElement('tr');
  // append tdname and tdemail to tr
  tr.appendChild(tdName);
  tr.appendChild(tdEmail);
  tr.appendChild(tdOption);
  tr.appendChild(tdOpt);  

  
  // select table and append tr to table
  var table = document.getElementById('table');
  table.appendChild(tr);
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('option').value = '';

});