<template>
    <div class="steps">

        <progressBar :progressPercentage="progressPercentage" :className="'success sm'" />
        
        <div class="steps-wrap">
            <div v-for="(step, index) in props.steps" :key="index" class="step-item" :class="{
                'current': props.currentStep === (index + 1),
                'completed': props.currentStep > (index + 1),
                'xs': props.steps.length >= 3
            }">
                <div class="step-icon">
                    <i v-if="props.currentStep > (index + 1)" class="pi pi-check"></i>
                    <span v-else>{{ index + 1 }}</span>
                </div>
                <div class="step-label">{{ step.title }}</div>
            </div>
        </div>
    </div>

    <slot />
</template>

<script setup>
import progressBar from './progressBar.vue';
const props = defineProps({
    currentStep: {
        type: Number,
        required: true
    },

    steps: {
        type: Array,
        required: true
    }
});

const progressPercentage = computed(() => {
    return ((props.currentStep - 1) / (props.steps.length - 1)) * 100;
});
</script>