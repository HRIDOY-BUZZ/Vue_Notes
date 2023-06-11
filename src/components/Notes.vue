<script setup>
  import { ref } from 'vue';

  const notes = ref([])
  const noteTitle = ref("")
  const noteBody = ref("")
  const error = ref("")

  function getRandomColor() {
    return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  }

  const addNote = () => {
    if(noteTitle.value.length < 2) {
      return error.value = "A Title should at least be 2 characters long.";
    }

    if(noteBody.value.length < 5) {
      return error.value = "Too short for a note to save!";
    }
    notes.value.push({
      title: noteTitle.value,
      body: noteBody.value,
      date: new Date(),
      color: getRandomColor()
    })
    noteTitle.value = "";
    noteBody.value = "";
    error.value = "";
    document.getElementById('close').click();
  }
</script>
<template>
  <main>
    <div class="container">
      <header class="container">
        <h1>Notes</h1>
        <button type="button" class="add" data-bs-toggle="modal" data-bs-target="#addModal">+</button>
        <!-- MODAL -->
        <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModal" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="AddNewNote">Add New Note</h1>
                <button type="button" class="btn-close" id="close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label for="note_title" class="form-label">Note Title</label>
                  <input type="text" v-model.trim="noteTitle" class="form-control" id="note_title">
                </div>
                <div class="mb-3">
                  <label for="note_body" class="form-label">Note Body</label>
                  <textarea class="form-control" v-model.trim="noteBody" id="note_body" rows="3"></textarea>
                </div>
                <div v-if="error">
                  <p class="text-danger fst-italic fw-bold">{{ error }}</p>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-success" @click="addNote">Add Note</button>
              </div>
            </div>
          </div>
        </div>
        <!-- MODAL END -->
      </header>
      <div class="container cards-container">
        <button v-for="note in notes" class="card" :style="{backgroundColor: note.color}">
          <div class="card-body">
            <h5 class="card-title">{{ note.title }}</h5>
            <p class="main-text">{{ note.body }}</p>
          </div>
          <div class="card-footer">
            <p class="date">{{ note.date.toLocaleDateString("en-Us") }}</p>
          </div>
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import './../assets/style.css';
</style>