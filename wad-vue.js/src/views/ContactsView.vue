<template>
    <div class="ContactsBody">
        <div class="ContactsBox">
            <b>This is a contacts page</b>
            <div class = "authors">
                <p>Author 1: Mihkel Kulu</p>
                <p>Author 2: Karel Udras</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

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