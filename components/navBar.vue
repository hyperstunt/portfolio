<template>
    <div>
<!-- Navbar -->
<header class="bg-dark text-white py-3">
            <nav class="container d-flex justify-content-between align-items-center">
                <h1 class="h4">Ahmed Gharib</h1>
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/about" class="nav-link text-white">About</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#projects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#contact">Contact</a>
                    </li>
                </ul>
                <!-- Social Media Links -->
                <div class="social-links d-flex">
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" class="text-white mx-2"
                        aria-label="LinkedIn">
                        <i class="fab fa-linkedin fa-lg"></i>
                    </a>
                    <a href="https://github.com/yourusername" target="_blank" class="text-white mx-2"
                        aria-label="GitHub">
                        <i class="fab fa-github fa-lg"></i>
                    </a>
                </div>
            </nav>  
        </header>
    </div>
</template>

<script setup lang="ts">


</script>

<style scoped>

</style>