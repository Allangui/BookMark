<template>

<TopBar/>
<Heading/>
<Features/>
<Extensions/>
<Faq/>
<SendMail/>
<Footer/>

</template>

<script>
import TopBar from "./components/TopBar.vue"
import Heading from "./components/Heading.vue"
import Features from "./components/Features.vue"
import Extensions from "./components/Extensions.vue"
import Faq from "./components/Faq.vue"
import SendMail from "./components/SendMail.vue"
import Footer from "./components/Footer.vue"
import Button from "./components/MyButton.vue"

export default {
  components: {
    TopBar : TopBar,
    Heading : Heading,
    Features : Features,
    Extensions : Extensions,
    Faq : Faq,
    SendMail : SendMail,
    Footer : Footer,
    Button : Button,
  },
}

</script>

<style>
:root{
  --primaryBlue: hsl(231, 69%, 60%);
  --primaryRed: hsl(0, 94%, 66%);
  --neutralBlue: hsl(229, 8%, 60%);
  --neutralDarkBlue:hsl(229, 31%, 21%);
}
html{
  font-size:18px;
  font-family: 'Rubik', sans-serif;
  
}
p{
  font-size: .8rem;
  line-height: 1.3rem;
  color : var(--neutralBlue);
  letter-spacing: .02rem;
  text-align: center;
}
h2{
  font-size: 1.4rem;
  margin:0 auto;
  font-weight: 500;
  color: var(--neutralDarkBlue);
  max-width: 85vw;
  text-align: center;
}
h3{
  font-size: 1.2rem;
  margin:0 auto;
  font-weight: 500;
  color: var(--neutralDarkBlue);
  max-width: 85vw;
  text-align: center;
}
.btnBlue{
  color:white;
  background-color: var(--primaryBlue);
}
.btnGray{
  color: var(--neutralDarkBlue);
  background-color: hsl(228, 14%, 93%);
}
.btnRed{
  color: white;
  background-color: var(--primaryRed);
}
</style>
