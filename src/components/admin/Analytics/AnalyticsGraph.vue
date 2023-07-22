<script>
import { Line } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default {
  extends: Line,
  data() {
    return {
      options: {
        plugins: {
          datalabels: {
            display: false
          },
        },
        layout: {
          padding: {
            right: 4,
          },
        },
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
                labelOffset: 12,
              },
              gridLines: {
                display: false,
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
  methods: {
    createGraph() {
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
      this.chart.update();
    },
  },
  computed: {
    chart() {
      return this._data._chart;
    },
  },
  mounted() {
    this.addPlugin(ChartDataLabels);
    this.createGraph();
  },
  // watch: {
  //   chart(){
  //     this.changed = true
  //     if (this.changed) {
  //       this.chart.destroy()
  //       console.log(125);
  //       this.createGraph()
  // }
  //   }
  // },
};
</script>