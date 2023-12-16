<template>
    <div class="body">
    <div class="ContactsBody">
        <div class="ContactsBox">
            <b>This is a contacts page</b>
            <div class = "authors">
                <p>Author 1: Mihkel Kulu</p>
                <p>Author 2: Karel Udras</p>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>

.body {
  background: linear-gradient(-45deg, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%);
  background-size:  400% 400%;
  animation: gradient 20s ease infinite;
  height: 94vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -5px;
}

@keyframes gradient {
  0% {
    background-position: 0%;
  }
  50% {
    background-position: 100%;
  }
  100% {
    background-position: 0%;
  }
}
.ContactsBox b{
    font-size: 30px;
}
.ContactsBox p{
    font-size: 20px;
}

.ContactsBody{
    display: flex; 
    justify-content: space-around;
    align-items: center;
    height: 90vh;
    min-width: 320px;
    min-height: 0px;
    width: auto;
    flex: 1 0 auto;
}

.ContactsBox{
    padding: 20px; 
    background-color: #f5e1c4; 
    border: 1px solid #99620f; 
    display: flex;
    justify-content: space-around; 
    flex-direction: column;
    border-radius: 5%;
    align-items: center;
    font-size: 17px;
    flex: 1;

    width: 100%;
    height: 100%;

    max-width: 50vw;
    min-width: 250px;

    min-height: 200px;
    max-height: 25vh;

    margin-bottom: 40px;
}

</style>