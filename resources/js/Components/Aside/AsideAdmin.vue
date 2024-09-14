<template>
  <aside class="z-[100] fixed bg-white dark:bg-slate-700 dark:hover:bg-slate-600/80">
    <div id="sidebar" class="flex flex-col absolute left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white dark:bg-slate-700 dark:hover:bg-slate-600/80 z-30 p-4 transition-all duration-200 ease-in-out -translate-x-64">
      
      <!-- Close button -->
      <div class="flex justify-between mb-10 pr-3 sm:px-2 dark:bg-slate-700">
        <button @click="toggleSidebar" class="lg:hidden text-slate-500 hover:text-slate-400" aria-controls="sidebar" aria-expanded="false">
          <span class="sr-only">Close sidebar</span>
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"></path>
          </svg>
        </button>
      </div>

      <!-- Logo -->
      <div class="flex justify-center w-full mb-10">
        <a href="/">
          <img src="/kingtech_logo_verde@4x.png" alt="KingTech Logo" style="width: 150px;">
        </a>
      </div>

      <!-- Menu items -->
      <div class="space-y-8">
        
        <!-- Admin section -->
        <div>
          <h3 class="text-xs uppercase text-slate-500 font-semibold pl-3">
            <span>•••</span>
            <span class="lg:hidden lg:sidebar-expanded:block 2xl:block">Modulos</span>
          </h3>
          <ul class="mt-3">
            
            <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0">
              <a @click="toggleAdmin" class="block text-slate-200 truncate transition duration-150 hover:text-white">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      <NavLink @click="verificarPermisoYAcceder" :href="route('king.index')" :active="route().current('king.index')">
                        ADMINISTRACION
                      </NavLink>
                    </span>
                  </div>
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"></path>
                    </svg>
                  </div>
                </div>
              </a>
              <div v-show="mostrarAdmin" class="pl-9 mt-1">
                <ul>
                  <li class="mb-1 last:mb-0"><a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" href="/signin">
                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Usuarios</span>
                  </a></li>
                  <li class="mb-1 last:mb-0"><a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" href="/signup">
                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Roles</span>
                  </a></li>
                  <li class="mb-1 last:mb-0"><a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" href="/reset-password">
                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Permisos</span>
                  </a></li>
                </ul>
              </div>
            </li>

            <!-- ATC section -->
            <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0">
              <a @click="toggleAtc" class="block text-slate-200 truncate transition duration-150 hover:text-white">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      <NavLink @click="verificarPermisoYAcceder" :href="route('atc.index')" :active="route().current('atc.index')">
                        ATC
                      </NavLink>
                    </span>
                  </div>
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"></path>
                    </svg>
                  </div>
                </div>
              </a>
              <div v-show="mostrarAtc" class="pl-9 mt-1">
                <ul>
                  <li class="mb-1 last:mb-0"><a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" href="/signup">
                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Clientes</span>
                  </a></li>
                  <li class="mb-1 last:mb-0"><a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" href="/reset-password">
                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Datos Personales</span>
                  </a></li>
                  <li class="mb-1 last:mb-0"><a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" href="/reset-password">
                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Detalles del Local</span>
                  </a></li>
                </ul>
              </div>
            </li>

            <!-- Soporte section -->
            <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0">
              <a @click="toggleSoporte" class="block text-slate-200 truncate transition duration-150 hover:text-white">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      <NavLink @click="verificarPermisoYAcceder" :href="route('soporte.index')" :active="route().current('soporte.index')">
                        SOPORTE
                      </NavLink>
                    </span>
                  </div>
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"></path>
                    </svg>
                  </div>
                </div>
              </a>
              <div v-show="mostrarSoporte" class="pl-9 mt-1">
                <ul>
                  <li class="mb-1 last:mb-0"><a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" href="/signin">
                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Alertas</span>
                  </a></li>
                  <li class="mb-1 last:mb-0"><a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" href="/signup">
                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Soporte</span>
                  </a></li>
                  <li class="mb-1 last:mb-0"><a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" href="/reset-password">
                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Plantillas</span>
                  </a></li>
                </ul>
              </div>
            </li>

            <!-- Contabilidad section -->
            <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0">
              <a @click="toggleContabilidad" class="block text-slate-200 truncate transition duration-150 hover:text-white">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      <NavLink @click="verificarPermisoYAcceder" :href="route('contabilidad.index')" :active="route().current('contabilidad.index')">
                        CONTABILIDAD
                      </NavLink>
                    </span>
                  </div>
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"></path>
                    </svg>
                  </div>
                </div>
              </a>
              <div v-show="mostrarContabilidad" class="pl-9 mt-1">
                <ul>
                  <li class="mb-1 last:mb-0"><a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" href="/signin">
                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Egresos</span>
                  </a></li>
                  <li class="mb-1 last:mb-0"><a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" href="/signup">
                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Ingresos</span>
                  </a></li>
                  <li class="mb-1 last:mb-0"><a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" href="/reset-password">
                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Facturas</span>
                  </a></li>
                </ul>
              </div>
            </li>

            <!-- Reportes section -->
            <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0">
              <a @click="toggleReportes" class="block text-slate-200 truncate transition duration-150 hover:text-white">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      <NavLink @click="verificarPermisoYAcceder" :href="route('reportes.index')" :active="route().current('reportes.index')">
                        REPORTES
                      </NavLink>
                    </span>
                  </div>
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"></path>
                    </svg>
                  </div>
                </div>
              </a>
              <div v-show="mostrarReportes" class="pl-9 mt-1">
                <ul>
                  <li class="mb-1 last:mb-0"><a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" href="/signin">
                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Reporte 1</span>
                  </a></li>
                  <li class="mb-1 last:mb-0"><a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" href="/signup">
                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Reporte 2</span>
                  </a></li>
                </ul>
              </div>
            </li>

          </ul>
        </div>
        
      </div>

    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const mostrarAdmin = ref(false);
const mostrarAtc = ref(false);
const mostrarSoporte = ref(false);
const mostrarContabilidad = ref(false);
const mostrarReportes = ref(false);

const route = useRoute();
const router = useRouter();

const verificarPermisoYAcceder = () => {
  // Implement your permission check logic here
};

const toggleSidebar = () => {
  // Implement sidebar toggle logic
};

const toggleAdmin = () => {
  mostrarAdmin.value = !mostrarAdmin.value;
};

const toggleAtc = () => {
  mostrarAtc.value = !mostrarAtc.value;
};

const toggleSoporte = () => {
  mostrarSoporte.value = !mostrarSoporte.value;
};

const toggleContabilidad = () => {
  mostrarContabilidad.value = !mostrarContabilidad.value;
};

const toggleReportes = () => {
  mostrarReportes.value = !mostrarReportes.value;
};
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
