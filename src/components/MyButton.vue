<template>
    <button :class="classForColor">{{ content }}</button>
</template>

<script>
    export default {
        props: {
          content: {
            type: String,
          },
          classForColor: {
            type: String,
          },
        },
    }
</script>

<style lang="scss" scoped>
button{
    border :2px solid transparent;
    border-radius: 5px;
    padding:15px ;
    font-weight: 500;
    font-size: .9rem;
    letter-spacing: .02rem;
    font-family: 'Rubik', sans-serif;
    -webkit-box-shadow: -1px 7px 5px 0px rgba(0,0,0,0.1); 
    box-shadow: -1px 7px 5px 0px rgba(0,0,0,0.1);
    cursor: pointer;
    outline: transparent;
    transition: all .5s ease;
}
</style>