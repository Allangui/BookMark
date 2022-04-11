<template>
    <div id="mainFaq" :class="mq.s ? 'mainFaqMobile':'mainFaqDesk'">
      <h2>Frequently Asked Questions</h2>
      <p class="pFAQ">Here are some of our FAQs. If you have any other questions you’d like 
        answered please feel free to email us.
      </p>
      <ul>
        <li v-for="data in datas" :key="data.id" @click="data.isOpen ? data.isOpen=false : data.isOpen=true">
          <div class="flexQuestion">
            <span>{{ data.question }}</span>
            <svg :class="data.isOpen ? 'arrowOpen': 'arrowClose'" xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/></svg>
          </div>
          <Transition name="text">
            <p v-show="data.isOpen">{{ data.answer }}</p>
          </Transition>
        </li>
      </ul>

      <MyButton class="btnInfo" classForColor="btnBlue" content="More info"/>
    </div>
</template>

<script>
import datasFAQ from "../../datasFAQ.json"
import MyButton from "./MyButton.vue"
    export default {
      inject:["mq"],
      components: {
        MyButton : MyButton,
      },
        data() {
          return {
            datas : datasFAQ
          }
        },
    }
</script>

<style lang="scss" scoped>
.mainFaqDesk{
  .pFAQ{
    max-width: 450px;
  }
  ul{
    width: 85vw;
    max-width: 500px;
  }
}
.mainFaqMobile{
  .pFAQ{
    max-width: 80vw;
  }
  ul{
    width: 85vw;
    max-width: 85vw;
  }
}
#mainFaq{
  margin-top:75px;
  display: flex;
  flex-direction: column;
  align-content: center;
  h2{
    margin:20px auto;
  }
  .pFAQ{
    margin:10px auto 50px;  
    text-align: center;
  }
  ul{
    display: flex;
    align-self: center;
    flex-direction: column;
    margin:0 auto;
    .text-enter-active{
      transition: all .5s cubic-bezier(0.63, 0.64, 0, 1.02);
    }
    .text-leave-active {
      transition: all .5s cubic-bezier(0, 0.77, 0.86, 0.88);
    }

    .text-enter-from,
    .text-leave-to {
      transform: translateY(-30px);
      opacity: 0;
    }
    li{
      padding:15px 0;
      border-bottom: solid 1px rgba(37, 43, 70,.1);
      cursor: pointer;
      .flexQuestion{
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
          font-size: .8rem;
          line-height: 1.3rem;
          color : var(--neutralDarkBlue);
          font-weight: 500;
          &:hover{
            color:var(--primaryRed);
          }
        }
        .arrowClose{
          transition: all .5s ease-in-out;
          path{
            transition: all .5s ease-in-out;
            stroke:var(--primaryBlue);
          }
        }
        .arrowOpen{
          transform: rotate(180deg);
          transition: all .5s ease-in-out;
          path{
            transition: all .5s ease-in-out;
            stroke:var(--primaryRed);
          }
        }
      }

      p{
        font-weight:400;
        text-align: start;
        margin:30px auto 20px;   
        overflow: hidden;  
      }
    }
  }
  .btnInfo{
    margin: 40px auto;
  }
}
</style>