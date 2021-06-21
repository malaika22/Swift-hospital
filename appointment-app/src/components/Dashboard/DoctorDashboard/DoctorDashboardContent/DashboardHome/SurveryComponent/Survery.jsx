import React from 'react'
import {Line} from 'react-chartjs-2'
import './styles.scss'

const data = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    "May",
    "June",
    "July"
  ],
  datasets: [{
    type: 'line',
    label: 'Admitted Patients',
    data: [65,59, 80, 81, 56, 55, 40],
    borderColor: '#32C9DC',
    backgroundColor: 'rgb(178, 235, 242, 0.5)',
    fill: true,
    lineTension : 0.5
    //cubicInterpolationMode : "default"
  }, {
    type: 'line',
    label: 'Discharged Patients',
    data: [28,48, 40, 19, 86, 27, 90],
    fill: true,
    borderColor: '#ED4981',
    backgroundColor: "rgb(248, 187, 208, 0.5)" ,
    lineTension : 0.5
    //cubicInterpolationMode: "default"
  }]
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Survery = () =>{
    return(
        <div className="survey-container">
           <div className="chart-title">
                Hospital Survey
           </div>
           <div className="chart-div">
                <Line 
                data={data}
                options={options}
                height={80}
                />
           </div>
        </div>
    )
}

export default Survery;