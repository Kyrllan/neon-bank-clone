<template>
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
</template>

<style scoped lang="scss">
#footer {
  background-color: rgb(var(--v-theme-nBlack));
}

.top-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(var(--v-theme-nBlack));
  border-bottom: 1px solid #6E7882;
  margin: 0 2rem;


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
</style>  

