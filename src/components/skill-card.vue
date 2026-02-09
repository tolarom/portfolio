<template>
    <div class="container">
        <div class="image-container">
            <img class="skill-image" :src="skill_image" :alt="skill_name">
        </div>
        <p class="skill-name">{{ skill_name }}</p>
        <p class="percentage-text">{{ percentage }}%</p>
        <div class="progress-bar">
            <div class="progress-complete" :style="{width: percentage + '%'}"></div>
        </div>
    </div>
</template>

<script setup>

defineProps({
    skill_name: String,
    skill_image: String,
    percentage: Number
})

</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 24px 20px;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    width: 200px;
    height: 250px;
    background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.container:hover::before {
    opacity: 1;
}

.container:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: #4CAF50;
}

.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 20px;
    background: linear-gradient(135deg, #f3f4f6 0%, #ffffff 100%);
    padding: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease;
}

.container:hover .image-container {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(76, 175, 80, 0.15);
}

.skill-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08));
    transition: filter 0.3s ease;
}

.container:hover .skill-image {
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.12));
}

.skill-name {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin: 4px 0 0 0;
    color: #1d3455;
    letter-spacing: 0.4px;
    line-height: 1.3;
}

.percentage-text {
    display: inline-block;
    font-size: 24px;
    font-weight: 700;
    color: #4CAF50;
    margin: 0;
    text-shadow: 0 1px 2px rgba(76, 175, 80, 0.1);
    transition: all 0.3s ease;
}

.container:hover .percentage-text {
    transform: scale(1.1);
    color: #45a049;
}

.progress-bar {
    width: 100%;
    height: 8px;
    background-color: #e5e7eb;
    border-radius: 12px;
    overflow: hidden;
    margin-top: auto;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.08);
}

.progress-complete {
    height: 100%;
    background: linear-gradient(90deg, #4CAF50 0%, #66bb6a 50%, #4CAF50 100%);
    background-size: 200% 100%;
    border-radius: 12px;
    transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 12px rgba(76, 175, 80, 0.4);
    animation: shimmer 2s infinite;
    position: relative;
}

.progress-complete::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
        transparent 0%, 
        rgba(255, 255, 255, 0.3) 50%, 
        transparent 100%
    );
    animation: slide 2s infinite;
}

@keyframes shimmer {
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}

@keyframes slide {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}
</style>