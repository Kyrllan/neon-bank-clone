<template>
  <div>
    <section class="first-home-section background-picture">
      <div class="first-home-container">
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
            prepend-inner-icon="mdi-card-account-details-outline"
            :append-inner-icon="
              rules.cpf(cpf) || cpf.length <= 0 ? '' : 'mdi-alert-circle'
            "
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
      </div>
    </section>
    <section class="second-home-section">
      <div class="banner-content">
        <ul class="second-banner-list">
          <li>
            <div class="banner-card banner-img-1">
              <div>
                <span class="banner-text banner-text-1">Cartão</span> <br />
                <div class="mt-4 banner-text banner-text-1">de Crédito</div>
                <div class="more">Saiba mais</div>
              </div>
            </div>
            <div>
              <div class="banner-main-text">Mais controle</div>
              <p class="banner-main-text-1">
                Com o
                <span class="banner-text-main-decoration"
                  >Cartão de Crédito</span
                >
                Neon você só paga o que gasta e pode ajustar seu próprio limite.
              </p>
            </div>
          </li>
          <li>
            <div class="banner-card banner-img-2">
              <div>
                <span class="banner-text banner-text-2">Empréstimo</span>
                <div class="more">Saiba mais</div>
              </div>
            </div>
            <div>
              <div class="banner-main-text">Conquiste seus sonhos</div>
              <p class="banner-main-text-1">
                O jeito Neon de fazer acontecer, te adianta um
                <span class="banner-text-main-decoration"
                  >empréstimo pessoal</span
                >
                com as menores taxas.
              </p>
            </div>
          </li>
          <li>
            <div class="banner-card banner-img-3">
              <div>
                <span class="banner-text banner-text-3">Investimentos</span>
                <div class="more">Saiba mais</div>
              </div>
            </div>
            <div>
              <div class="banner-main-text">Seu dinheiro rende</div>
              <p class="banner-main-text-1">
                Dinheiro rendendo de verdade, com praticidade e segurança, só na
                Neon.
                <span class="banner-text-main-decoration"
                  >Faça sua simulação!</span
                >
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="third-home-section">
      <div class="pa-6">
        <img
          class="banner-img"
          src="/assets/cartao-neon-min.webp"
          alt="card-img"
        />
      </div>
      <div class="pa-6">
        <div class="banner-main">
          <div class="banner-title">
            Peça seu cartão Neon e juntos a gente descomplica o crédito
          </div>
          <div class="banner-text">
            O cartão de crédito Neon é sem anuidade, você só paga o que gasta e
            pode ajustar seu limite direto pelo aplicativo.
          </div>
          <v-btn
            @click="router.push('/bringCard')"
            variant="flat"
            class="open-account-btn"
            block
            height="40"
            rounded="xl"
            >Pedir meu cartão</v-btn
          >
        </div>
      </div>
    </section>
    <section class="fourth-home-section">
      <div class="pa-6">
        <div class="banner-main">
          <div class="banner-title">Faça um empréstimo pessoal</div>
          <div class="banner-text">
            Tá faltando dinheiro pra fechar um projeto ou realizar um sonho? Que
            tal simular um empréstimo e ter uma ideia de quanto custaria?
          </div>
          <v-btn
            @click="router.push('/needLoan')"
            variant="flat"
            class="open-account-btn"
            block
            height="40"
            rounded="xl"
            >Simular empréstimo</v-btn
          >
        </div>
      </div>
      <div class="pa-6">
        <img
          class="banner-img"
          src="/assets/emprestimo-min.webp"
          alt="card-img"
        />
      </div>
    </section>
    <section class="fifth-home-section">
      <div class="pa-6">
        <img
          class="banner-img"
          src="/assets/investimento-min.webp"
          alt="card-img"
        />
      </div>
      <div class="pa-6">
        <div class="banner-main">
          <div class="banner-title">Comece a investir a partir de R$ 10</div>
          <div class="banner-text">
            Juntar dinheiro e garantir seu futuro é simples na Neon. Nosso CDB é
            seguro, prático e rende mais do que a poupança. Simule agora um
            investimento e descubra quanto você ganharia.
          </div>
          <v-btn
            @click="router.push('/simulateInvestment')"
            variant="flat"
            class="open-account-btn"
            block
            height="40"
            rounded="xl"
            >Simular investimento</v-btn
          >
        </div>
      </div>
    </section>
    <section class="sixth-home-section">
      <h1 class="banner-title">Dúvidas Comuns:</h1>
      <ExpansionPanel :list="questions" />
    </section>
    <section class="seventh-home-section">
      <div class="banner">
        <div class="banner-title">Tarifas e anuidade? Não com a Neon!</div>
        <div>
          <v-btn
            variant="flat"
            class="open-account-btn"
            block
            height="40"
            rounded="xl"
            >Confira os detalhes</v-btn
          >
        </div>
      </div>
      <div class="banner">
        <img
          class="banner-img"
          src="/assets/ilustra_gratis-min.webp"
          alt="gratis-img"
        />
        <v-btn
          variant="flat"
          class="open-account-btn2"
          block
          height="40"
          rounded="xl"
          >Confira os detalhes</v-btn
        >
      </div>
    </section>
    <section class="eighth-home-section">
      <div class="banner">
        <div class="banner-title">Ei, já conhece o nosso blog?</div>
        <div class="banner-text">
          Focar no Dinheiro é saber tudo sobre finanças pessoais, economia e
          controle dos gastos para realizar seus sonhos. Vem com a gente!
        </div>
        <v-btn
          variant="flat"
          class="open-account-btn"
          block
          height="40"
          rounded="xl"
          >Conheça o blog</v-btn
        >
      </div>
      <div class="banner2">
        <div class="banner2-title">#Focanodinheiro</div>
        <img
          class="banner2-img"
          src="/assets/ilustra-blog-min.webp"
          alt="ilustra-blog"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const router = useRouter();
