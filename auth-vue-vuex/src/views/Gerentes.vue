<template>
  <div class="container">
    <h1>Gerentes</h1>
    <div class="row">
      <Gerente
        v-for="gerente in gerentes"
        :key="gerente.numero"
        :gerente="gerente"
      />
    </div>
  </div>
</template>

<script>
import Gerente from "@/components/Gerente.vue";

export default {
  components: {
    Gerente,
  },
  data() {
    return {
      gerentes: [],
    };
  },
  mounted() {
    this.$http
      .get("gerentes")
      .then((response) => (this.gerentes = response.data))
      .catch((erro) => console.log(erro));
  },
  //chama este método antes do componente ser montado
  //para onde vamos "to"; de onde estamos indo "from";  e o que fazer "next"
  // beforeRouteEnter(to, from, next) {
  //   //se não tem token, envia para rota login
  //   if (!this.$store.state.token) {
  //     next({ name: "login" });
  //   }
  //   //se tiver token vai para a rota que está sendo chamada, no caso a /gerentes
  //   next();
  // },
};
</script>

<style>
</style>