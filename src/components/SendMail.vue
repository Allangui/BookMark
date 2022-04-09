<template>
    <div id="mainSendMail">
      <span class="joined" >35,000+ already joined</span>
      <h4>Stay up-to-date with what we’re doing</h4>
      <div class="formMail">
        <div class="forInputEmail" :class="isEmailError ? 'emailErrorBg': null">
          <input type="email" :class="isEmailError ? 'emailError' : null " @keyup.enter="isEmailValid()" placeholder="Enter your email adress" v-model="email">
          <span v-if="isEmailError" class="errorMsg">Whoops, make sure it's an email</span>
        </div>
        <MyButton class="btnContact" classForColor="btnRed" content="Contact Us" @click="isEmailValid()"/>
      </div>
    </div>
</template>

<script>
import MyButton from "./MyButton.vue"
    export default {
        components: {
          MyButton:MyButton,
        },
        data() {
          return {
            email: '',
            reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
            isEmailError: false,
          }
        },
        methods: {
          isEmailValid() {
            return (this.email == "")? this.isEmailError= false : (this.reg.test(this.email)) ? this.isEmailError= false : this.isEmailError= true;
          }
        },
    }
</script>

<style lang="scss" scoped>
#mainSendMail{
  margin-top:75px;
  padding: 60px 25px 50px;
  background-color: var(--primaryBlue);
  display:flex;
  flex-direction: column;
  
  .joined{
    color:white;
    font-size: .7rem;
    text-transform: uppercase;
    letter-spacing: 4px;
    word-spacing: 3px;
    text-align: center;
  }
  h4{
    color: white;
    font-size: 1.3rem;
    margin:20px auto 30px;
    font-weight: 500;
    text-align: center;
  }

  .formMail{
    display:flex;
    flex-direction: column;
    row-gap: 15px;
    .emailErrorBg{
        background-color: var(--primaryRed);
        border-radius: 5px;
        position:relative;
        &:after{
          content:'';
          position: absolute;
          right:10px;
          top:15px;
          width:20px;
          height:20px;
          background-image: url("../icon-error.svg");
        }
      }
    .forInputEmail{
      input{
        outline: transparent;
        padding:15px 30px 15px 15px;
        font-size: .8rem;
        border:none;
        border-radius: 5px;
        width:100%;
        
      }
      .emailError{
        border:solid 2px var(--primaryRed);
      }
      .errorMsg{
        padding-left:10px;
        font-size: .7rem;
        display: inline-block;
        color:white;
        font-style: italic;
        line-height: 1.2rem;
      }
    }
    .btnContact{
      
  }
  }

}
</style>