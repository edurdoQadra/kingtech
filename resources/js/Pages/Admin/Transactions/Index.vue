<script setup>
  import axios from 'axios';
  import Swal from 'sweetalert2';
  import { ref, onMounted, onBeforeMount } from 'vue';
  import { sendRequest, confirmation, show_alert } from '../../../utils/functions';
  import { BASE_URL } from '../../../config';

  // DataTables and plugins
  import DataTable from 'datatables.net-vue3';
  import 'datatables.net-dt/css/dataTables.dataTables.css';
  import ButtonsHtml5 from 'datatables.net-buttons/js/buttons.html5';
  import 'datatables.net-buttons/js/buttons.print';
  import 'datatables.net-responsive-dt';
  import 'datatables.net-responsive-dt/css/responsive.dataTables.min.css';
  import Select from 'datatables.net-select';

  // Other components
  import Button from '@/Components/Button.vue';
  import datepicker from 'vue3-datepicker';

  // Setup DataTables
  DataTable.use(ButtonsHtml5);
  DataTable.use(Select);


    const props = defineProps({
        datos: Array,
    });

    const table=ref();
    const columns =ref([]);
    const buttons = ref([]);
    const transacciones = ref([]);
    const load = ref(false);
    const showModal = ref(false); // Variable para controlar la visibilidad del modal
    const modalTitle = ref(''); 
    const showModalEdit = ref(false); // Variable para controlar la visibilidad del modal
    const modalTitleEdit = ref(''); // Variable para almacenar el título del modal
    const filaSeleccionada = ref(false);
    const selectedDate = ref(new Date());
     const startDate = ref(new Date());
     const endDate = ref(new Date());

     const showModalUpload = ref(false);

    const openModalUpload = (title) => 
    {      
    modalTitleUpload.value = title;
    showModalUpload.value = true;  
    console.log('mensjae de exito');            
    };
/**************************************************************************************************************** */
/**************************************************************************************************************** */
    onBeforeMount(() => {
        transacciones.value = props.datos;
        console.log(transacciones);    
        });
        
    onMounted(() => {

        load.value = true;
        table.value.dt.on('deselect', handleRowSelectionDelete);
        table.value.dt.on('deselect', handleRowSelection);
    });

/**************************************************************************************************************** */

    const form = ref({
        id:''	,
        fecha:''	,
        codigo_sede	:'',
        ticket	:'',
        venta	:'',
        utilidad:''        
    });

/*****************************************************************************************************************/

    const formEdit = ref({
        id:''	,
        fecha:''	,
        codigo_sede	:'',
        ticket	:'',
        venta	:'',
        utilidad:'' 
    });
    
    

    DataTable.use(ButtonsHtml5);
    DataTable.use(Select);

/*****************************************************************************************************************/
columns.value = [{ data:null,render:function(data,type,row,meta)
    {return (meta.row+1)}},
    {data:'fecha'},
    {data:'codigo_sede'},
    {data:'ticket'},
    {data:'venta'},
    {data:'utilidad'},
   ];
