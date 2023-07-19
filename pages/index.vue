<template>
  <div>
    <section class="first-home-section">
      <v-container class="d-flex align-center" style="height: 100%">
        <div class="first-home-section-card">
          <div>
            <span
              >Neon, a conta digital feita para os brasileiros
              trabalhadores</span
            >
          </div>
          <div>
            <span
              >Leve com você onde for: Cartão de Crédito, Débito, Empréstimo,
              Investimentos, Cashback e muito mais!</span
            >
          </div>
          <v-text-field
            class="open-account-field"
            label="Digite seu CPF"
            variant="outlined"
          ></v-text-field>
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

<style scoped lang="scss">
.first-home-section {
  margin-top: 80px;
  height: 568px;
  width: 100%;
  background-image: url('/assets/hero-2-1920x568.webp');

  .first-home-section-card {
    max-width: 419px;
    background-color: rgb(var(--v-theme-nWhite));
    border-radius: 59px 59px 59px 15px;
    padding: 32px;

    .open-account-field {
      max-width: 246px;
      border-radius: 8px;
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
  }
}
</style>
