<template>
    <div id="mainHeading" :class="mq.s ? 'mainHeadingMobile':'mainHeadingDesk'" >
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
        inject:["mq"],
        components: {
          MyButton:MyButton,
        },
        
    }
</script>

<style lang="scss" scoped>
.mainHeadingDesk{
  align-items: center;
  margin-top: 50px;
  .forBackImg{
    order:2;
    width: 50%;
    img{
      padding-right: 20px;
    }
  }
  section{
    order:1;  
    width: 50%;
    padding-left:100px;
    h1{
      font-size: 2rem;
      margin:0;
    }
    p{
      max-width: 90%;
      margin:25px 0 30px;
      font-size: .9rem;
    }
    .flexButtons{
      justify-content: flex-start;
    }
  }
}
.mainHeadingMobile{
  flex-direction: column;
  
    .forBackImg{
      order:1;
  }
      section{
      order:2;
      text-align: center;
      h1{
        font-size: 1.6rem;
        max-width: 85vw;
        margin:0 auto;
      }
      p{
        max-width: 80vw;
        margin:25px auto 25px;
      }
      .flexButtons{
      justify-content: center;
      }
    }
}
#mainHeading{
  display: flex;
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
    width:95%;
    z-index: 11;
    height:auto;
    position: relative;
    }
  }
  section{

    margin:50px auto;
    h1{
      font-weight: 500;
      color: var(--neutralDarkBlue);
    }
    .flexButtons{
      display: flex;
      column-gap: 20px;
      max-width: 95vw;
      margin:0 auto;
    }
  }

}
</style>