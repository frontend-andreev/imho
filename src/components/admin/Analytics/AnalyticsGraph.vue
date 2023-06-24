<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  data() {
    return {
      options: {
        layout: {},
        elements: {
          point: {
            radius: 3,
          },
          line: {
            tension: 0,
          },
        },
        scales: {
          paddingLeft: 100,

          yAxes: [
            {
 
              ticks: {
                mirror: true,
                stepSize: 1000,
                max: 2000,
                beginAtZero: true,
                callback: (value) => (value == 0 ? "" : value),
                z: 999,
                labelOffset: 12
              },
              gridLines: {
                display: true,
                drawOnChartArea: false,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.renderChart(
      {
        labels: ["1", "2", "3"],
        datasets: [
          {
            data: [1000, 1900, 2000],
            fill: true,
            borderColor: "rgba(0,141,196, 1)",
            backgroundColor: "rgb(230,243,249)",
            borderRadius: 0,
            borderWidth: 3,
          },
        ],
      },
      this.options
    );
  },
};
</script>