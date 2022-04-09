<template>
    <div id="mainHeading">
      <div class="forBackImg">
        <img src="../../public/illustration-hero.svg" alt="image-hero">
      </div>
      <section>
        <h1>A Simple Bookmark Manager</h1>
        <p>A clean and simple interface to organize your favourite websites. Open a new 
            browser tab and see your sites load instantly. Try it for free.</p>
        <div class="flexButtons">
          <MyButton
            content="Get it on Chrome"
            classForColor="btnBlue"
          />
          <MyButton
            content="Get it on Firefox"
            classForColor="btnGray"
          />
        </div>
      </section>
    </div>
    <br>
</template>

<script>
import MyButton from "./MyButton.vue"
    export default {
        components: {
          MyButton:MyButton,
        },
        
    }
</script>

<style lang="scss" scoped>
#mainHeading{
  display: flex;
  flex-direction: column;
  .forBackImg{
    height:auto;
    position :relative;
    &::after{
      content:'';
      position: absolute;
      bottom:0;
      right:0;
      z-index: 10;
      width:80%;
      height:75%;
      border-bottom-left-radius: 30%;
      background-color: var(--primaryBlue);
    }
    img{
    order:1;
    width:95vw;
    z-index: 11;
    height:auto;
    position: relative;
    }
  }
  section{
    order:2;
    text-align: center;
    margin:50px auto;
    h1{
      font-size: 1.6rem;
      margin:0 auto;
      font-weight: 500;
      color: var(--neutralDarkBlue);
      max-width: 85vw;
    }
    p{
      max-width: 80vw;
      margin:25px auto 25px;
    }
    .flexButtons{
      display: flex;
      justify-content: center;
      column-gap: 20px;
      max-width: 95vw;
      margin:0 auto;
    }
  }

}
</style>