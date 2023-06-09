<template>
  <main>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button type="button" class="add" data-bs-toggle="modal" data-bs-target="#addModal">+</button>
        <!-- MODAL -->
        <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModal" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="AddNewNote">Add New Note</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label for="note_title" class="form-label">Note Title</label>
                  <input type="text" class="form-control" id="note_title">
                </div>
                <div class="mb-3">
                  <label for="note_body" class="form-label">Note Body</label>
                  <textarea class="form-control" id="note_body" rows="3"></textarea>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-success">Add Note</button>
              </div>
            </div>
          </div>
        </div>
        <!-- MODAL END -->
      </header>
      <div class="container cards-container">
        <button class="card">
          <div class="card-body">
            <h5 class="card-title">New Note - 1</h5>
            <p class="main-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, officia.</p>
          </div>
          <div class="card-footer">
            <p class="date">15/15/1550</p>
          </div>
        </button>
        <button class="card">
          <div class="card-body">
            <h5 class="card-title">New Note - 2</h5>
            <p class="main-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, officia.</p>
          </div>
          <div class="card-footer">
            <p class="date">16/15/1550</p>
          </div>
        </button>
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

  button.add{
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
  /* MODAL */
  .modal-header{
    padding: 10px;
  }
  .modal-header h1{
    margin-bottom: 0;
  }

  .modal-footer{
    justify-content: space-between;
    padding: 10px;
  }

  .modal-footer button{
    font-size: 0.8rem;
    margin: 0;
  }
  /* MODAL END */

  .cards-container{
    display: flex;
    flex-wrap: wrap;
  }

  .cards-container a{
    text-decoration: none;
  }
  .card{
    width: 225px;
    height: 225px;
    background-color: orange;
    padding: 10px;
    border-radius: 15px;
    margin-right: 20px;
    margin-bottom: 20px;
    text-align: start;
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