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
        <div class="mid-footer-first">
          <div class="mid-footer-first-list" v-for="(item, i) in menuList" :key="i">
            <h3>{{ item.name }}</h3>
            <ul v-for="(child, a) in item.list" :key="a">
              <li>
                {{ child.title }}
              </li>
            </ul>
          </div>
          <div class="mid-footer-first-list">
            <h3 class="header-first-list">Perguntas</h3>
          </div>
          <div class="mid-footer-first-list">
            <h3 class="header-first-list">Blog</h3>
          </div>
        </div>
        <div class="mid-footer-second">
          <div class="mr-4">
            <h3 class="mid-footer-second-title">FALE COM A NEON</h3>
            <ul class="mid-footer-second-text">
              <li>oi@neon.com.br</li>
              <li>ou acesse o app e fale com nossos</li>
              <li>geeks.</li>
            </ul>
          </div>
          <div>
            <h3 class="mid-footer-second-title">OUTRAS INFORMAÇÕES</h3>
            <ul class="mid-footer-second-text2">
              <li>Aviso externo de privacidade</li>
              <li>Termos de uso</li>
              <li>Relatórios financeiros</li>
              <li>Relatórios de Ouvidoria</li>
              <li>Mapa do site</li>
              <li>Ouvidoria</li>
            </ul>
          </div>
        </div>
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
        os contatos <span style="text-decoration: underline; cursor: pointer;">aqui.</span>
      </div>
    </div>
  </div>
</template>

<script setup>

import { listNeon } from '@/helpers/listNeon'

const menuList = listNeon


</script>

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
    cursor: pointer;
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
  align-items: top;
  background-color: rgb(var(--v-theme-nBlack));
  color: rgb(var(--v-theme-nWhite));
  padding: 40px 0;

  .mid-footer-first-list {
    padding: 0 3rem 0 0;
  }

  ul {
    list-style-type: none;

    li {
      padding: 0.3rem 0;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  .mid-footer-first {
    display: flex;

    .header-first-list:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .mid-footer-second {
    display: flex;
    justify-content: space-between;

    .mid-footer-second-title {
      font-family: 'Epilogue';
      font-weight: 500;
      font-size: 18px;
      color: #5F5F5F;
      padding: 0 0 10px;
    }

    .mid-footer-second-text {
      font-family: 'Epilogue';
      font-weight: 500;
      font-size: 16px;
      color: rgb(var(--v-theme-nWhite));
      padding: 0 0 10px;
    }

    .mid-footer-second-text2 {
      font-family: 'Epilogue';
      font-weight: 500;
      font-size: 20px;
      color: rgb(var(--v-theme-nWhite));
      padding: 0 0 10px;

      & li:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
}


.bottom-footer {
  background-color: #191919;
  display: flex;
  align-items: top;
  justify-content: space-between;
  padding: 40px 35px;
  border-top: 1px solid #6E7882;

  .bottom-title {
    font-family: 'Epilogue';
    font-weight: 500;
    font-size: 14px;
    color: rgb(var(--v-theme-nWhite));
    width: 50%;
    padding: 0 20rem 0 0;
  }

  .bottom-text {
    font-family: 'Epilogue';
    line-height: 1.125rem;
    font-size: .75rem;
    color: rgb(var(--v-theme-nWhite));
    width: 50%;
    padding: 0 2rem 0 10rem;
  }
}



@media screen and (max-width: 1000px) {
  .top-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .social {
    padding: 2rem;
  }

  .download {
    flex-direction: column;

    .img-footer {
      margin: 0.25rem;
    }
  }

  .mid-footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;

    .mid-footer-first {
      display: flex;

      .mid-footer-first-list {
        padding: 0 1.5rem 0 0;
      }
    }

    .mid-footer-second {
      padding-top: 2rem;
      display: flex;
    }
  }

  .bottom-footer {
    display: flex;
    align-items: top;
    justify-content: space-between;
    padding: 40px 35px;

    .bottom-title {
      padding: 0 2rem 0 0;
    }

    .bottom-text {
      padding: 0 2rem 0 0;
    }
  }


}

@media screen and (max-width: 800px) {

  .mid-footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;

    .mid-footer-first {
      display: flex;
      flex-direction: column;

      .mid-footer-first-list {
        padding: 1rem 1.5rem 0 0;
      }
    }

    .mid-footer-second {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      align-items: left;
    }
  }

  .bottom-footer {
    display: flex;
    flex-direction: column;
    padding: 2rem;

    .bottom-title {
      padding: 0;
      width: 100%;
    }

    .bottom-text {
      padding-top: 2rem;
      width: 100%;
    }
  }

}
</style>  

