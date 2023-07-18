<template>
  <v-app-bar height="80" color="nWhite" elevation="0">
    <v-container class="d-flex align-center">
      <img width="92" height="20" src="/assets/logo-azul.svg" alt="neon-logo" />
      <app-bar-menu class="pl-2" name="Cartões" :items="items" />
      <app-bar-menu class="pl-2" name="Produtos" :items="items" />
      <app-bar-menu class="pl-2" name="A Neon" :items="items" />
    </v-container>
  </v-app-bar>
</template>

<script setup>
const items = [
  {
    title: 'Inicio',
    icon: 'home',
    to: {name: 'home'},
  },
  {
    title: 'Usuarios',
    icon: 'person',
    to: {name: 'users'},
  },
  {
    title: 'Categorías',
    icon: 'category',
    to: {name: 'categories'},
  },
  {
    title: 'Productos',
    icon: 'product',
    to: {name: 'products'},
  },
  {
    title: 'Clientes',
    icon: 'client',
    to: {name: 'clients'},
  },
  {
    title: 'Ventas',
    icon: 'sale',
    to: {name: 'sales'},
  },
];
</script>