const cpf = ref("");

const rules = {
  cpf: (value) => {
    if (value.length == 14) return true;
    return "CPF inválido.";
  },
};

const questions = [
  {
    name: "A Neon é um banco digital?",
    description: `Não, a Neon não é um banco digital, por isso não dizemos "banco Neon", apenas "Neon". A Neon é uma Instituição de Pagamento autorizada pelo Banco Central do Brasil que oferece uma conta digital via aplicativo.
    Também é possível dizer que a Neon é uma fintech, termo criado a partir da junção dos termos "financial" (financeiro) e "technology" (tecnologia), pois usamos tecnologia para promover inovação financeira.`,
    link: "Conheça mais sobre a Neon e a sua história.",
  },
  {
    name: "É seguro usar a conta Neon?",
    description: `A conta digital Neon é 100% segura e estamos investindo continuamente em recursos para garantir a segurança dos nossos clientes. Por exemplo, disponibilizamos um cartão virtual para compras online, temos tokens em todos os processos de validação de segurança no aplicativo, além de autenticação por selfie e por digital para ter acesso à conta.`,
  },
  {
    name: "Por que escolher a conta digital Neon?",
    description: `A Neon oferece todos os serviços financeiros que você precisa na palma da sua mão, além de ser uma conta gratuita e sem tarifas escondidas. Aqui você tem acesso ao cartão de crédito, empréstimo pessoal e consignado, investimento que rende mais do que a poupança, Viracrédito que pode aumentar o limite do seu cartão, cashback em todas as suas compras e muito mais!`,
  },
];
</script>

<style scoped lang="scss">
@mixin account-btn {
  margin-top: 10px;
  color: rgb(var(--v-theme-nBlack));
  font-size: 16px;
  font-weight: bold;
  font-family: "Epilogue";
  letter-spacing: normal;
  text-transform: none;
  background-color: rgb(var(--v-theme-nYellow));
}

.first-home-section {
  margin-top: 80px;
  height: 568px;
  max-width: 100%;
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;
  padding: 0 18rem;

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
        font-family: "Epilogue";
        font-weight: 500;
        margin-bottom: 24px;
        font-size: 16px;
        line-height: 150%;
        color: rgb(var(--v-theme-nText));
      }

      .open-account-field {
        max-width: 246px;
        border-radius: 10px;
      }

      .open-account-btn {
        @include account-btn;
      }
    }
  }
}

