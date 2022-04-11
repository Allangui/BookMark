<template>
    <div id="mainExtensions" :class="mq.s ? 'mainExtensionsMobile':'mainExtensionsDesk'" >
      <h2>Download the extension</h2>
      <p>
        We’ve got more browsers in the pipeline. Please do let us know if you’ve 
        got a favourite you’d like us to prioritize.
      </p>
      <div class="flexCard">
        <div class="card" v-for="extension in extensions" :key="extension.id">
          <img class="logo" :src="extension.img" alt="img">
          <h3>Add to {{extension.addTo}}</h3>
          <span>Minimum version {{ extension.minVersion }}</span>
          <div class="dots"></div>
          <MyButton class="btnAdd" classForColor="btnBlue" content="Add & Install Extension" ></MyButton>
        </div>
      </div>
    </div>
    <br>
</template>

<script>
import MyButton from "./MyButton.vue"
    export default {
      inject:["mq"],
        components: {
          MyButton: MyButton,
        },
        data() {
          return {
            extensions: [
              {
                img:"../../logo-chrome.svg",
                addTo:"Chrome",
                minVersion:"62",
              },{
                img:"../../logo-firefox.svg",
                addTo:"Firefox",
                minVersion:"55",
              },{
                img:"../../logo-opera.svg",
                addTo:"Opera",
                minVersion:"46",
              }
            ]
          }
        },
    }
</script>

<style lang="scss" scoped>
.mainExtensionsDesk{
    p{
      max-width: 450px;
    }
    .flexCard{
      align-items: flex-start;
      column-gap: 30px;
      max-width: 70%;
      min-width: 700px;
      margin:0 auto;
      height:auto;
      .card{
        margin:0 auto;
        &:nth-child(2){
          margin-top:50px;
        }
        &:nth-child(3){
          margin-top:100px;
        }
      }
    }
}
.mainExtensionsMobile{
      p{
      max-width: 80vw;
    }
    .flexCard{
      flex-direction: column;
      row-gap:50px ;
      .card{
        margin:0 auto;
      }
    }
}
  #mainExtensions{
    margin-top:75px;
      p{
      margin:10px auto 50px;
      text-align: center;
    }
    .flexCard{
      display: flex;
      .card{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding:25px;
      width:80vw;
      -webkit-box-shadow: 0px 10px 7px 15px rgba(0,0,0,0.25); 
      box-shadow: 0px 15px 15px 0px rgba(0,0,0,0.05);
      border-radius: 20px;
      overflow: hidden;
      .logo{
        width: 40%;
        height:auto;
        margin:10px auto 40px;
      }
      h3{
        margin-bottom: 10px;
      }
      span{
        font-size: .8rem;
        line-height: 1.3rem;
        color : var(--neutralBlue);
        letter-spacing: .02rem;
        text-align: center;
      }
      .dots{
        position: relative;
        width:100%;
        height:4px;
        margin:40px auto 25px;
        &:before{
          content:'';
          background-image: url("../bg-dots.svg");
          position:absolute;
          left:-25px;
          top:0;
          height:4px;
          width:150%;
        }
      }
      .btnAdd{

      }
    }

    }
  }
</style>