const ctx2 = document.getElementById('doughnut').getContext('2d');
const ctx3 = document.getElementById('doughnut2').getContext('2d');
const ctx4 = document.getElementById('doughnut3').getContext('2d');

const doughnutLabel = {
  id: 'doughnutLabel',
  afterDatasetsDraw(chart, args, pluginOptions){
    const { ctx } = chart;
    ctx.textAlign ='center';
    ctx.textBaseline ='middle';
    ctx.font='bold 16px gilroy';
    const text = '78%';
    const textwidth = ctx.measureText(text).width;
    console.log(textwidth)
    console.log(chart.getDatasetMeta(0).data[0])
    const x= chart.getDatasetMeta(0).data[0].x;
    const y= chart.getDatasetMeta(0).data[0].y;
    ctx.fillText(text, x, y);
    // ctx.fillRect(x, y, 10, 10)
        }
    }

const doughnut = new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: [],
      datasets: [{
        label:['My First Dataset'],
        data: ['78','22'],
        borderWidth:.5,
        cutout:'70%',
        backgroundColor: [
          'aquamarine',
          'rgba(127, 255, 212, 0.271)'
        ],
        barThickness: 30,
      }]
    },

    options: {
   
      scales: {
        x:{
          display: false
        }
      },
    },
    plugins:[doughnutLabel]
  });

 
  
  const doughnutLabel2 = {
    id: 'doughnutLabel2',
    afterDatasetsDraw(chart, args, pluginOptions){
      const { ctx } = chart;
      ctx.textAlign ='center';
      ctx.textBaseline ='middle';
      ctx.font='bold 16px gilroy';
      const text = '95%';
      const textwidth = ctx.measureText(text).width;
      console.log(textwidth)
      console.log(chart.getDatasetMeta(0).data[0])
      const x= chart.getDatasetMeta(0).data[0].x;
      const y= chart.getDatasetMeta(0).data[0].y;
      ctx.fillText(text, x, y);
      // ctx.fillRect(x, y, 10, 10)
          }
      }



  const doughnut2 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
      labels: [],
      datasets: [{
        label:['My First Dataset'],
        data: ['90','10'],
        borderWidth:.5,
        cutout:'70%',
        backgroundColor: [
          'aquamarine',
          'rgba(127, 255, 212, 0.271)'
        ],
        barThickness: 30,
      },]
    },
    options: {
        scales: {
          x:{
              display: false
          }
        },
      },
    plugins:[doughnutLabel2]
    
    });
  

    const doughnutLabel3 = {
      id: 'doughnutLabel3',
      afterDatasetsDraw(chart, args, pluginOptions){
        const { ctx } = chart;
        ctx.textAlign ='center';
        ctx.textBaseline ='middle';
        ctx.font='bold 16px gilroy';
        const text = '59%';
        const textwidth = ctx.measureText(text).width;
        console.log(textwidth)
        console.log(chart.getDatasetMeta(0).data[0])
        const x= chart.getDatasetMeta(0).data[0].x;
        const y= chart.getDatasetMeta(0).data[0].y;
        ctx.fillText(text, x, y);
        // ctx.fillRect(x, y, 10, 10)
            }
        }
  

    const doughnut3 = new Chart(ctx4, {
        type: 'doughnut',
        data: {
          labels: [],
          datasets: [{
            label:['My First Dataset'],
            data: ['59','41'],
            borderWidth:.5,
            cutout:'70%',
            backgroundColor: [
              'aquamarine',
              'rgba(127, 255, 212, 0.271)'
            ],
            barThickness: 30,
          },]
        },
        options: {
            scales: {
              x:{
                  display: false
              }
            },
          },
          plugins: [doughnutLabel3],
        });
      