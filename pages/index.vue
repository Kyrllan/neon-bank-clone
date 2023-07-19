<template>
  <div>
    <section class="first-home-section background-picture">
      <v-container class="first-home-container">
        <div class="first-home-section-card">
          <div class="first-home-section-card-title">
            <span
              >Neon, a conta digital feita para os brasileiros
              <span class="highlight-text">trabalhadores</span></span
            >
          </div>
          <div class="first-home-section-card-text">
            <span
              >Leve com você onde for:
              <strong
                >Cartão de Crédito, Débito, Empréstimo, Investimentos,
                Cashback</strong
              >
              e muito mais!</span
            >
          </div>
          <v-text-field
            v-model="cpf"
            class="open-account-field"
            label="Digite seu CPF"
            variant="outlined"
            :rules="[rules.cpf]"
            v-maska
            data-maska="###.###.###-##"
            prepend-inner-icon="mdi-card-account-details-outline"
            :append-inner-icon="rules.cpfValid(cpf) ? '' : 'mdi-alert-circle'"
          >
          </v-text-field>
          <v-btn
            variant="flat"
            class="open-account-btn"
            height="40"
            rounded="xl"
            >Abra sua conta</v-btn
          >
        </div>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue';

const cpf = ref('');

const rules = {
  cpf: (value) => {
    const cpfRegex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
    if (cpfRegex.test(value)) return true;
    return 'CPF inválido.';
  },
  cpfValid: (value) => {
    const cpfRegex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
    if (cpfRegex.test(value)) return true;
    return false;
  },
};
</script>

<style scoped lang="scss">
.first-home-section {
  margin-top: 80px;
  height: 568px;
  max-width: 100%;
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;

  .first-home-container {
    height: 100%;
    display: flex;
    align-items: center;
    .first-home-section-card {
      max-width: 419px;
      background-color: rgb(var(--v-theme-nWhite));
      border-radius: 59px 59px 59px 15px;
      padding: 32px;

      .first-home-section-card-title {
        font-family: Moranga-Medium, Helvetica, sans-serif;
        font-size: 32px;
        font-weight: 500;
        line-height: 130%;
        margin-bottom: 16px;
        color: rgb(var(--v-theme-nText));

        .highlight-text {
          background-color: rgb(var(--v-theme-nCyan));
          border-radius: 29px 29px 5px;
          padding: 0 5px;
          line-height: 16px;
          margin-left: -5px;
        }
      }
      .first-home-section-card-text {
        font-family: 'Epilogue';
        font-weight: 500;
        margin-bottom: 24px;
        font-size: 16px;
        line-height: 150%;
        color: rgb(var(--v-theme-nText));
      }

      .open-account-field .v-text-field__slot {
        max-width: 246px;
        border-radius: 10px;
      }

      .open-account-btn {
        margin-top: 10px;
        color: rgb(var(--v-theme-nBlack));
        font-size: 16px;
        font-weight: bold;
        font-family: 'Epilogue';
        letter-spacing: normal;
        text-transform: none;
        background-color: rgb(var(--v-theme-nYellow));
      }
    }
  }
}

@media screen and (max-width: 3000px) {
  .background-picture {
    background-image: url('/assets/hero-2-1920x568.webp');
  }
}

@media screen and (max-width: 1024px) {
  .background-picture {
    background-image: url('/assets/hero-2-1024x568.webp');
  }
}

@media screen and (max-width: 520px) {
  .background-picture {
    background-image: url('/assets/hero-2-520x610.webp');
  }
}
</style>
