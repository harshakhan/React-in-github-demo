import{getTasks,addToTasks} from './init.js'
    function renderDOM(){
        var res = document.getElementById('tasks')
        res.innerHTML = ''
        var div = document.createElement('div')
        getTasks().forEach(function(item){
            var task = document.createElement('p')
            task.textContent = item.title
            if(item.status){
                task.setAttribute('style','text-decoration: line-through;')
            }
            div.append(task)
        })
        res.append(div)
    }
        export function addTask(){
        var title = document.getElementById('input').value
        var task ={
            title: title,
            status : false
        }
        addToTasks(task)
        renderDOM()
    }
    
    renderDOM()




