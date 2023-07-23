const ctx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['20', '25', '30', '35', '40', '60','65'],
      datasets: [{
        label:['Employer K 73,500'],
        data: ['40','50','60','65','70','80','90'],
        borderWidth:0,
        backgroundColor: [
          'darkBlue',
        ],
        barThickness: 30,
        
      },
        {label:'Employer K 73,500',
        data: ['40','50','60','65','70','80','90'],
        borderWidth: 0,
        backgroundColor: [
          'blue',
        ],
        barThickness: 30,
      },
      { label:'Total Interest K 244,313',
        data: ['40','50','60','65','70','80','120'],
        borderWidth: 0,
        backgroundColor: [
         'skyBlue',
        ],
        barThickness:30,
      },]
    },

    options: {
      maintainAspectRatio : false,
      responsive: true,
      onResize: function(chart, size) {
    },
      scales: {
        x:{
          stacked:true,
          gridLines: false,
          ticks: { maxTicksLimit: 10},
          grid:{display:false},
      },
       y: { 
        beginAtZero : true,
        stacked:true,
        grid:{display:true,},
        ticks:{
        stepSize:100,
        callback: ((context, index)=>{
          return "$" + context
        })
      },
          },
      },
    
    },

  });
  





function rangeSlider(value){
  document.getElementById('rangeValue').innerHTML = value;
}
          
function rangeSlider2(value2){
  document.getElementById('rangeValue2').innerHTML = value2;
}

function rangeSlider(value){
  document.getElementById('rangeValue').innerHTML = value;
}