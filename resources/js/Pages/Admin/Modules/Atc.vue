<template>
  <AdminLayout>
    <div class="flex flex-col h-screen">
      <!-- Contenedor de navegación -->
      <div class="bg-gray-300 p-4 shadow-md flex items-center justify-between">
        <div class="flex flex-col items-start">
          <label for="opciones" class="text-gray-700 font-bold mb-2">Selecciona una opción:</label>
          <!--  -->
        <select v-model="selected" id="opciones" class="border border-gray-300 p-2 w-full max-w-xs">
          <option value="">Selecciona un Módulo</option>
          <option v-for="option in options" :value="option.value" :key="option.value">{{ option.text }}</option>
        </select>
        <!--  -->
      </div>
    </div>

    <!-- Espacio reservado para la barra de navegación fija -->
    <div class="pt-10"> <!-- Ajusta el valor según el tamaño de tu barra de navegación -->
      <div class="flex justify-center mt-8">
        <div class="w-full max-w-lg">
          <!--  -->
          <Clientes v-if="selected === '1'" :datos="clientes"></Clientes>
          <Personas v-else-if="selected === '2'" :datos="personas"></Personas>
          <Locales v-else-if="selected === '3'" :datos="locales"></Locales>
          <!--  -->
        </div>
      </div>
    </div>

  </div>
  </AdminLayout>
</template>
<script setup>
import { ref } from 'vue';
import { onMounted, onBeforeMount } from 'vue';
import AdminLayout from '../../../Layouts/AdminLayout.vue';
import Clientes from '../../../Pages/Admin/Clients/Index.vue';
import Personas from '../../../Pages/Admin/Persons/Index.vue';
import Locales from '../../../Pages/Admin/Stores/Index.vue';

let clientes = ref([]);
let personas = ref([]);
let locales = ref([]);

const props = defineProps({
  clientes: Array,
  locales: Array,
  personas: Array
});

const options = [
  { value: '1', text: 'Clientes' },
  { value: '2', text: 'Personas' },
  { value: '3', text: 'Locales' }
];

let selected = ref('');

onBeforeMount(() => {
  if (props.clientes && props.locales && props.personas) {
    clientes.value = props.clientes;
    personas.value = props.personas;
    locales.value = props.locales;
  } else {
    console.error('No se recibieron datos válidos desde Inertia:', props.clientes);
  }
});

onMounted(() => {
  console.log('Datos recibidos desde Inertia:', props.clientes, props.locales, props.personas);
});
</script>

<style scoped>
/* Estilos opcionales si es necesario */
</style>
