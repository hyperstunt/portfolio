<template>
  <div v-for="project in projects" :key="project.id" class="col-md-6 mb-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ project.name }}</h5>
        <p class="card-text">{{ project.description }}</p>
        <a :href="project.link" target="_blank" class="btn btn-primary">View Project</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Reactive data using the Composition API
const projects = ref([
  { id: 1, name: 'Project 1', description: 'A cool project.', link: '#' },
  { id: 2, name: 'Project 2', description: 'Another amazing project.', link: '#' },
]);
</script>

<style scoped></style>