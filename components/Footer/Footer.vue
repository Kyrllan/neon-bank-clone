<template>
  <div>
    <div id="footer">
      <div class="top-footer">
        <img src="/assets/logo-neon.png" alt="logo-neon-branco">
        <div class="social">
          <img src="/assets/facebook.svg" alt="logo-neon-branco">
          <img src="/assets/instagram.svg" alt="logo-neon-branco">
          <img src="/assets/youtube.svg" alt="logo-neon-branco">
          <img src="/assets/twitter.svg" alt="logo-neon-branco">
          <img src="/assets/linkedin.svg" alt="logo-neon-branco">
        </div>
        <div class="download">
          <h3 class="download-app-text">Baixe o app</h3>
          <img class="img-footer" src="/assets/google-play-badge.svg" alt="logo-neon-branco">
          <img class="img-footer" src="/assets/apple-store.svg" alt="logo-neon-branco">
        </div>
      </div>
      <div class="mid-footer">
        CONTEUDO
      </div>
    </div>
    <div class="bottom-footer">
      <div class="bottom-title">
        Neon Pagamentos® 2023 - Instituição de Pagamento
        Avenida Francisco Matarazzo, 1.350, 2º andar, Água Branca, São Paulo - SP
        CNPJ: nº 20.855.875/0001-82
      </div>
      <div class="bottom-text">
        A Neon é uma Instituição de Pagamento autorizada pelo Banco Central do Brasil e atua como correspondente bancário
        da (i) BV Financeira S.A. Crédito Financiamento e Investimento (CNPJ: 01.149.953/0001-82) no produto Certificado
        de Depósito Bancário (CDB); (ii) Banco Votorantim S.A., conhecido também como “Banco BV” (CNPJ: 59.588.111/0001-03
        e CNPJ 01.858.774-0001-10) no produto Crédito Pessoal; (iii) Neon Financeira SCFI S.A. (CNPJ 11.285.104/0001-06)
        para CDB e Crédito Pessoal; (iv) ITAÚ UNIBANCO S.A. (CNPJ: 60.701.190/0001-04) no produto de pagamento de contas
        (Ficha de compensação e boletos de concessionárias conveniadas). Como correspondente bancário, a Neon segue as
        diretrizes da Resolução nº 4.935/21 do Banco Central do Brasil. Para entrar em contato sobre esses produtos, veja
        os contatos aqui.
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#footer {
  background-color: rgb(var(--v-theme-nBlack));
  padding: 40px 35px;
}

.top-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(var(--v-theme-nBlack));
  border-bottom: 1px solid #6E7882;
  padding: 0 0 40px;

  .social {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
  }

  .download {
    display: flex;
    align-items: center;
    justify-content: center;

    .download-app-text {
      font-family: 'Epilogue';
      font-weight: 500;
      font-size: 16px;
      padding: 0 8px 0 0;
      color: rgb(var(--v-theme-nWhite));
    }

    .img-footer {
      width: 135px;
      height: 40px;
      padding: 0 8px 0 0;
    }
  }

}

.mid-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(var(--v-theme-nBlack));
  
}


.bottom-footer {
  background-color: #191919;
  display: flex;
  align-items: top;
  justify-content: space-between;
  padding: 40px 35px;

  .bottom-title {
    font-family: 'Epilogue';
    font-weight: 500;
    font-size: 14px;
    color: rgb(var(--v-theme-nWhite));
    width: 50%;
  }
  .bottom-text {
    font-family: 'Epilogue';
    line-height: 1.125rem;
    font-size: .75rem;
    color: rgb(var(--v-theme-nWhite));
    width: 50%;
  }
}
</style>  

