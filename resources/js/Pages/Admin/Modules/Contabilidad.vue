<template>
  <AdminLayout>
    <div class="flex flex-col h-screen">
      <!-- Contenedor de navegación fijo en la parte superior -->
      <div class="bg-gray-300 p-4 shadow-md flex items-center justify-between fixed top-0 left-0 w-full z-10">
        <div class="flex flex-col items-start w-full">
          <label for="opciones" class="text-gray-700 font-bold mb-2">Selecciona una opción:</label>
          <select v-model="selected" id="opciones" class="border border-gray-300 p-2 w-full">
            <option value="">Selecciona una opción</option>
            <option v-for="option in options" :value="option.value" :key="option.value">{{ option.text }}</option>
          </select>
        </div>
      </div>
      
      <div class="pt-10"> <!-- Ajusta el valor según el tamaño de tu barra de navegación -->
      <div class="flex justify-center mt-8">
        <div class="w-full max-w-lg">
          <Transactions v-if="selected === '1'" :datos="transactions"></Transactions>
          <TransactionDetails v-else-if="selected === '2'" :datos="transactionsdeetail"></TransactionDetails>
          <Utilidad v-else-if="selected === '3'" :datos="utilitys"></Utilidad>
          <Plataformas v-else-if="selected === '4'" :datos="platforms"></Plataformas>
        </div>
      </div>
    </div>
    </div>
  </AdminLayout>
</template>
  
  <script setup>
  import {ref} from 'vue'
  import { onMounted, onBeforeMount } from 'vue';

  let transactions =ref([]);
  let transactionsdeetail =ref([]);
  let utilitys =ref([]);
  let platforms =ref([]);

// Agregar este componente relacionado al tabla : ( plataformas_sede ) 
import AdminLayout from '../../../Layouts/AdminLayout.vue'; // Asegúrate de importar correctamente tu componente de layout
import Utilidad from '../../../Pages/Admin/Utilitys/Index.vue'; // Importa tus componentes correspondientes
import TransactionDetails from '../../../Pages/Admin/TransacitonDetails/Index.vue'; // Importa tus componentes correspondientes
import Transactions from '../../../Pages/Admin/Transactions/Index.vue'; // Importa tus componentes correspondientes
import Plataformas from '../../../Pages/Admin/Platforms/Index.vue'; // Importa tus componentes correspondientes


  const props = defineProps({
    transacciones:Array,
    transaccionesdetail:Array,
    utilidades: Array,  //Definir la estructura esperada de los datos recibidos
    plataformas:Array
  });
  const options = [
    { value: '1', text: 'Tabla Transacciones' },
    { value: '2', text: 'Tabla Detalle Transacciones' },
    { value: '3', text: 'Detalle Utilidades' },
    { value: '4', text: 'Lista Plataformas' }
  ];
  
  let selected = ref('');
 
  
 
  onBeforeMount(() => {

    if (  props.transacciones && props.transaccionesdetail && props.utilidades && props.plataformas) {

            transactions =props.transacciones;
            transactionsdeetail =props.transaccionesdetail;
            utilitys =props.utilidades;
            platforms =props.plataformas;

          
    } else {

            console.log('mensaje de error de envio de data desde inertia');
            
    }
    
  });
  onMounted(() => {
        console.log('Datos recibidos desde Inertia transacciones:', props.transacciones  );
        console.log('Datos recibidos desde Inertia transaccionesdetail:',  props.transaccionesdetail  );
        console.log('Datos recibidos desde Inertia utilidades:',  props.utilidades );
        console.log('Datos recibidos desde Inertia plataformas:',props.plataformas );
  });
  </script>
  
  <style>
  /* Estilos opcionales */
  </style>
  