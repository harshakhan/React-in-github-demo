var button = document.getElementById('button');

button.addEventListener('click', function () {
  
  var name = document.getElementById('name').value;
 
  var nameNode = document.createTextNode(name);

  var opt = document.getElementById('option').value;

  var optNode = document.createTextNode(opt);

  var classtyp = document.getElementById('select-class').value;
  var classtypNode = document.createTextNode(classtyp);


  
  var age = document.getElementById('age').value;
  
  var ageNode = document.createTextNode(age);
 
  var science =document.getElementById('science').value;

  var scienceNode = document.createTextNode(science);

  var english = document.getElementById('english').value;

  var englishNode = document.createTextNode(english);

  var math = document.getElementById('math').value;

  var mathNode = document.createTextNode(math);


  var total = Number(science) + Number(english) + Number(math);
  
  var totalNode =document.createTextNode(total)

  var avg = total / 3;
  
  var avgNode =document.createTextNode(Math.floor(avg));

  
  


  

  var tdName = document.createElement('td');
  
  tdName.appendChild(nameNode);

  var tdOpt = document.createElement('td');
  tdOpt.appendChild(optNode);

  var tdClasstyp = document.createElement('td');
  tdClasstyp.appendChild(classtypNode);
  
  var tdAge = document.createElement('td');
 
  tdAge.appendChild(ageNode);
  

  var tdScience=document.createElement('td');

  tdScience.appendChild(scienceNode);

  var tdEnglish = document.createElement('td');
  tdEnglish.appendChild(englishNode);

  var tdMath=document.createElement('td');
  tdMath.appendChild(mathNode);

  var tdTotal = document.createElement('td');
  tdTotal.appendChild(totalNode);

  var tdAvg = document.createElement('td');
  tdAvg.appendChild(avgNode);


  




  var tr = document.createElement('tr');
  
  tr.appendChild(tdName);
  tr.appendChild(tdOpt);
  tr.appendChild(tdClasstyp);
  tr.appendChild(tdAge);
  tr.appendChild(tdScience);
  tr.appendChild(tdEnglish);
  tr.appendChild(tdMath);
  tr.appendChild(tdTotal);
  tr.appendChild(tdAvg);
 
  
  
  
  var table = document.getElementById('table');
  table.appendChild(tr);
  document.getElementById('name').value = '';
  document.getElementById('option').value = '';
  document.getElementById('select-class').value = '';
  document.getElementById('age').value = '';
  document.getElementById('science').value = '';
  document.getElementById('english').value = '';
  document.getElementById('math').value = '';
  
  

});