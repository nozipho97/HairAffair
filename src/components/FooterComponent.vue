<template>
  <footer>
         
          <p>&copy;2023 Hair Affairs | All Rights Reserved</p>
  </footer>
   
</template>

<script>
export default {
  
}
</script>

  

<style scoped>
    footer {
      position: relative;
      background-color: #633075;
      min-height: 10%;
      width: auto;
      padding: 1em 3em;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 20%;
    }
    footer .social_icon,
    footer .menu {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    footer .social_icon a {
      font-size: 1.5em;
      color: black;
      margin: 0 10px;
      display: inline-block;
      transition: 0.5s;
    }
    footer .social_icon a:hover {
      transform: translateY(-10px);
    }
    footer .menu li {
      list-style: none;
    }
    footer .menu li a {
      font-size: 1.2em;
      color: black;
      margin: 0 1em;
      display: inline-block;
      text-decoration: none;
      opacity: 0.75;
    }
    footer .menu li a:hover {
      opacity: 1;
    }
    footer p {
      color: black;
      text-align: center;
      margin-top: 15px;
      margin-bottom: 10px;
      font-size: 2.5rem;
    }
    @media screen and (min-width: 300px) and (max-width: 720px) {
      footer .menu {
        display: grid;
        grid-template-columns: auto auto auto;
      }
      footer .menu li a {
        font-size: 0.8em;
      }
    }
</style >
  


