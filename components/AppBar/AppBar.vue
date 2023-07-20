<template>
  <v-app-bar height="80" color="nWhite" elevation="0" style="z-index: 11">
    <div class="header-content">
      <img class="neon-logo" width="92" height="20" src="/assets/logo-azul.svg" alt="neon-logo" />
      <div class="nav-list">
        <app-bar-menu class="ml-4" name="Cartões" :items="cardList" />
        <app-bar-menu class="ml-4" name="Produtos" :items="productList" />
        <app-bar-menu class="ml-4" name="A Neon" :items="neonList" />
        <app-bar-menu class="ml-4" name="Para MEIs" :items="meiList" />
        <app-bar-item class="ml-4" name="Perguntas"></app-bar-item>
        <app-bar-item class="ml-4" name="Blog"></app-bar-item>
        <v-btn class="ml-4 open-account-btn" height="40" rounded="xl">Abra sua conta</v-btn>

      </div>
      <button @click="menuDialog = !menuDialog" class="menu-btn-dialog">
        <span class="menu-btb">Menu</span>
        <v-icon size="24">{{ menuDialog ? 'mdi-close' : 'mdi-menu' }}</v-icon>
      </button>
    </div>

    <v-dialog v-model="menuDialog" persistent fullscreen style="z-index: 10">
      <v-card>
        <div class="px-4" style="margin-top: 80px">

          <v-btn class="mt-4 open-account-btn" flat block height="40" rounded="xl">Abra sua conta</v-btn>
        </div>
      </v-card>
    </v-dialog>

  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue'

const menuDialog = ref(false)



const cardList = [
  {
    title: 'Cartão de crédito',
    description: 'Sem anuidade e sem complicação.',
    new: false
  },
  {
    title: 'Cashback',
    description: 'Dinheiro de volta nas suas compras.',
    new: false
  },
  {
    title: 'Viracrédito',
    description: 'Investimento que vira limite.',
    new: true
  },
  {
    title: 'Cartão de débito',
    description: 'Sem taxas e internacional.',
    new: false
  },
  {
    title: 'Cartão virtual',
    description: 'Seguro para compras online.',
    new: false
  },
]
const productList = [
  {
    title: 'Empréstimos',
    description: 'Simule e conheça as taxas.',
    new: false
  },
  {
    title: 'Empréstimo Consignado',
    description: 'As menores taxas do mercado.',
    new: false
  },
  {
    title: 'Antecipação de FGTS',
    description: 'Saiba como contratar a antecipação',
    new: true
  },
  {
    title: 'Conta digital',
    description: 'Sem annuidade e sem tarifas.',
    new: false
  },
  {
    title: 'Investimentos',
    description: 'Seguros, práticos e simples.',
    new: false
  },
]
const neonList = [
  {
    title: 'Sobre nós',
    description: 'Descrubra quem é a Neon!',
    new: false
  },
  {
    title: 'Carreira',
    description: 'Confira nossas vagas abertas.',
    new: false
  },
]
const meiList = [
  {
    title: 'Conheça a MEI Fácil',
    description: 'Descrubra quem é a MEI Fácil!',
    new: false
  },
  {
    title: 'Abra Mei',
    description: 'É rápido, fácil  gratuito!',
    new: false
  },
]
</script>

<style scoped lang="scss">
.neon-logo {
  cursor: pointer;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20rem;
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


.menu-btb {
  color: rgb(var(--v-theme-nBlack));
  font-family: Epilogue, sans-serif;
  font-weight: 700;
  padding-right: 6px;
  font-size: .875rem;
  line-height: 1.25rem;
  text-transform: none;
}

.menu-btn-dialog {
  display: none;
}


@media screen and (max-width: 1200px) {
  .header-content {
    padding: 0 2rem;
  }

  .nav-list {
    display: none;
  }

  .menu-btn-dialog {
    display: inline-block;
  }
}

@media screen and (min-width: 1201px) and (max-width: 1900px) {
  .header-content {
    padding: 0 7rem;
  }
}
</style>