.second-home-section {
  background-color: rgb(var(--v-theme-nWhite));
  padding: 3rem 7rem;

  .banner-content {
    padding: 60px 100px;

    .second-banner-list {
      list-style-type: none;
      display: flex;
      align-items: center;
      justify-content: space-between;

      li {
        max-width: 284px;
      }

      .banner-card {
        width: 284px;
        height: 282px;
        border-radius: 59px 59px 59px 10px;
        overflow: hidden;
        position: relative;
        display: flex;
        align-items: flex-end;
        //align-items: end;
        justify-content: center;
        background-repeat: no-repeat;
        background-size: auto 100%;
        background-position: center;

        .more {
          text-align: center;
          font-size: 20px;
          font-weight: bold;
          font-family: "Epilogue";
          letter-spacing: normal;
          padding-bottom: 4px;
          text-decoration: underline;
          color: #fff;
          opacity: 0;
          transition: ease-out 0.2s;
        }

        &:hover {
          cursor: pointer;
          opacity: 0.8;

          .more {
            opacity: 1;
          }
        }
      }

      .banner-img-1 {
        background-image: url("/assets/varias-maos-segurando-cartoes-da-neon-284x282.webp");
      }

      .banner-img-2 {
        background-image: url("/assets/senhor-de-idade-segurando-celular-e-cartao-neon-284x282.webp");
      }

      .banner-img-3 {
        background-image: url("/assets/homem-na-rua-olhando-para-frente-284x282.webp");
      }

      .banner-text {
        padding: 0 12px;
        border-radius: 100px;
        font-family: Moranga-Medium, Helvetica, sans-serif;
        font-size: 36px;
        font-weight: 500;
      }

      .banner-text-1 {
        background-color: rgb(var(--v-theme-nLime));
      }

      .banner-text-2 {
        background-color: rgb(var(--v-theme-nCyan));
      }

      .banner-text-3 {
        background-color: rgb(var(--v-theme-nLightBlue));
      }

      .banner-main-text {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        font-family: "Epilogue";
        letter-spacing: normal;
        margin: 16px 20px;
        color: rgb(var(--v-theme-nBlack));
      }

      .banner-main-text-1 {
        font-family: "Epilogue";
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: rgb(var(--v-theme-nBlack));
      }

      .banner-text-main-decoration {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}

.third-home-section {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    247.27deg,
    #00fff0 -19.61%,
    #0f92ff 164.78%
  ) !important;
  padding: 4rem 10rem;

  .banner-img {
    width: 100%;
    height: 100%;
  }

  .banner-main {
    max-width: 544px;

    .banner-title {
      font-family: Moranga-Medium, Helvetica, sans-serif;
      font-size: 48px;
      font-weight: 500;
      line-height: 110%;
      margin-bottom: 24px;
      color: rgb(var(--v-theme-nText));
    }

    .banner-text {
      font-family: Epilogue, Helvetica, sans-serif;
      font-size: 20px;
      font-weight: 500;
      line-height: 150%;
      margin-bottom: 24px;
      color: rgb(var(--v-theme-nText));
    }

    .open-account-btn {
      @include account-btn;
    }
  }
}

.fourth-home-section {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(var(--v-theme-nWhite));
  padding: 4rem 10rem;

  .banner-img {
    width: 100%;
    height: 100%;
  }

  .banner-main {
    max-width: 544px;

    .banner-title {
      font-family: Moranga-Medium, Helvetica, sans-serif;
      font-size: 48px;
      font-weight: 500;
      line-height: 110%;
      margin-bottom: 24px;
      color: rgb(var(--v-theme-nText));
    }

    .banner-text {
      font-family: Epilogue, Helvetica, sans-serif;
      font-size: 20px;
      font-weight: 500;
      line-height: 150%;
      margin-bottom: 24px;
      color: rgb(var(--v-theme-nText));
    }

    .open-account-btn {
      @include account-btn;
    }
  }
}

.fifth-home-section {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(var(--v-theme-nBackgroundPrimary));
  padding: 4rem 10rem;

  .banner-img {
    width: 100%;
    height: 100%;
  }

  .banner-main {
    max-width: 544px;

    .banner-title {
      font-family: Moranga-Medium, Helvetica, sans-serif;
      font-size: 48px;
      font-weight: 500;
      line-height: 110%;
      margin-bottom: 24px;
      color: rgb(var(--v-theme-nText));
    }

    .banner-text {
      font-family: Epilogue, Helvetica, sans-serif;
      font-size: 20px;
      font-weight: 500;
      line-height: 150%;
      margin-bottom: 24px;
      color: rgb(var(--v-theme-nText));
    }

    .open-account-btn {
      @include account-btn;
    }
  }
}

.sixth-home-section {
  padding: 2rem 20rem;

  .banner-title {
    font-family: Moranga-Medium, Helvetica, sans-serif;
    font-size: 48px;
    font-weight: normal;
    line-height: 110%;
    margin-bottom: 24px;
    text-align: center;
    color: rgb(var(--v-theme-nText));
  }
}

.seventh-home-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7rem 4rem;
  background-color: rgb(var(--v-theme-nLightBlue));

  .banner {
    max-width: 550px;
    padding: 2rem;

    .banner-title {
      font-family: Moranga-Medium, Helvetica, sans-serif;
      font-size: 48px;
      font-weight: normal;
      line-height: 110%;
      margin-bottom: 24px;
      color: rgb(var(--v-theme-nText));
    }
  }

  .banner-img {
    width: 100%;
    height: 100%;
  }

  .open-account-btn {
    @include account-btn;
    display: inline-block;
  }

  .open-account-btn2 {
    @include account-btn;
    display: none;
  }
}

.eighth-home-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  background-color: rgb(var(--v-theme-nBlue3));

  .banner {
    max-width: 570px;
    padding: 3rem;
    margin: 0 1rem;
    border-radius: 59px 59px 10px;
    background-color: rgb(var(--v-theme-nCyan2));

    .banner-title {
      font-family: Moranga-Medium, Helvetica, sans-serif;
      font-size: 48px;
      font-weight: 500;
      line-height: 110%;
      margin-top: 24px;
      margin-bottom: 24px;
      color: rgb(var(--v-theme-nText));
    }

    .banner-text {
      font-family: Epilogue, Helvetica, sans-serif;
      font-size: 20px;
      font-weight: 500;
      line-height: 150%;
      margin-bottom: 24px;
      color: rgb(var(--v-theme-nText));
    }

    .open-account-btn {
      @include account-btn;
      display: inline-block;
    }
  }

  .banner2 {
    max-width: 570px;
    padding: 1rem;
    margin: 0 1rem;

    .banner2-title {
      border-radius: 40px 40px 40px 5px;
      font-family: Moranga-Medium, Helvetica, sans-serif;
      font-size: 3.125rem;
      font-weight: 500;
      line-height: 3.75rem;
      padding: 10px;
      margin-bottom: 20px;
      text-align: center;
      color: rgb(var(--v-theme-nText));
      background-color: rgb(var(--v-theme-nWhite));
    }

    .banner2-img {
      width: 100%;
      height: 100%;
      border-radius: 64px 64px 64px 10px;
    }
  }
}

