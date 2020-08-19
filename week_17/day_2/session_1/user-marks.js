class fetchData {
    constructor() {

        Object.defineProperty(this, "length", {
            value: 0,
            enumerable: false,
            writable: true
        })

    }

    fetchStudentData(studentName, marksData) {
        this[this.length] = {
            id: this.length + 1,
            studentName: studentName,
            marks: marksData
        }
        this.length++
        return (this.length)
    }
    fetchAverage(studentName) {
        for (let a = 0; a < this.length; a++) {
            if (this[a].studentName == studentName) {
                return this[a]
            }
        }
    }

    getStudentDetails(studentName) {
        for (let a = 0; a < this.length; a++) {
            if (this[a].studentName == studentName) {
                return this[a]
            }
        }
    }

 

    fetchTopStudents() {
        let total = 0
        let index = 0
        for (let a = 0; a < this.length; a++) {
            if ((this[a].marks.english + this[a].marks.science + this[a].marks.mathematics) > total) {
                total = this[a].marks.english + this[a].marks.science + this[a].marks.mathematics
                index = a
            }
        }
        return this[index]
    }
}



let studentData

handelSubmit = () => {
    event.preventDefault()
    let studentName = document.getElementById("studentName").value
    let marks_eng = Number(document.getElementById("marksEnglish").value)
    let marks_science = Number(document.getElementById("marksScience").value)
    let marks_math = Number(document.getElementById("marksMaths").value)

        marksData = {english:marks_eng,
                            science:marks_science,
                            mathematics:marks_math}

        studentData.fetchStudentData(studentName, marksData)

        update_select_elemet()
        console.log(studentName,marksData)
        console.log(studentData)
    }

handleUpdate = () => {
    let lbl = document.getElementById("select_student").value
    let target = document.getElementById("student_detail")
    for(let a = 0 ; a < studentData.length; a++){
        if(lbl == studentData[a].studentName){
            target.innerHTML = `<p>${studentData[a].studentName}</p>
                                <p>English Marks = ${studentData[a].marks.english}<br>
                                    Science Marks = ${studentData[a].marks.science}<br>
                                    Mathematics Marks = ${studentData[a].marks.mathematics}</p>`
        }
    }
}

topStudent = () => {
    let top = studentData.fetchTopStudents()
    let target = document.getElementById("top_student")
    if(top != null){
        
    target.innerHTML = `<p class="h4">${top.studentName}</p>
    <p>English Marks = ${top.marks.english}<br>
    Science Marks = ${top.marks.science}<br>
    Mathematics Marks = ${top.marks.mathematics}</p>`
    }
    else {target.innerHTML = `<p class="h1">No Data is Found</p>`}
    
}
add = () => {
    studentData = new fetchData()

    let submit = document.getElementById("submit_form")
    submit.addEventListener("submit", handelSubmit)

    let search = document.getElementById("topStudent")
    search.addEventListener("click", topStudent)

    update_select_elemet()

    let select_student = document.getElementById("select_student")
    select_student.addEventListener("change",handleUpdate)

}
update_select_elemet = () => {
    const target = document.getElementById("select_student")
    target.innerHTML = ""
    let opt1 = document.createElement("option")
    opt1.value = ""
    opt1.textContent = "Choose"
    let res = document.createDocumentFragment()
    res.append(opt1)
    for(let a = 0 ; a < studentData.length; a++){
        let opt = document.createElement("option")
        opt.value = studentData[a].studentName
        opt.textContent = studentData[a].studentName
        res.append(opt)
    }
    target.append(res)
}

window.addEventListener("DOMContentLoaded", add)