/**************************************************************************************************************** */
buttons.value = [
    {
        title: 'Transaction',
        extend: 'excelHtml5',
        text: '<i class="fa-solid fa-file-excel"></i> Excel',
        className: 'bg-green-500 text-white px-4 py-2 rounded my-2 hover:bg-green-600 focus:outline-none'
    },
    // {
    //     title: 'Transaction',
    //     extend: 'pdfHtml5',
    //     text: '<i class="fa-solid fa-file-pdf"></i> PDF',
    //     className: 'bg-blue-500 text-white px-4 py-2 rounded my-2 hover:bg-blue-600 focus:outline-none'
    // },
    {
        title: 'Transaction',
        extend: 'print',
        text: '<i class="fa-solid fa-print"></i> PRINT',
        className: 'bg-gray-800 text-white px-4 py-2 rounded my-2 hover:bg-gray-900 focus:outline-none'
    },
    {
        title: 'Transaction',
        extend: 'copy',
        text: '<i class="fa-solid fa-copy"></i> COPY',
        className: 'bg-gray-400 text-white px-4 py-2 rounded my-2 hover:bg-gray-500 focus:outline-none'
    }
];   
/**************************************************************************************************************** */
const deleteCliente = () => {
    const selectedRows = table.value.dt.rows({ selected: true }).data().toArray();
    if (selectedRows.length > 0) {
        const id = selectedRows[0].id;
        const contacto = selectedRows[0].contacto;
        const alert = Swal.mixin({ buttonStyling: true });
        alert.fire({
            title: '¿Está seguro de querer borrar el registro ' + contacto+':' + id +'?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: '<i class="fa fa-solid fa-check"></i> Sí, borrar',
            cancelButtonText: '<i class="fa fa-solid fa-times"></i> Cancelar'

        }).then((result) => {
            if (result.isConfirmed) {
   // confirmation(plataforma, BASE_URL + '/transaction' + id, '');
   confirmation(plataforma, 'https://reportes.kingtech.pe/transaction' + id, '');
                        }
        });
    } else {
        let desc = 'Debe seleccionar una fila antes de poder borrarla';
        show_alert(desc, 'error', '');
    }
};
/**************************************************************************************************************** */
/******************************************Testear Nuevamente**************************************************** */
/**************************************************************************************************************** */
const openModal = (title) => 
{    
    modalTitle.value = title;
    showModal.value = true;  
    console.log('mensjae de exito');            
};
/**************************************************************************************************************** */
const openModalEdit = (title) => {

    const selectedRowsCount = table.value.dt.rows({ selected: true }).count();                
    if (selectedRowsCount === 0) {
        // Mostrar una alerta si no se ha seleccionado ninguna fila
        show_alert('Debe seleccionar una fila antes de editar', 'error', '');
        return;
    }
    const selectedRowsData = table.value.dt.rows({ selected: true }).data().toArray()[0];
    if (!selectedRowsData) {
        // Mostrar una alerta si selectedRowsData es undefined
        show_alert('No se encontraron datos para la fila seleccionada', 'error', '');
        return;
    }

    formEdit.value.fecha=selectedRowsData.fecha
    formEdit.value.codigo_sede=selectedRowsData.codigo_sede
    formEdit.value.ticket=selectedRowsData.ticket
    formEdit.value.venta=selectedRowsData.venta
    formEdit.value.utilidad=selectedRowsData.utilidad
   
    console.log(transacciones);
    modalTitleEdit.value = title;
    showModalEdit.value = true;  

};
/**************************************************************************************************************** */
const handleRowSelection = (event) => {

    const selectedRows = table.value.dt.rows({ selected: true }).count();

// Si hay filas seleccionadas, establecer filaSeleccionada en true
filaSeleccionada.value = selectedRows > 0;
};
/**************************************************************************************************************** */
const handleRowSelectionDelete = (event) => {

const selectedRows = table.value.dt.rows({ selected: true }).count();

// Si hay filas seleccionadas, establecer filaSeleccionada en true
filaSeleccionada.value = selectedRows > 0;
};
/**************************************************************************************************************** */
const update = () => {
    // Obtenemos las filas seleccionadas en la tabla
    const selectedRows = table.value.dt.rows({ selected: true }).data().toArray();        
    // Verificamos si se ha seleccionado al menos una fila

    if (selectedRows.length > 0) {
        // Obtenemos los datos de la primera fila seleccionada
        const selectedRowData = selectedRows[0];
       
        formEdit.value.codigo=selectedRowsData.fecha
        formEdit.value.grupo=selectedRowsData.codigo_sede
        formEdit.value.administrador=selectedRowsData.ticket
        formEdit.value.dni=selectedRowsData.venta
        formEdit.value.ruc=selectedRowsData.utilidad
        
        console.log(formEdit);
  //  sendRequest('PUT',formEdit.value,('http://localhost:8000/transaction'+id),'');
  sendRequest('PUT',formEdit.value,('https://reportes.kingtech.pe/transaction/'+id),'');

    } else {
        // Si no se ha seleccionado ninguna fila, mostramos un mensaje de advertencia o manejo de la situación
        let desc = 'debe selccionar uan fila antes de poder editarla'
        show_alert(desc, 'error', '')
    }
};
/**************************************************************************************************************** */
const save = () => 
    {     
        form.value.id
        form.value.fecha
        form.value.codigo_sede
        form.value.ticket
        form.value.venta
        form.value.utilidad            
        console.log(form);
           //  sendRequest('PUT',form.value,('http://localhost:8000/transaction'+id),'');
           sendRequest('POST',form.value,('https://reportes.kingtech.pe/transaction'),'');
           
        showModal.value = false;
    }

