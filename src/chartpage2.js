import { Chart } from "frappe-charts"
//import { Chart } from "frappe-charts/dist/frappe-charts.min.esm";
import { skipPartiallyEmittedExpressions } from "typescript";

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
            "code": "Sektori",
            "selection": {
              "filter": "item",
              "values": [
                "S13"
              ]
            }
          },
          {
            "code": "Tiedot",
            "selection": {
              "filter": "item",
              "values": [
                "Ratio_D"
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
        "code": "Velallissektori",
        "selection": {
          "filter": "item",
          "values": [
            "S13_C"
          ]
        }
      },
      {
        "code": "Vara",
        "selection": {
          "filter": "item",
          "values": [
            "F2TF4"
          ]
        }
      },
      {
        "code": "Vuosineljännes",
        "selection": {
          "filter": "item",
          "values": [
            "2000Q1",
            "2001Q1",
            "2002Q1",
            "2003Q1",
            "2004Q1",
            "2005Q1",
            "2006Q1",
            "2007Q1",
            "2008Q1",
            "2009Q1",
            "2010Q1",
            "2011Q1",
            "2012Q1",
            "2013Q1",
            "2014Q1",
            "2015Q1",
            "2016Q1",
            "2017Q1",
            "2018Q1",
            "2019Q1",
            "2020Q1",
            "2021Q1",
            "2022Q1"
          ]
        }
      }
    ],
    "response": {
      "format": "json-stat2"
    }
}

const submitDataButton = document.getElementById("submit-data")
const exportImageButton = document.getElementById("selectBtn2")


submitDataButton.addEventListener("click", function(event) {
  event.preventDefault()
  let e = document.getElementById("selectBtn")
  var buttonSelectedValue = e.options[e.selectedIndex].text

  var exportChoiceValue = exportImageButton.options[exportImageButton.selectedIndex].text
  console.log(exportChoiceValue)

  let exportValue = 0
  if (exportChoiceValue == "Dont export") {
    exportValue = 0
  }
  else if (exportChoiceValue == "Export image") {
    exportValue = 1
  }

  console.log(buttonSelectedValue)
  if(buttonSelectedValue == "Deficit and Debt") {
    buildChart(exportValue)
  }
  else if(buttonSelectedValue == "Debt in million") {
    buildChart2(exportValue)
  }
  
  
})

// // first query codes

const getData = async() => {
    const url = "https://statfin.stat.fi:443/PxWeb/api/v1/fi/StatFin/jali/statfin_jali_pxt_122g.px"

    const res = await fetch(url, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(jsonQuery1)
    })
    if(!res.ok) {
        return;
    }
    
    const data1 = await res.json()

    
    return data1
}



const buildChart = async (exportvalue) => {
    const dataa = await getData()
    console.log("First chart")
    const labelss = Object.values(dataa.dimension.Vuosi.category.label)

    const amounts = dataa.value
  
    const amounts2 = [
        {
            name: "Debt in procents",
            values: amounts
        },
    ]

    const chartData = {
        labels: labelss,
        datasets: amounts2
    }


    const chart = new Chart("#chart", {
        title: "General government EDP deficit and debt by Year",
        type: "bar",
        data: chartData,
        height: 450,
        xIsSeries: 0,
        colors: ["#63d0ff"]
    })

    setTimeout(() => {
      if(exportvalue == 1) {
            chart.export()
          }
          else {
            console.log("chart not exported")
          }
    }, 2000)
    
    
}
// first query codes done


// second query codes
const getData2 = async() => {
  const url = "https://statfin.stat.fi:443/PxWeb/api/v1/en/StatFin/jyev/statfin_jyev_pxt_11yv.px"

  const res = await fetch(url, {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(jsonQuery2)
  })
  if(!res.ok) {
      return;
  }
  
  const data1 = await res.json()
  console.log(data1)

  return data1
}



const buildChart2 = async (exportvalue) => {
  const dataa = await getData2()
  console.log("Second chart")
  const labelss = Object.values(dataa.dimension.Vuosineljännes.category.label)
  const amounts = dataa.value

  const amounts2 = [
      {
          name: "Dept in millions of euros",
          values: amounts
      },
  ]

  const chartData = {
      labels: labelss,
      datasets: amounts2
  }


  const chart = new Chart("#chart", {
      title: "Debt in millions per year, first quarter only",
      type: "bar",
      data: chartData,
      height: 450,
      xIsSeries: 0,
      colors: ["#63d0ff"]
  })

  setTimeout(() => {
  if(exportvalue == 1) {
    chart.export()
  }
  else {
    console.log("chart not exported")
  }}, 2000)
  
  
}

let e = document.getElementById("selectBtn")
var buttonSelectedValue = e.options[e.selectedIndex].text

console.log(buttonSelectedValue)
if(buttonSelectedValue == "Deficit and Debt") {
  buildChart()
}
else if(buttonSelectedValue == "Dept in million") {
  console.log("toimii")
  buildChart2()
}