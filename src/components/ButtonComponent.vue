<script setup>
const props = defineProps({
    title: {
        type: String,
        default: "",
    },
    color: {
        type: String,
        default: "primary",
    },
})
</script>
<template>
    <div class="btn-wrap">
        <button class="btn" :class="[`btn_${color}`]">
            {{ title }}
        </button>
    </div>
</template>

<style scoped>
.btn-wrap {
    font-size: 16px;
    height: 40px;
    width: inherit;
}

.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    height: inherit;
    width: inherit;
    color: white;
    font-size: 16px;
}

.btn_primary {
    background-color: black;
}

.btn_reset {
    background-color: gray;
}

.btn_delete {
    background-color: red;
}

.btn:hover {
    opacity: 0.7;
}
</style>