<template>
<div>
<button @click="doLogin()">Login</button>
</div>
</template>

<script>
  import Mgr from '../services/AuthService'
  //import Api from '../services/ApiService'
  
  export default {
    name: 'Home',
    data () {
      return {
        mgr: new Mgr(),
        signedIn: true
      }
    },
    methods: {
      doLogin() {
        this.mgr.getSignedIn().then(
          signIn => {
            this.signedIn = signIn
          },
          err => {
            console.log(err)
          }
        )  
      }
    }
  }
</script>

<style scoped>
button:disabled {
  opacity: 0.5;
}
button {
  background: darkslateblue;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 40px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  filter: brightness(125%)
}
</style>