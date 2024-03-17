<template>
  <NavbarFragment/>
  <div class="container pt-1 pb-2">
  </div>
  <GroupsTable/>
  <FooterFragment/>
</template>

<script>
import FooterFragment from '@/components/FooterFragment.vue'
import GroupsTable from './components/GroupsTable.vue'
import NavbarFragment from '@/components/NavbarFragment.vue'

export default {
  components: {
    FooterFragment,
    NavbarFragment,
    GroupsTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>./components/views/GroupsTable.vue
