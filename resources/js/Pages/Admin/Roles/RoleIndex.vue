<script setup>
import { ref } from "vue";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import Table from "@/Components/Table.vue";
import TableRow from "@/Components/TableRow.vue";
import TableHeaderCell from "@/Components/TableHeaderCell.vue";
import TableDataCell from "@/Components/TableDataCell.vue";
import Modal from "@/Components/Modal.vue";
import DangerButton from "@/Components/DangerButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";


defineProps(["roles"]);

const form = useForm({})

const showConfirmDeleteRoleModal = ref(false)

const confirmDeleteRole = () => {
      showConfirmDeleteRoleModal.value = true;
}

const closeModal = () => {
  showConfirmDeleteRoleModal.value = false;
}

const deleteRole = (id) => {
   form.delete(route('roles.destroy', id), {
    onSuccess: () => closeModal()
   });
}
</script>

<template>
  <Head title="Dashboard" />

  <AdminLayout>
    <div class="w-full mx-auto py-4">
    
      <div class="flex justify-between">
        
        <Link :href="route('king.index')" class="px-3 py-2 text-white font-semibold bg-indigo-500 hover:bg-indigo-700 rounded">Atras</Link>
        <Link :href="route('roles.create')" class="px-3 py-2 text-white font-semibold bg-indigo-500 hover:bg-indigo-700 rounded">Nuevo Rol</Link>
     </div>
      <div class=" w-full mt-6">
        <Table>
          <template #header>
            <TableRow>
              <TableHeaderCell>ID</TableHeaderCell>
              <TableHeaderCell>Nombre</TableHeaderCell>
              <TableHeaderCell>Acción</TableHeaderCell>
            </TableRow>
          </template>
          <template #default>
            <TableRow v-for="role in roles" :key="role.id" class="border-b">
              <TableDataCell>{{ role.id }}</TableDataCell>
              <TableDataCell>{{ role.name }}</TableDataCell>
              <TableDataCell class="space-x-4">
                  <Link :href="route('roles.edit', role.id)" class="text-green-400 hover:text-green-600">Editar</Link>
 <button @click="confirmDeleteRole" class="text-red-400 hover:text-red-600">Borrar</button>
               <Modal :show="showConfirmDeleteRoleModal" @close="closeModal">
                 <div class="p-6">
                  <h2 class="text-lg font-semibold text-slate-800">Are you sure to delete this Role?</h2>
                  <div class="mt-6 flex space-x-4">
                    <DangerButton @click="deleteRole(role.id)">Borrar</DangerButton>
                    <SecondaryButton @click="closeModal">Cancelar</SecondaryButton>
                  </div>
                 </div>
               </Modal>              </TableDataCell>
            </TableRow>
          </template>
        </Table>
      </div>
    </div>
  </AdminLayout>
</template>
