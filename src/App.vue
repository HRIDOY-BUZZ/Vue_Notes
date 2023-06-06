<template>
  <main>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button>+</button>
      </header>
      <div class="container cards-container">
        <div class="card">
          <p class="main-text"></p>
          <p class="date"></p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  main{
    height: 100vh;
    width: 100vw;
  }

  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1{
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 75px;
  }

  button{
    border: none;
    border-radius: 100%;
    background-color: black;
    color: white;
    width: 50px;
    height: 50px;
    padding: 10px;
    cursor: pointer;

  }
</style>