@media screen and (max-width: 3000px) {
  .background-picture {
    background-image: url("/assets/hero-2-1920x568.webp");
  }
}

@media screen and (max-width: 1400px) {
  .first-home-section {
    padding: 0 5rem;
  }

  .second-home-section {
    padding: 0 2rem;
  }

  .third-home-section {
    padding: 4rem;
  }

  .fourth-home-section {
    padding: 4rem;
  }

  .fifth-home-section {
    padding: 4rem;
  }

  .sixth-home-section {
    padding: 2rem 10rem;
  }

  .background-picture {
    background-image: url("/assets/hero-2-1920x568.webp");
  }
}

@media screen and (max-width: 1024px) {
  .background-picture {
    background-image: url("/assets/hero-2-1024x568.webp");
  }

  .first-home-section {
    padding: 0 1rem;
  }

  .second-home-section {
    .second-banner-list {
      display: flex;
      flex-direction: column;
      align-items: center;

      li {
        padding: 2rem 0;
      }
    }
  }

  .third-home-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem;
  }

  .fourth-home-section {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding: 4rem;
  }

  .fifth-home-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem;
  }

  .sixth-home-section {
    padding: 2rem;
  }

  .seventh-home-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    .banner {
      padding: 0 1.5rem;
    }

    .open-account-btn {
      display: none;
    }

    .open-account-btn2 {
      display: inline-block;
    }
  }

  .eighth-home-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
}

@media screen and (max-width: 520px) {
  .background-picture {
    background-image: url("/assets/hero-2-520x610.webp");
  }

  .first-home-section {
    padding: 0;
  }

  .third-home-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  .fourth-home-section {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  .fifth-home-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  .sixth-home-section {
    padding: 2rem;
  }

  .seventh-home-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    .banner {
      padding: 0 1rem;
    }

    .open-account-btn {
      display: none;
    }

    .open-account-btn2 {
      display: inline-block;
    }
  }

  .eighth-home-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    .banner {
      max-width: 570px;
      padding: 1.25rem;
    }

    .banner2 {
      max-width: 570px;
      padding: 1.25rem;

      .banner2-title {
        font-size: 2.5rem;
        padding: 8px;
        margin-bottom: 20px;
        text-align: center;
        color: rgb(var(--v-theme-nText));
        background-color: rgb(var(--v-theme-nWhite));
      }
    }
  }
}
</style>
