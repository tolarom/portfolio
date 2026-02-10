<script setup>
import skillCard from '../components/skill-card.vue'
import { skills } from '../constants/skill'
</script>

<template>
<div class="container">
    <section class="skill">
        <skillCard 
        v-for="skill in skills"
        :key="skill.name"
        :skill_name= skill.name
        :skill_image= skill.icons
        :percentage= skill.level
        />
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