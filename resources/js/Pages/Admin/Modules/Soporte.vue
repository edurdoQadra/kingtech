<template>
    <AdminLayout>
        <div class="flex flex-col h-screen">
      <!-- Contenedor de navegación -->
      <div class="bg-gray-300 p-4 shadow-md flex items-center justify-between">
        <div class="flex flex-col items-start">
              <label for="opciones" class="text-gray-700 font-bold mb-2 text-center">Selecciona una opción:</label>
              <select v-model="selected" id="opciones" class="border border-gray-300 p-2 w-full">
                  <option value="">Selecciona un Modulo</option>
                  <option v-for="option in options" :value="option.value" :key="option.value">{{ option.text }}</option>
              </select>
          </div>
          
 
      
        </div>
        </div>
        <div class="pt-10"> <!-- Ajusta el valor según el tamaño de tu barra de navegación -->
        <div class="flex justify-center mt-8">
            <div class="w-full max-w-lg">
            <Clientes v-if="selected === '1'" :datos="clientes"></Clientes>
            <Alertas v-else-if="selected === '2'" :datos="alertas"></Alertas>
        </div>
        </div>
    </div>
    </AdminLayout>
</template>
  
<script setup>

  import {ref} from 'vue'
  import { onMounted, onBeforeMount } from 'vue';
  import AdminLayout from '../../../Layouts/AdminLayout.vue'; // Asegúrate de importar correctamente tu componente de layout
  import Clientes from '../../../Pages/Admin/Clients/Index.vue'; // Importa tus componentes correspondientes
  import Alertas from '../../../Pages/Admin/Alerts/Index.vue'; // Importa tus componentes correspondientes
  //
  import NavLinkAdmin from "@/Components/NavLinkAdmin.vue";
  import DropdownLink from "@/Components/DropdownLink.vue";
  import Dropdown from "@/Components/Dropdown.vue";
  //
  let clientes=ref([]);
  let alertas=ref([]);

  
  const props = defineProps({
    clientes: Array, // Definir la estructura esperada de los datos recibidos
    alertas:Array,
  });

  const options = [
    { value: '1', text: 'Clientes' },
    { value: '2', text: 'Alertas' },
  ];
  
  let selected = ref('');

  onBeforeMount(() => {
    if ( props.clientes && props.alertas ) {
    
      clientes= props.clientes;
      alertas=props.alertas;
  
    } else {

      console.error('No se recibieron datos válidos desde Inertia:', props.clientes , props.alertas);
    }
  });
  //
  onMounted(() => {
   
      console.log('Datos recibidos desde Inertia:' + clientes, alertas );
    
  });

  </script>
  
  <style>
  /* Estilos opcionales */
  </style>
  