let tasks=[]
let favorite=[]
let count=tasks.length


const createTask =title=>({
title,
status:false,
id:count++
})

const addToTasks=payload=>{
tasks.push(payload)
}

const addTodo = () => {
//console.log(event.key)
if(event.key!=='Enter'){
    return
}

let value=event.target.value;
let payload=createTask(value)
addToTasks(payload)
const list=document.querySelector('.task-list')
renderList(tasks,list)
}
const createTaskContainer=task=>{
const div =document.createElement('div')
div.setAttribute('class','task-item col-5')
div.name=task.id

const checkbox =document.createElement('input')
checkbox.type='checkbox'
checkbox.name='check'
checkbox.style.flex='1'

if(task.status){
    checkbox.checked=true
}


const title = document.createElement('p')
title.textContent=task.title
title.style.flex='5'
title.name='edit'
title['data-toggle']='modal'
title['data-target']='#edit'


const star=document.createElement('div')
star.setAttribute("class","fas fa-star")
star.style.flex='1'
star.name='favorite'
if(favorite.includes(task.id)){
    star.style.color='yellow'
}
const del=document.createElement('div')
del.setAttribute("class","far fa-trash-alt")
del.name='del'
del.style.flex='1'
del.style.paddingLeft='20px'
del.style.color='red'


div.append(checkbox,title,star,del)
return div

}
window.addEventListener("DOMContentLoaded", ()=>
{
let input=document.querySelector(".container>input")

input.addEventListener("keyup",addTodo)
const list=document.querySelector('.task-list')
renderList(tasks,list)
list.addEventListener('click',handleListClick)
const listCompleted=document.querySelector('.task-list-completed')
listCompleted.addEventListener('click',handleListClick)
})

function renderList(tasks,target,completed=false){
target.innerHTML=""
if(tasks.length===0){
    target.textContent="No tasks yet"
    return
}

const fragment=document.createDocumentFragment()

tasks.forEach(item=> {
    // if(!completed && item.status){
    //     return
    // }
    const cont=createTaskContainer(item)
    fragment.append(cont)
})
target.append(fragment)

$('#myModal').on('shown.bs.modal',function(){
$('#myInput').trigger('focus')
})
}

function handleListClick(){
let id=event.target.parentElement.name
console.log(event.target.name)

switch(event.target.name){
    case 'check':
        handleStatusChange(id)
        break
    case 'favorite':
        handleFavorite(id)
        break
    case 'edit':
        handleEdit(id)
        break
    case 'del':
        handleDelete(id)
        break
    default:
        return
}
}

function handleStatusChange(id){
tasks=tasks.map(item =>
    item.id===id?
    {
    ...item,status
        :!item.status} 
        :item  
    )
// renderApp()
    const list=document.querySelector('.task-list')
renderList(tasks,list)
}
function  handleFavorite(id){
let ind=favorite.indexOf(id)
if(ind!=-1){
favorite=favorite.filter(item=>item!==ind)
}
else{
  favorite.push(id)
}

//   renderApp()
const list=document.querySelector('.task-list')
renderList(tasks,list)
}

function handleEdit(id){
let modal=document.querySelector('#edit')
modal.style.opacity=1
modal.style.display='block'
//let classes=modal.classList

let input=modal.querySelector('input')
input.value=tasks.find(item=>item.id===id).title;
input.name = id
modal.addEventListener('click',handleModal)
}

function handleModal(){

if(event.target.name ==='close'){
    this.style.opacity=0
    this.style.display='none'
}
console.log(event.target.name)

if(event.target.name !=='saveData'){
    return 
}
else{
    let input = this.querySelector('input')

    const {name:id,value}=input
    console.log(id,value)

    tasks = tasks.map ( item =>
        item.id === Number(id)  ? {...item , title:value } : item)
        console.log(tasks)

    this.removeEventListener('click',handleModal)
    this.style.opacity=0
    this.style.display='none'
    // renderApp()
    const list=document.querySelector('.task-list')
    console.log(list)
    renderList(tasks,list)

}


}


function handleDelete(id){
tasks=tasks.filter(item=>item.id!==id)
//console.log(tasks)
const list=document.querySelector('.task-list')
renderList(tasks,list)
}