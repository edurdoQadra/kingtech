<script setup>
import { ref, onMounted } from 'vue';
import AdminLayout from "@/Layouts/AdminLayout.vue";

import "leaflet/dist/leaflet.css";
import * as L from 'leaflet';
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, BarController, BarElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, BarController, BarElement);

const myChart = ref(null);
const myChart2 = ref(null);
const myChart3 = ref(null);
const myChart4 = ref(null);
const initialMap = ref(null);

const startDate = ref('');
const endDate = ref('');
const selectedMonth = ref('');

const showFilters = ref(false); // Estado para controlar la visibilidad del dropdown

const toggleFilters = () => {
  showFilters.value = !showFilters.value;
};

const monthOptions = [
  { value: '', label: 'Elija una Sede' },
  { value: '1', label: 'Enero' },
  { value: '2', label: 'Febrero' },
  { value: '3', label: 'Marzo' },
  { value: '4', label: 'Abril' },
  { value: '5', label: 'Mayo' },
  { value: '6', label: 'Junio' },
  { value: '7', label: 'Julio' },
  { value: '8', label: 'Agosto' },
  { value: '9', label: 'Septiembre' },
  { value: '10', label: 'Octubre' },
  { value: '11', label: 'Noviembre' },
  { value: '12', label: 'Diciembre' },
];

onMounted(() => {
  // Initialize Leaflet map
  initialMap.value = L.map('map').setView([23.8041, 90.4152], 6);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(initialMap.value);

  // Initialize Charts
  const createChart = (context, data) => {
    new ChartJS(context, {
      type: 'bar',
      data,
      options: {
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  };

  const chartData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  createChart(myChart.value.getContext('2d'), chartData);
  createChart(myChart2.value.getContext('2d'), chartData);
  createChart(myChart3.value.getContext('2d'), chartData);
  createChart(myChart4.value.getContext('2d'), chartData);
});
</script>

<template>
  <AdminLayout>
    <div class="flex flex-col">
      <!-- Dropdown toggle button -->
      <div class="mb-4 flex justify-center">
        <button @click="toggleFilters" class="bg-blue-500 text-white px-4 py-2 rounded">
          {{ showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros' }}
        </button>
      </div>

      <!-- Filters Dropdown Section -->
      <div v-if="showFilters" class="bg-gray-100 p-4 rounded shadow-lg mb-4">
        <div class="flex flex-col">
          <div class="mb-4">
            <label for="monthSelect" class="block mb-2">Mes</label>
            <select v-model="selectedMonth" id="monthSelect" class="border p-2 rounded w-full">
              <option v-for="option in monthOptions" :key="option.value" :value="option.value">
                {{ option.label }}
              </option>
            </select>
          </div>

          <div class="mb-4">
            <label for="startDate" class="block mb-2">Fecha Inicio</label>
            <input type="date" v-model="startDate" id="startDate" class="border p-2 rounded w-full" />
          </div>

          <div class="mb-4">
            <label for="endDate" class="block mb-2">Fecha Fin</label>
            <input type="date" v-model="endDate" id="endDate" class="border p-2 rounded w-full" />
          </div>

          <div class="flex space-x-2">
            <button class="bg-blue-500 text-white px-4 py-2 rounded">Filtrar</button>
            <button class="bg-gray-300 text-gray-800 px-4 py-2 rounded">Limpiar</button>
          </div>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="grid grid-cols-2 gap-6 mb-4">
        <!-- First row -->
        <div class="flex flex-col space-y-4">
          <canvas ref="myChart" class="border w-full h-144"></canvas>
          <canvas ref="myChart2" class="border w-full h-144"></canvas>
        </div>

        <!-- Second row -->
        <div class="flex flex-col space-y-4">
          <canvas ref="myChart3" class="border w-full h-144"></canvas>
          <canvas ref="myChart4" class="border w-full h-144"></canvas>
        </div>
      </div>

      <!-- Leaflet Map Section -->
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-2">Interactive Leaflet Map</h3>
        <div id="map" class="h-144 w-full border"></div>
      </div>
    </div>
  </AdminLayout>
</template>

<style scoped>
/* Estilo adicional para asegurar que el mapa se muestre correctamente */
#map {
  height: 16rem; /* Ajusta según sea necesario */
  width: 100%;
}
</style>
