import { Chart } from "frappe-charts/dist/frappe-charts.min.esm";

const jsonQuery1 = {
    "query": [
        {
            "code": "Vuosi",
            "selection": {
                "filter": "item",
                "values": [
                    "2000",
                    "2001",
                    "2002",
                    "2003",
                    "2004",
                    "2005",
                    "2006",
                    "2007",
                    "2008",
                    "2009",
                    "2010",
                    "2011",
                    "2012",
                    "2013",
                    "2014",
                    "2015",
                    "2016",
                    "2017",
                    "2018",
                    "2019",
                    "2020",
                    "2021"
                ]
            }
        },
        {
            "code": "Alue",
            "selection": {
                "filter": "item",
                "values": [
                    "SSS"
                ]
            }
        },
        {
            "code": "Tiedot",
            "selection": {
                "filter": "item",
                "values": [
                    "vm01"
                ]
            }
        }
    ],
    "response": {
        "format": "json-stat2"
    }
}

const jsonQuery2 = {
    "query": [
        {
            "code": "Vuosi",
            "selection": {
                "filter": "item",
                "values": [
                    "2000",
                    "2001",
                    "2002",
                    "2003",
                    "2004",
                    "2005",
                    "2006",
                    "2007",
                    "2008",
                    "2009",
                    "2010",
                    "2011",
                    "2012",
                    "2013",
                    "2014",
                    "2015",
                    "2016",
                    "2017",
                    "2018",
                    "2019",
                    "2020",
                    "2021"
                ]
            }
        },
        {
            "code": "Alue",
            "selection": {
                "filter": "item",
                "values": [
                    "SSS"
                ]
            }
        },
        {
            "code": "Tiedot",
            "selection": {
                "filter": "item",
                "values": [
                    "vm11"
                ]
            }
        }
    ],
    "response": {
        "format": "json-stat2"
    }
}




const getData = async() => {
    const url = "https://statfin.stat.fi/PxWeb/api/v1/en/StatFin/synt/statfin_synt_pxt_12dy.px"

    const res = await fetch(url, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(jsonQuery1)
    })
    if(!res.ok) {
        return;
    }
    const data1 = await res.json()
    console.log(data1)
    const res2 = await fetch(url, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(jsonQuery2)
    })
    if(!res2.ok) {
        return;
    }
    const data2 = await res2.json()
    console.log(data2)
    let data3 = {data1, data2}
    return data3
}



const buildChart = async () => {
    const dataa = await getData()
    console.log("aa")
    console.log(dataa)
    const data = dataa.data1
    const labelss = Object.values(data.dimension.Vuosi.category.label)

    const amounts = data.value
    const amounts3 = dataa.data2.value
  
    const amounts2 = [
        {
            name: "Births",
            values: amounts
        },
        {
            name: "Deaths",
            values: amounts3
        }
    ]

    const chartData = {
        labels: labelss,
        datasets: amounts2
    }


    const chart = new Chart("#chart", {
        title: "Births and deaths in whole country",
        type: "bar",
        data: chartData,
        height: 450,
        colors: ["#63d0ff", "#363636"],
    })
    
}


buildChart()
console.log("apina")