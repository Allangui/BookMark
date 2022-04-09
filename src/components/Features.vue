<template>
    <div id="mainFeatures">
      <h2>Features</h2>
      <p>
        Our aim is to make it quick and easy for you to access your favourite websites. 
        Your bookmarks sync between your devices so you can access them on the go.
      </p>
      <ul class="navFeatures">
        <li><a :class="linkActive == 1 ? 'linkIsActive': null" @click="linkActive = 1">Simple Bookmarking</a></li>
        <li><a :class="linkActive == 2 ? 'linkIsActive': null" @click="linkActive = 2">Speedy Searching</a></li>
        <li><a :class="linkActive == 3 ? 'linkIsActive': null" @click="linkActive = 3">Easy Sharing</a></li>
      </ul>

      <Transition name="bounce" mode="out-in">
        <div class="feature" v-if="linkActive ==1">
          <div class="forBackImg">
            <img src="../../public/illustration-features-tab-1.svg" alt="Features-1">
          </div>
          <div class="content">
            <h2>Bookmark in one click</h2>
            <p>
              Organize your bookmarks however you like. Our simple drag-and-drop interface 
              gives you complete control over how you manage your favourite sites.
            </p>
            <MyButton classForColor="btnBlue" content="More info" class="myBtn">More info</MyButton>
          </div>
        </div>
        <div class="feature" v-else-if="linkActive ==2">
          <div class="forBackImg">
            <img src="../../public/illustration-features-tab-2.svg" alt="Features-1">
          </div>
          <div class="content">
            <h2>Intelligent search</h2>
            <p>
              Our powerful search feature will help you find saved sites in no time at all. 
              No need to trawl through all of your bookmarks.
            </p>
            <MyButton classForColor="btnBlue" content="More info" class="myBtn">More info</MyButton>
          </div>
        </div>
        <div class="feature" v-else-if="linkActive ==3">
          <div class="forBackImg">
            <img src="../../public/illustration-features-tab-3.svg" alt="Features-1">
          </div>
          <div class="content">
            <h2>Share your bookmarks</h2>
            <p>
              Easily share your bookmarks and collections with others. Create a shareable 
              link that you can send at the click of a button.
            </p>
            <MyButton classForColor="btnBlue" content="More info" class="myBtn">More info</MyButton>
          </div>
        </div>
      </Transition>
    </div>
    <br>
</template>

<script>
import MyButton from "./MyButton.vue"
    export default {
      components: {
        MyButton : MyButton,
      },
        data() {
          return {
            linkActive: 1,
          }
        },
    }
</script>

<style lang="scss" scoped>
#mainFeatures{
  margin:75px auto 0;

  p{
    max-width: 80vw;
    margin:25px auto 40px;
  }
  .navFeatures{
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    margin-bottom: 50px;
    li{
      width:85%;
      border-bottom: solid 1px rgba(37, 43, 70,.1);
      &:first-child{
        border-top: solid 1px rgba(37, 43, 70,.1);
      }
      a{
        display: inline-block;
        text-align: center;
        padding: 15px 0;
        width:100%;
        background-color: transparent;
        border:none;
        
        cursor: pointer;
        color:var(--neutralBlue);
        font-size: .9rem;
        font-weight: 500;
      }
      .linkIsActive{
          position: relative;
          color:var(--neutralDarkBlue);
          &:after{
            content:'';
            position :absolute;
            bottom:0;
            left:50%;
            transform: translateX(-50%);
            width:40%;
            height:2px;
            background-color: var(--primaryRed);
          }
        }
    }
  }
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in .7s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
  .feature{
    display:flex;
    flex-direction: column;
    .forBackImg{
    height:auto;
    position :relative;
    &::after{
      content:'';
      position: absolute;
      bottom:0;
      left:0;
      z-index: 10;
      width:80%;
      height:75%;
      border-bottom-right-radius: 30%;
      background-color: var(--primaryBlue);
    }
    img{
    float: right;
    width:90vw;
    z-index: 11;
    height:auto;
    position: relative;
    padding-bottom:40px;
    }
  }
    h2{
      margin-top:20px;
    }
    .content{
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      p{
        margin:15px auto 30px;
      }
      .myBtn{
        margin: 0 auto;
    }
    }
  }
}
</style>