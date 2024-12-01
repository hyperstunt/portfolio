<template>
    <div>
        <NavBar></NavBar>
        <!-- Home Section -->
        <section id="home" class="text-center py-5 bg-light">
            <h1 class="display-4">Crafting Digital Dreams</h1>
            <p class="lead mt-3">Welcome to my portfolio! I’m a creative developer transforming ideas into stunning web
                experiences.</p>
                <a href="#projects" class="btn btn-lg mt-4 px-4" style="background-color: #FF5733; color: white; border: none;">View My Work</a>
        </section>

        <!-- About Section -->
        <section id="about" class="container py-5">
            <h2 class="mb-4">About Me</h2>
            <p>
                Hello! I’m a software developer specializing in building modern, responsive web applications.
                I have a passion for learning new technologies and delivering high-quality work.
            </p>
            <ul class="list-unstyled mt-4">
                <li><strong>Proficient in:</strong> Vue.js, Nuxt.js, and Tailwind CSS</li>
                <li><strong>Experience:</strong> Building scalable web applications</li>
                <li><strong>Excited about:</strong> Solving challenging problems</li>
            </ul>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="bg-light py-5">
            <div class="container">
                <h2 class="mb-4">Projects</h2>
                <div class="row">
                    <ProjectCard></ProjectCard>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-5">
            <div class="container text-center">
                <h2>Contact Me</h2>
                <p class="mt-3">If you'd like to get in touch, feel free to reach out via email or connect on LinkedIn.
                </p>
                <ul class="list-unstyled mt-4">
                    <li>Email: <a href="mailto:youremail@example.com" class="text-primary">youremail@example.com</a>
                    </li>
                    <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank"
                            class="text-primary">linkedin.com/in/yourprofile</a></li>
                </ul>
            </div>
        </section>
    </div>
</template>


<script setup lang="ts">
</script>

<style lang="scss" scoped></style>