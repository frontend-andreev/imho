<script>
import { Bar } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";
import ChartjsPluginStacked100 from "chartjs-plugin-stacked100";
export default {
  extends: Bar,
  data() {
    return {
      options: {
        plugins: {
          stacked100: { enable: true, replaceTooltipLabel: true },
          datalabels: {
            color: "#fff",
          },
        },
        elements: {
          bar: {
            radius: 10,
          },
        },
        scales: {
          paddingLeft: 100,
          yAxes: [
            {
              ticks: {
                display: false,
                beginAtZero: true,
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
                display: true,
                maxRotation: 0,
                fontSize: this.$route.query.period != "month" ? 12 : 8,
                callback: function (label) {
                  if (/\s/.test(label)) {
                    return label.split(" ");
                  } else {
                    return label;
                  }
                },
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
  computed: {
    getValues() {
      let res = [];

      this.labels.forEach(() => {
        res.push(2000);
      });
      return res;
    },
    labels() {
      let period = this.$route.query.period;
      if (period == "week") {
        return [
          "01.02.2022 (32)",
          "02.02.2022 (13)",
          "03.02.2022 (62)",
          "03.02.2022 (13)",
          "05.02.2022 (69)",
          "06.02.2022 (99)",
          "07.02.2022 (12)",
        ];
      } else if (period == "year") {
        return [
          "Январь (32)",
          "Февраль (32)",
          "Март (32)",
          "Апрель (32)",
          "Май (32)",
          "Июнь (32)",
          "Июль (32)",
          "Август (32)",
          "Сентябрь (32)",
          "Октябрь (32)",
          "Ноябрь (32)",
          "Декабрь (32)",
        ];
      } else if (period == "all") {
        return ["2021(39 778)", "2022(13 978)", "2023(65 571)"];
      }
      return [
        "01.02.2022 (32)",
        "02.02.2022 (13)",
        "03.02.2022 (62)",
        "03.02.2022 (13)",
        "05.02.2022 (69)",
        "06.02.2022 (99)",
        "07.02.2022 (12)",
        "01.02.2022 (32)",
        "02.02.2022 (13)",
        "03.02.2022 (62)",
        "03.02.2022 (13)",
        "05.02.2022 (69)",
        "06.02.2022 (99)",
        "07.02.2022 (12)",
        "01.02.2022 (32)",
        "02.02.2022 (13)",
        "03.02.2022 (62)",
        "03.02.2022 (13)",
        "05.02.2022 (69)",
        "06.02.2022 (99)",
        "07.02.2022 (12)",
        "01.02.2022 (32)",
        "02.02.2022 (13)",
        "03.02.2022 (62)",
        "03.02.2022 (13)",
        "05.02.2022 (69)",
        "06.02.2022 (99)",
        "07.02.2022 (12)",
      ];
    },
    values() {
      let period = this.$route.query.period;
      if (period == "week") {
        return {
          top: [20, 3, 19, 1, 14, 76, 4],
          bottom: [12, 10, 43, 12, 55, 23, 8],
        };
      } else if (period == "month") {
        return {
          top: [
            20, 3, 19, 1, 14, 76, 4, 20, 3, 19, 1, 14, 76, 4, 20, 3, 19, 1, 14,
            76, 4, 20, 3, 19, 1, 14, 76, 4,
          ],
          bottom: [
            12, 10, 43, 12, 55, 23, 8, 12, 10, 43, 12, 55, 23, 8, 12, 10, 43,
            12, 55, 23, 8, 12, 10, 43, 12, 55, 23, 8,
          ],
        };
      } else if (period == "year") {
        return {
          top: [20, 3, 19, 1, 14, 76, 4, 20, 3, 19, 1, 14],
          bottom: [12, 10, 43, 12, 55, 23, 8, 12, 10, 43, 12, 55]
        }
      } else {
        return {
          top: [27010, 3096, 19785],
          bottom: [12768, 10876, 43786]
        }
      }
    },
  },
  methods: {
    createGraph() {
      this.renderChart(
        {
          labels: this.labels,
          datasets: [
            {
              label: "Red Sales",
              data: this.values.bottom,
              backgroundColor: "#B5E2F5",
              borderWidth: 1,
              categoryPercentage: 1,
              borderRadius: 15,
            },
            {
              label: this.labels,
              data: this.values.top,
              backgroundColor: "#69C4E9",
              borderWidth: 1,
              categoryPercentage: 1,
              borderRadius: 15,
            },
          ],
        },
        this.options
      );
    },
  },
  mounted() {
    this.addPlugin(ChartDataLabels);
    this.addPlugin(ChartjsPluginStacked100);
    this.createGraph();
  },
  watch: {
    labels() {
      this.createGraph();
    },
  },
};
</script>