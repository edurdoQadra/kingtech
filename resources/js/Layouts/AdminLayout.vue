<template>
    <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
    <div class="flex flex-col h-screen">
      <Aside :darkMode="darkMode"></Aside>
      <!-- Aside y Header dentro del contenedor principal -->
      <Header :darkMode="darkMode" @update:darkMode="darkMode = $event"></Header>
        
  
      <!-- Main ocupa el espacio restante -->
      <div class=" flex  items-center justify-center bg-white rounded-lg shadow-lg">
            <main >
                <slot />
            </main>
            </div>
      </div>  
    </transition>
  </template>
  
  <script setup>
  
    import { ref } from 'vue';
    import Aside from '@/components/Aside/AsideAdmin.vue';
    import Header from '@/components/Header.vue';
    
    import { usePermission } from "@/composables/permissions";

    const { hasRole } = usePermission();
    const darkMode = ref(false); // Estado inicial del modo oscuro

  </script>
  