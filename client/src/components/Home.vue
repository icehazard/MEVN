<template>
    <div class="about">
        <h1>Hello {{their_name}}</h1>
        <h1>This is the about game</h1>
    </div>
</template>

<script>
export default {
    name: 'About',
    data(){
        return{
            their_name: "seb"
            
            
        }
    }
}
</script>

<style>

  .holder {
    background: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  input {
      width: calc(100% - 40px);
      border: 0;
      padding: 20px;
      font-size: 1.3em;
      background-color: #323333;
      color: #687F7F;
  }

  .alert {
    background-color: rgb(247, 252, 255);
    width:100%;
    height: 30px;
  }

</style>
