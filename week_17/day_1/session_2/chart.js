let myChart
            let data = [{ "id": 1, "date": "Fri Jun 12 2020 14:53:15 GMT+0530", "sales": "₹206982" },
            { "id": 2, "date": "Sat Jun 13 2020 14:53:15 GMT+0530", "sales": "₹117589" },
            { "id": 3, "date": "Sun Jun 14 2020 14:53:15 GMT+0530", "sales": "₹86435" },
            { "id": 4, "date": "Mon Jun 15 2020 14:53:15 GMT+0530", "sales": "₹126552" },
            { "id": 5, "date": "Tue Jun 16 2020 14:53:15 GMT+0530", "sales": "₹64079" },
            { "id": 6, "date": "Wed Jun 17 2020 14:53:15 GMT+0530", "sales": "₹105265" },
            { "id": 7, "date": "Thu Jun 18 2020 14:53:15 GMT+0530", "sales": "₹156243" },
            { "id": 8, "date": "Fri Jun 19 2020 14:53:15 GMT+0530", "sales": "₹146727" },
            { "id": 9, "date": "Sat Jun 20 2020 14:53:15 GMT+0530", "sales": "₹265726" },
            { "id": 10, "date": "Sun Jun 21 2020 14:53:15 GMT+0530", "sales": "₹144392" },
            { "id": 11, "date": "Mon Jun 22 2020 14:53:15 GMT+0530", "sales": "₹86920" },
            { "id": 12, "date": "Tue Jun 23 2020 14:53:15 GMT+0530", "sales": "₹178592" },
            { "id": 13, "date": "Wed Jun 24 2020 14:53:15 GMT+0530", "sales": "₹189293" },
            { "id": 14, "date": "Thu Jun 25 2020 14:53:15 GMT+0530", "sales": "₹285135" },
            { "id": 15, "date": "Fri Jun 26 2020 14:53:15 GMT+0530", "sales": "₹190731" },
            { "id": 16, "date": "Sat Jun 27 2020 14:53:15 GMT+0530", "sales": "₹255364" },
            { "id": 17, "date": "Sun Jun 28 2020 14:53:15 GMT+0530", "sales": "₹136079" },
            { "id": 18, "date": "Mon Jun 29 2020 14:53:15 GMT+0530", "sales": "₹53839" },
            { "id": 19, "date": "Tue Jun 30 2020 14:53:15 GMT+0530", "sales": "₹58374" },
            { "id": 20, "date": "Wed Jul 01 2020 14:53:15 GMT+0530", "sales": "₹58856" },
            { "id": 21, "date": "Thu Jul 02 2020 14:53:15 GMT+0530", "sales": "₹93477" },
            { "id": 22, "date": "Fri Jul 03 2020 14:53:15 GMT+0530", "sales": "₹273749" },
            { "id": 23, "date": "Sat Jul 04 2020 14:53:15 GMT+0530", "sales": "₹244317" },
            { "id": 24, "date": "Sun Jul 05 2020 14:53:15 GMT+0530", "sales": "₹185956" },
            { "id": 25, "date": "Mon Jul 06 2020 14:53:15 GMT+0530", "sales": "₹148110" },
            { "id": 26, "date": "Tue Jul 07 2020 14:53:15 GMT+0530", "sales": "₹229041" },
            { "id": 27, "date": "Wed Jul 08 2020 14:53:15 GMT+0530", "sales": "₹98151" },
            { "id": 28, "date": "Thu Jul 09 2020 14:53:15 GMT+0530", "sales": "₹171087" },
            { "id": 29, "date": "Fri Jul 10 2020 14:53:15 GMT+0530", "sales": "₹99468" },
            { "id": 30, "date": "Sat Jul 11 2020 14:53:15 GMT+0530", "sales": "₹207144" }]

            let records = []
            let res = []
            let sold_data = []
            let changeColor = []

            function fetchData() {

                records.length = 0
                res.length = 0
                sold_data.length = 0
                changeColor.length = 0

                data.forEach(elem => { let x = new Date(elem.date); records.push(x.getDate()); res.push(elem.date) })

                data.forEach(elem => { let x = elem.sales.split("₹"); sold_data.push(Number(x[1])) })

                data.forEach(elem => {
                    let x = elem.sales.split("₹");
                    if (Number(x[1]) > 100000 && Number(x[1]) < 200000) {
                        changeColor.push(`#C6FF00`)
                    }
                    else if (Number(x[1]) > 150000) {
                        changeColor.push(`#FF4081`)
                    }
                    else if (Number(x[1]) <= 100000) {
                        changeColor.push(`#00B0FF`)
                    }
                })
            }


            let createChart = {
                type: "bar",
                data: {
                    labels: records,
                    datasets: [
                        {
                            label: "Sales in Rupees",
                            data: sold_data,
                            backgroundColor: changeColor,
                            borderColor: "rgb(0, 0, 0)",
                            borderWidth: 1,
                        }
                    ],
                },
                options: {

                    scales: {
                        yAxes: [
                            {
                                ticks: {

                                    beginAtZero: true,

                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Rupees',
                                    fontSize: 20,
                                }

                            },
                        ],
                        xAxes: [
                            {

                                scaleLabel: {
                                    display: true,
                                    labelString: 'Date',
                                    fontSize: 20,
                                }

                            },
                        ],
                    },


                    title: {
                        display: true,
                        text: "SALES CHART",
                        fontSize: 30

                    },
                    legend: {
                        position: 'top',
                        labels: {
                            fontColor: '#000',
                            backgroundColor: "#2348"
                        }
                    },

                }

            };




            function updateSelect() {
                const target = document.getElementById("select")
                target.innerHTML = ""
                let opt1 = document.createElement("option")
                opt1.value = ""
                opt1.textContent = "Choose..."
                let flag = document.createDocumentFragment()
                flag.append(opt1)
                records.forEach((elem, index) => {

                    let opt = document.createElement("option")
                    opt.value = elem
                    opt.textContent = elem
                    flag.append(opt)
                })
                target.append(flag)
            }
            function renderUpdate() {
                let base = document.getElementById("select").value
                let sales_value = document.getElementById("sales_edit").value
                let value
                data.forEach((elem, index) => { let x = new Date(elem.date); if (Number(base) == x.getDate()) { value = index } })
                data[value].sales = "₹" + sales_value
                fetchData()
                myChart.update();
            }
            function inputUpdate() {
                let index = Number(event.target.value)
                let value
                data.forEach(elem => { let x = new Date(elem.date); if (index == x.getDate()) { value = elem.sales.split("₹") } })
                document.getElementById("sales_edit").value = value[1]
            }

            window.addEventListener("load", function () {

                fetchData()

                let target = document.getElementById("myChart");
                myChart = new Chart(target, createChart);



                let edit = document.getElementById("select")
                edit.addEventListener("change", inputUpdate)
                edit.addEventListener("mouseenter", updateSelect)

                let update = document.getElementById("update_sales")
                update.addEventListener("click", renderUpdate)
            });