/*****************************************************************************************************************/
const importarArchivo = () => {
      const formData = new FormData();
      formData.append('file', fileInput.value.files[0]);

      axios.post('/api/importar-clientes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        console.log('Archivo importado correctamente:', response.data.message);
        // Puedes mostrar un mensaje de éxito o redirigir a otra página
      })
      .catch(error => {
        console.error('Error al importar archivo:', error);
      });
    };
/*****************************************************************************************************************/

</script>

<template>

        <!-- ************************************************************************************************************************************** --> 
        <div className="flex justify-center">
            <div className="w-full">
                <div className="bg-blue-400 border border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">
                    <div className="flex justify-around items-center"> <!-- Contenedor para los botones -->
                        <button v-if="!filaSeleccionada" data-modal-target="default-modal" @click="openModal('Crear')" data-modal-toggle="default-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                        Crear Registro 
                        </button>
                        <button  @click="openModalEdit('Editar')" className=" btn btn-lg block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" > 
                            <i className="fa-solid fa-circle-plus mx-1"></i>Editar Registro
                        </button>
                        <button  @click="openModalUpload('Subir Documento en Excel')" className=" btn btn-lg block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" > 
                            <i className="fa-solid fa-circle-plus mx-1"></i>Subir Excel
                        </button>
                        <button  @click="deleteCliente()" className="btn btn-lg block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                            <i className="fa-solid fa-circle-plus mx-1"></i> Borrar Registro
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- **************************************************************************************************************************************** -->
         <!-- *************************************************************************************************************************************** -->
         <div class="flex justify-center">
                <div class="w-full"> <!-- Utilizamos w-full para que ocupe el ancho completo -->
                    <div class="bg-gray-400 border border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">
                    <div class="flex justify-between items-center"> <!-- Flex para alinear horizontalmente y centrar verticalmente -->
                        <!-- Etiqueta del label -->
                        <label for="datepicker" class="block text-sm font-medium text-gray-700 mr-3">Selecciona una fecha</label>
                        
                        <!-- Contenedor del Datepicker y el botón -->
                        <div class="flex items-center">
                        <!-- Datepicker -->
                        <datepicker v-model="selectedDate" id="datepicker" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </datepicker>

                        <!-- Botón -->
                        <button
                            type="button"
                            class="ml-2 px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring-blue-300"
                        >
                            Botón
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <!-- ******************************************************************************************************************************* -->
                 <!-- ****************************************************************************************************************************** -->
                 <div class="flex justify-center">
                <div class="w-full">
                    <div class="bg-gray-400 border border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">
                    <div class="flex justify-between items-center">
                        <label for="startDate" class="block text-sm font-medium text-gray-700 mr-3">Desde</label>
                        <datepicker v-model="startDate" id="startDate" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></datepicker>

                        <label for="endDate" class="block text-sm font-medium text-gray-700 ml-4 mr-3">Hasta</label>
                        <datepicker v-model="endDate" id="endDate" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></datepicker>

                        <button
                        type="button"
                        class="ml-4 px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring-blue-300"
                        @click="filterByDates(startDate, endDate)"
                        >
                        Filtrar
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        <!-- ************************************************************************************************************************************** -->         
        <div className="border px-5 py-5  border-primary-400 rounded-md shadow mb-3">    
            <div className="md:col-span-12 lg:col-span-12 col-span-12">
               
                <div class="overflow-x-auto">
                    <DataTable 
                    :data="transacciones"
                    :columns="columns"
                    ref="table"
                    class="display"
                    :options="{ 
                         select: true,
                        responsive: true, 
                        autoWidth: false, 
                        dom: 'Bfrtip',
                        buttons: buttons,
                        pageLength: 10,
                        scrollX: true  
                    }"
                    @select="handleRowSelection"
                >
                    <thead>
                    <tr>
                        <th class="px-4 py-2 { 'invisible': !columnsVisible.id }">Id</th>
                        <th  class="px-4 py-2 { 'invisible': !columnsVisible.id }">fecha</th>
                        <th  class="px-4 py-2 { 'invisible': !columnsVisible.id }">codigo_sede</th>
                        <th  class="px-4 py-2 { 'invisible': !columnsVisible.id }">ticket</th>
                        <th  class="px-4 py-2 { 'invisible': !columnsVisible.id }">venta</th>
                        <th  class="px-4 py-2 { 'invisible': !columnsVisible.id }">utilidad</th>
                    </tr>
                    </thead>
                </DataTable>
                 
                </div>
            </div>

        </div>
        <!-- ************************************************************************************************************************************** -->
        <!-- MODAL EDIT  -->
        <div v-show="showModalEdit" id="default-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
            <div class="bg-white rounded-lg shadow-lg max-w-md w-full h-full overflow-y-auto">
                <div class="flex items-center justify-between p-4 border-b">
                    <h3 class="text-xl font-semibold text-gray-900">
                        {{ modalTitleEdit }}
                    </h3>
                    <button @click="showModalEdit= false" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Cerrar Modal</span>
                    </button>
               </div>
             
               <div class="p-4 space-y-4 overflow-y-auto">
                    <form @submit.prevent="update" classNaem="max-w-lg mx-auto border border-gray-300 p-6 my-5 rounded-lg overflow-y-auto">
                        
                        <div className="my-2">
                            <h2 className="text-xl font-thin mb-4">{{ modalTitleEdit }}</h2>
                        </div> 
                        <div className="mb-4">
                            <label for="fecha" className="block mb-1">FECHA</label>
                            <input type="text" id="fecha" className="form-input w-full" v-model="formEdit.fecha">
                            <p className="text-sm text-gray-500 mt-1">Ingrese fecha.</p>
                        </div>
                        <div className="mb-4">
                            <label for="codigo_sede" className="block mb-1">CODIGO SEDE</label>
                            <input type="text" id="codigo_sede" className="form-input w-full" v-model="formEdit.codigo_sede">
                            <p className="text-sm text-gray-500 mt-1">Ingrese codigo de sede.</p>
                        </div>
                        <div className="mb-4">
                            <label for="ticket" className="block mb-1">NUMERO DE TICKET</label>
                            <input type="text" id="ticket" className="form-input w-full" v-model="formEdit.ticket">
                            <p className="text-sm text-gray-500 mt-1">Ingrese número de ticket.</p>
                        </div>
                        <div className="mb-4">
                            <label for="venta" className="block mb-1">MONTO DE VENTA</label>
                            <input type="text" id="venta" className="form-input w-full" v-model="formEdit.venta">
                            <p className="text-sm text-gray-500 mt-1">Ingrese venta.</p>
                        </div>
                        <div className="mb-4">
                            <label for="ruc" className="block mb-1">UTILIDAD</label>
                            <input type="text" id="ruc" className="form-input w-full" v-model="formEdit.utilidad">
                            <p className="text-sm text-gray-500 mt-1">Ingrese utilidad.</p>
                        </div>             

                        <div class="flex items-center justify-end p-4 border-t">
                    <button  type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">Aceptar</button>
                    <button @click="showModalEdit = false" type="button" class="ml-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-white px-5 py-2.5">Rechazar</button>
                </div>
                    </form>
                </div> 
            </div>
        </div>
      
        <!-- ************************************************************************************************************************************** -->

        <!-- MODAL -->
     <div v-show="showModal" id="default-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
            <div class="bg-white rounded-lg shadow-lg max-w-md w-full h-full overflow-y-auto">
                <div class="flex items-center justify-between p-4 border-b">
                    <h3 class="text-xl font-semibold text-gray-900">
                        {{ modalTitle }}
                    </h3>
                    <button @click="showModal = false" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Cerrar Modal</span>
                    </button>
                </div>
                <div class="p-4 space-y-4 overflow-y-auto">
                    <form @submit.prevent="save" classNaem="max-w-lg mx-auto border border-gray-300 p-6 my-5 rounded-lg overflow-y-auto">
                        
                        <div className="my-2">
                            <h2 className="text-xl font-thin mb-4">{{ modalTitleEdit }}</h2>
                        </div> 
                        <div className="mb-4">
                            <label for="fecha" className="block mb-1">FECHA</label>
                            <input type="text" id="fecha" className="form-input w-full" v-model="form.fecha">
                            <p className="text-sm text-gray-500 mt-1">Ingrese fecha.</p>
                        </div>
                        <div className="mb-4">
                            <label for="codigo_sede" className="block mb-1">CODIGO DE SEDE</label>
                            <input type="text" id="codigo_sede" className="form-input w-full" v-model="form.codigo_sede">
                            <p className="text-sm text-gray-500 mt-1">Ingrese codigo de sede.</p>
                        </div>
                        <div className="mb-4">
                            <label for="ticket" className="block mb-1">TICKET</label>
                            <input type="text" id="ticket" className="form-input w-full" v-model="form.ticket">
                            <p className="text-sm text-gray-500 mt-1">Ingrese número de ticket.</p>
                        </div>
                        <div className="mb-4">
                            <label for="venta" className="block mb-1">MONTO DE VENTA</label>
                            <input type="text" id="venta" className="form-input w-full" v-model="form.venta">
                            <p className="text-sm text-gray-500 mt-1">Ingrese venta.</p>
                        </div>
                        <div className="mb-4">
                            <label for="ruc" className="block mb-1">UTILIDAD</label>
                            <input type="text" id="ruc" className="form-input w-full" v-model="form.utilidad">
                            <p className="text-sm text-gray-500 mt-1">Ingrese utilidad.</p>
                        </div>             

                        <div class="flex items-center justify-end p-4 border-t">
                    <button  type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">Aceptar</button>
                    <button @click="showModalEdit = false" type="button" class="ml-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-white px-5 py-2.5">Rechazar</button>
                </div>
                    </form>
                </div>
            
            </div>
        </div> 

          <!-- ************************************************************************************************************************************** -->
        <!-- MODAL UPLOAD  -->
        <div v-show="showModalUpload" id="default-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
             <div class="bg-white rounded-lg shadow-lg max-w-md w-full h-screen-70 overflow-y-auto">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 border-b">
                    <h3 class="text-xl font-semibold text-gray-900">
                        {{ modalTitleUpload }}
                    </h3>
                    <button @click="showModalUpload = false" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Cerrar Modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-4 space-y-4 overflow-y-auto">
                    <form @submit.prevent="importarArchivo" enctype="multipart/form-data" class="max-w-lg mx-auto border border-gray-300 p-6 my-5 rounded-lg overflow-y-auto">
                        <div class="my-2">
                            <h2 class="text-xl font-thin mb-4">{{ modalTitleUpload }}</h2>
                        </div>
                        <!-- Input para subir documentos -->
                        <div class="mb-4">
                            <label for="documento" class="block text-sm font-medium text-gray-700">Subir documento</label>
                            <input type="file" id="documento" name="documento" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                        </div>
                        <!-- Agrega los demás campos del formulario con la misma estructura -->
                        <div class="flex items-center justify-end p-4 border-t">
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">Subir Documento</button>
                            <button @click="showModalUpload = false" type="button" class="ml-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-white px-5 py-2.5">Rechazar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


</template>



<style>

        /* Estilos para alinear el componente de búsqueda a la derecha */
        .dt-search {
            float: right; /* Colocar el componente a la derecha */
            margin-right: 20px;
            margin-top: 1rem; /* Ajustar el margen derecho según sea necesario */

            margin-bottom: 1rem; /* Ajustar el margen derecho según sea necesario */
        }

        /* Estilos para alinear los botones de paginación a la derecha */
        .dt-paging {
            text-align: center; /* Alinear los botones a la derecha */
            margin-top: 10px; /* Ajustar el margen superior según sea necesario */
        }

        /* Estilos para los botones de paginación */
        .dt-paging-button {
            margin-left: 5px; /* Añadir un pequeño espacio entre los botones */
            /* Otros estilos según sea necesario */
        }

</style>