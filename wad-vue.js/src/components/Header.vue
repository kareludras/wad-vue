<template>
    <header>
      <h1 class = "nameText">PostIt</h1>
      <nav>
        <router-link to="/" class="nav-link">Home</router-link> |
        <router-link to="/contacts" class="nav-link">Contacts</router-link>
      </nav>
    </header>
  </template>

<style scoped>
header {
  background-color: #288b10;
  color: #fff;
  padding: 10px 0;
  justify-content: space-around;
  align-items: center;
  display: flex;
  height: 25px;
  position: sticky; top: 0;
  margin-bottom: 5px;
  padding-right: 90px;
  z-index: 2;
}

header nav {
    display: flex; 
    align-items: center; 
    margin: auto;
}

.nameText{
    padding-left: 10px;
}
.nav-link {
  color: #fff;
  text-decoration: none;
  margin: 0px 5px;
  font-weight: bold;
}

.nav-link:hover {
  text-decoration: underline;
  background-color: #086313;
}
</style>