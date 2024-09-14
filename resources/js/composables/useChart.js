import { ref, onMounted, watch } from 'vue';
import { Chart as ChartJS } from 'chart.js';

export function useChart(props) {
  const chartCanvasRef = ref(null);
  let chartInstance = null;

  onMounted(() => {
    const ctx = chartCanvasRef.value.getContext('2d');
    chartInstance = new ChartJS(ctx, {
      type: 'bar',
      data: props.chartData,
      options: props.chartOptions,
    });
  });

  watch(() => props.chartData, (newData) => {
    if (chartInstance) {
      chartInstance.data = newData;
      chartInstance.update();
    }
  });

  return {
    chartCanvasRef,
  };
}
