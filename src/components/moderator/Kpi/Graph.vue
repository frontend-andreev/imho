<script>
import { Bar } from "vue-chartjs";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import ChartjsPluginStacked100 from "chartjs-plugin-stacked100";
export default {
  extends: Bar,
  data() {
    return {
      options: {
        cornerRadius: 16,
        plugins: {
          stacked100: { enable: true, replaceTooltipLabel: true },
          datalabels: {
            color: "#fff",
            formatter: (value, ctx) => {
              if (ctx.dataset.label == undefined) {
                return this.values.bottom[ctx.dataIndex].toLocaleString();
              } else {
                return this.values.top[ctx.dataIndex].toLocaleString();
              }
            },
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
                fontColor: document
                  .querySelector("body")
                  .classList.contains("dark")
                  ? "#fff"
                  : "#231F20",
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
          labels: {
            fontColor: "red",
          },
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
          bottom: [12, 10, 43, 12, 55, 23, 8, 12, 10, 43, 12, 55],
        };
      } else {
        return {
          top: [27010, 3096, 19785],
          bottom: [12768, 10876, 43786],
        };
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
              data: this.values.bottom,
              backgroundColor: "#B5E2F5",
              color: "red",
              borderWidth: 1,
              categoryPercentage: 1,
              borderRadius: 100,
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
    Chart.elements.Rectangle.prototype.draw = function () {
      const { ctx } = this._chart;
      const vm = this._view;
      let left;
      let right;
      let top;
      let bottom;
      let signX;
      let signY;
      let borderSkipped;
      let { borderWidth } = vm;

      // If radius is less than 0 or is large enough to cause drawing errors a max
      // radius is imposed. If cornerRadius is not defined set it to 0.
      let { cornerRadius } = this._chart.config.options;
      if (cornerRadius < 0) {
        cornerRadius = 0;
      }
      if (typeof cornerRadius === "undefined") {
        cornerRadius = 0;
      }

      if (!vm.horizontal) {
        left = vm.x - vm.width / 2;
        right = vm.x + vm.width / 2;
        top = vm.y;
        bottom = vm.base;
        signX = 1;
        signY = bottom > top ? 1 : -1;
        borderSkipped = vm.borderSkipped || "bottom";
      }

      // Canvas doesn't allow us to stroke inside the width so we can
      // adjust the sizes to fit if we're setting a stroke on the line
      if (borderWidth) {
        // borderWidth shold be less than bar width and bar height.
        const barSize = Math.min(
          Math.abs(left - right),
          Math.abs(top - bottom)
        );
        borderWidth = borderWidth > barSize ? barSize : borderWidth;
        const halfStroke = borderWidth / 2;
        // Adjust borderWidth when bar top position is near vm.base(zero).
        const borderLeft =
          left + (borderSkipped !== "left" ? halfStroke * signX : 0);
        const borderRight =
          right + (borderSkipped !== "right" ? -halfStroke * signX : 0);
        const borderTop =
          top + (borderSkipped !== "top" ? halfStroke * signY : 0);
        const borderBottom =
          bottom + (borderSkipped !== "bottom" ? -halfStroke * signY : 0);
        // not become a vertical line?
        if (borderLeft !== borderRight) {
          top = borderTop;
          bottom = borderBottom;
        }
        // not become a horizontal line?
        if (borderTop !== borderBottom) {
          left = borderLeft;
          right = borderRight;
        }
      }

      ctx.beginPath();
      ctx.fillStyle = vm.backgroundColor;
      ctx.strokeStyle = 'transparent';
      // ctx.lineWidth = -10;

      // Corner points, from bottom-left to bottom-right clockwise
      // | 1 2 |
      // | 0 3 |
      const corners = [
        [left, bottom],
        [left, top],
        [right, top],
        [right, bottom],
      ];

      // Find first (starting) corner with fallback to 'bottom'
      const borders = ["bottom", "left", "top", "right"];
      let startCorner = borders.indexOf(borderSkipped, 0);
      if (startCorner === -1) {
        startCorner = 0;
      }

      function cornerAt(index) {
        return corners[(startCorner + index) % 4];
      }

      // Draw rectangle from 'startCorner'
      let corner = cornerAt(0);
      ctx.moveTo(corner[0], corner[1]);

      for (let i = 1; i < 4; i++) {
        corner = cornerAt(i);
        let nextCornerId = i + 1;
        if (nextCornerId == 4) {
          nextCornerId = 0;
        }

        const width = corners[2][0] - corners[1][0];
        const height = corners[0][1] - corners[1][1];
        const x = corners[1][0];
        const y = corners[1][1];

        let radius = cornerRadius;

        // Fix radius being too large
        if (radius > Math.abs(height) / 1.5) {
          radius = Math.floor(Math.abs(height) / 1.5);
        }
        if (radius > Math.abs(width) / 1.5) {
          radius = Math.floor(Math.abs(width) / 1.5);
        }
        if (vm.datasetLabel) {
          ctx.moveTo(x + radius, y);
          ctx.lineTo(x + width - radius, y);
          ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
          ctx.quadraticCurveTo(x + width, y + height, x + width, y + height);
          ctx.quadraticCurveTo(x, y + height, x, y + height);
          ctx.lineTo(x, y + radius);
          ctx.quadraticCurveTo(x, y, x + radius, y);
        } else {
          //Positive Value
          ctx.moveTo(x + radius, y);

          // top right
          ctx.quadraticCurveTo(x + width, y, x + width, y);

          ctx.lineTo(x + width, y + height - radius);

          // bottom right
          ctx.quadraticCurveTo(
            x + width,
            y + height,
            x + width - radius,
            y + height
          );

          ctx.lineTo(x + radius, y + height);

          // bottom left
          ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
          ctx.quadraticCurveTo(x, y, x, y);
        }
      }

      ctx.fill();
      if (borderWidth) {
        ctx.stroke();
      }
    };
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