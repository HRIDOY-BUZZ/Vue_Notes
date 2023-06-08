<template>
  <main>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button>+</button>
      </header>
      <div class="container cards-container">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">New Note - 1</h5>
            <p class="main-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, officia.</p>
          </div>
          <div class="card-footer">
            <p class="date">15/15/1550</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">New Note - 2</h5>
            <p class="main-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, officia.</p>
          </div>
          <div class="card-footer">
            <p class="date">16/15/1550</p>
          </div>
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
    font-size: 1.5rem;
    line-height: 0;
  }

  .cards-container{
    display: flex;
    flex-wrap: wrap;
  }
  .card{
    width: 225px;
    height: 225px;
    background-color: orange;
    padding: 10px;
    border-radius: 15px;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .card .card-footer{
    font-size: 0.8rem;
    font-weight: bold;
    border-top: unset;
    background-color: unset;
    text-align: start;
    padding-left: 10px;
  }
</style>