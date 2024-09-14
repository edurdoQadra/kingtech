<template>

<div class="relative">
    <!-- Botón que despliega el menú -->
    <button @click="isDropdownOpen = !isDropdownOpen" class="bg-blue-500 text-white px-4 py-2 rounded">
      Filtros
    </button>
  
    <!-- Contenedor del menú desplegable -->
    <div v-if="isDropdownOpen" class="absolute bg-white shadow-md rounded-lg mt-2 p-4 w-64">
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
  
      <div class="flex justify-between">
        <button @click="applyFilter" class="bg-blue-500 text-white px-4 py-2 rounded mr-2">Filtrar</button>
        <button @click="clearFilter" class="bg-gray-300 text-gray-800 px-4 py-2 rounded">Limpiar</button>
      </div>
    </div>
  </div>
  
</template>

<script setup>
import { ref } from "vue";


    const isDropdownOpen = ref(false);
    const selectedMonth = ref(null);
    const startDate = ref(null);
    const endDate = ref(null);

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

    const applyFilter = () => {
      // Lógica para aplicar los filtros
    };

    const clearFilter = () => {
      selectedMonth.value = null;
      startDate.value = null;
      endDate.value = null;
    };
</script>