<script setup>
import skillCard from '../components/skill-card.vue'
import logo from '../assets/icons/logo.jpg'
</script>

<template>
<div class="container">
    <section class="skill">
        <skillCard skill_name="hello world" :skill_image="logo" :percentage="70" />
        <skillCard skill_name="hello world" :skill_image="logo" :percentage="40" />
        <skillCard skill_name="hello world" :skill_image="logo" :percentage="90" />
        <skillCard skill_name="hello world" :skill_image="logo" :percentage="90" />
        <skillCard skill_name="hello world" :skill_image="logo" :percentage="90" />
        <skillCard skill_name="hello world" :skill_image="logo" :percentage="70" />
        <skillCard skill_name="hello world" :skill_image="logo" :percentage="40" />
        <skillCard skill_name="hello world" :skill_image="logo" :percentage="90" />
        <skillCard skill_name="hello world" :skill_image="logo" :percentage="90" />
        <skillCard skill_name="hello world" :skill_image="logo" :percentage="90" />
    </section>
</div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.skill {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
    justify-content: center;
    align-items: center;
    padding: 40px;
    width: fit-content;
}


</style>