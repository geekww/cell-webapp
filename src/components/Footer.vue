<template>
  <mu-container>
    <mu-bottom-nav class="footer">
      <mu-bottom-nav-item title="Recents" icon="restore"></mu-bottom-nav-item>
      <mu-bottom-nav-item title="Favorites" icon="favorite"></mu-bottom-nav-item>
      <mu-bottom-nav-item title="Nearby" icon="location_on"></mu-bottom-nav-item>
    </mu-bottom-nav>
  </mu-container>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>
  .footer{
    position: fixed;
    bottom: 0;
  }
</style>
