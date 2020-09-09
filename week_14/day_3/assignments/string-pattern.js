let str = ['Harsha','ankita','Gopesh','Sweety','Gargi','appa','anwesa']
const res = str.filter(item=>(item[0]=="a") || (item[item.length-1]=="a"))
console.log(res)