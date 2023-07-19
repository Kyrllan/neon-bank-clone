<template>
  <v-app-bar height="80" color="nWhite" elevation="0">
    <v-container>
      <div class="header-content">
        <img
          class="neon-logo"
          width="92"
          height="20"
          src="/assets/logo-azul.svg"
          alt="neon-logo"
        />
        <div class="nav-list">
          <app-bar-menu class="ml-4" name="Cartões" :items="items" />
          <app-bar-menu class="ml-4" name="Produtos" :items="items" />
          <app-bar-menu class="ml-4" name="A Neon" :items="items" />
          <app-bar-menu class="ml-4" name="Para MEIs" :items="items" />
          <app-bar-item class="ml-4" name="Perguntas"></app-bar-item>
          <app-bar-item class="ml-4" name="Blog"></app-bar-item>
          <v-btn class="ml-4 open-account-btn" height="40" rounded="xl"
            >Abra sua conta</v-btn
          >
        </div>
      </div>
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

<style scoped lang="scss">

.neon-logo{
  cursor: pointer;
}
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 7rem;
}

.nav-list {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.open-account-btn {
  color: rgb(var(--v-theme-nBlack));
  font-size: 16px;
  font-weight: bold;
  font-family: 'Epilogue';
  letter-spacing: normal;
  text-transform: none;
  background-color: rgb(var(--v-theme-nYellow));
}
</style>
