<template>
  <header>
    <div class="headerImage"> <!-- Assuming you have a logo or image for the header -->
      <!-- logo/headerimage here -->
    </div>

    <nav>
      <router-link to="/" class="nav-link">Home</router-link> |
      <router-link to="/about" class="nav-link">About</router-link>
    </nav>

    <!-- dropdown components -->

  </header>

  <router-view />
</template>

<style>
body {
  background-color: #fff7eb;
}

header {
  background-color: #288b10;
  color: #fff;
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: 25px;
  position: sticky;
  top: 0;
  margin-bottom: 5px;
}

nav {
  display: flex;
  align-items: center;
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

.headerImage {
  display: flex;
  align-items: center;
  margin: 0px 20px;
}

.headerImage:hover {
  cursor: pointer;
}

/* Add styles for the dropdown if needed */

/* Add styles for the footer if needed */
</style>
