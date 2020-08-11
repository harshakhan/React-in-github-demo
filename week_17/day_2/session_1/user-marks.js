class fetchData {
    constructor() {

        Object.defineProperty(this, "length", {
            value: 0,
            enumerable: false,
            writable: true
        })

    }

    fetchStudentData(studentName, marks_data) {
        this[this.length] = {
            id: this.length + 1,
            studentName: studentName,
            marks: marks_data
        }
        this.length++
        return (this.length)
    }

    getStudentDetails(studentName) {
        for (let a = 0; a < this.length; a++) {
            if (this[a].studentName == studentName) {
                return this[a]
            }
        }
    }

    fetchAverage(studentName) {
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



let student_data

handelSubmit = () => {
    event.preventDefault()
    let studentName = document.getElementById("studentName").value
    let marks_eng = Number(document.getElementById("marksEnglish").value)
    let marks_science = Number(document.getElementById("marksScience").value)
    let marks_math = Number(document.getElementById("marksMaths").value)

        marks_data = {english:marks_eng,
                            science:marks_science,
                            mathematics:marks_math}

        student_data.fetchStudentData(studentName, marks_data)

        update_select_elemet()
        console.log(studentName,marks_data)
        console.log(student_data)
    }

topStudent = () => {
    let top = student_data.fetchTopStudents()
    let target = document.getElementById("top_student")
    if(top != null){
        
    target.innerHTML = `<p class="h4">${top.studentName}</p>
    <p>English Marks = ${top.marks.english}<br>
    Science Marks = ${top.marks.science}<br>
    Mathematics Marks = ${top.marks.mathematics}</p>`
    }
    else {target.innerHTML = `<p class="h1">No Data is Found</p>`}
    
}

handleUpdate = () => {
    let lbl = document.getElementById("select_student").value
    let target = document.getElementById("student_detail")
    for(let a = 0 ; a < student_data.length; a++){
        if(lbl == student_data[a].studentName){
            target.innerHTML = `<p>${student_data[a].studentName}</p>
                                <p>English Marks = ${student_data[a].marks.english}<br>
                                    Science Marks = ${student_data[a].marks.science}<br>
                                    Mathematics Marks = ${student_data[a].marks.mathematics}</p>`
        }
    }
}

update_select_elemet = () => {
    const target = document.getElementById("select_student")
    target.innerHTML = ""
    let opt1 = document.createElement("option")
    opt1.value = ""
    opt1.textContent = "Choose..."
    let fag = document.createDocumentFragment()
    fag.append(opt1)
    for(let a = 0 ; a < student_data.length; a++){
        let opt = document.createElement("option")
        opt.value = student_data[a].studentName
        opt.textContent = student_data[a].studentName
        fag.append(opt)
    }
    target.append(fag)
}



add = () => {
    student_data = new fetchData()

    let submit = document.getElementById("submit_form")
    submit.addEventListener("submit", handelSubmit)

    let search = document.getElementById("topStudent")
    search.addEventListener("click", topStudent)

    update_select_elemet()

    let select_student = document.getElementById("select_student")
    select_student.addEventListener("change",handleUpdate)

}

window.addEventListener("DOMContentLoaded", add)