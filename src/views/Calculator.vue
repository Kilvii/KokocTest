<script setup>
import { computed, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import InputComponent from '@/components/InputComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { useCalculatorStore } from '@/stores/CalculatorStore';

const store = useCalculatorStore()

const searchInput = ref('');
const searchResult = ref('');

const handleSearch = (input) => {
    let searched = store.search(input);
    if (searched) {
        let string = store.primes.join(', ');
        searchResult.value = string;
    }
    else{
        searchInput.value = '';
        searchResult.value = '';

    }
};

</script>

<template>
    <div class="content">
        <div class="calculator">
            <div class="search-field">
                <div class='input-field'>
                    <InputComponent v-model.trim="searchInput" placeholder="Поиск" :max-lenght="3" />
                </div>
                <div class='btn-field'>
                    <ButtonComponent color="primary" title="Найти" @click="handleSearch(searchInput)" />
                </div>
            </div>
            <div class="answer-field">
                <div class="output-field">
                    <p class="text-wrap">{{ searchResult }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    min-width: 320px;
    min-height: 200px;
}

.calculator {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 53px;
}

.calculator>*:not(:last-child) {
    margin-right: 40px;
}

.search-field,
.answer-field {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background-color: white;
    border-radius: 8px;
}

.answer-field {
    height: 128px;
    width: 302px;
}

.search-field>*:not(:last-child) {
    margin-bottom: 16px;
}

.answer-field>*:not(:last-child) {
    margin-bottom: 16px;
}

.input-filed {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: auto;
    width: inherit;
}

.btn-field {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: auto;
    width: 100%;
}

.output-field {
    height: 100%;
    width: 100%;
    padding: 6px;
    border: 1px solid black;
    border-radius: 8px;
    background-color: rgb(246, 234, 234);
    overflow: auto;
}

.text-wrap {
    color: black;
    font-size: 16px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: pre-wrap;
}
</style>