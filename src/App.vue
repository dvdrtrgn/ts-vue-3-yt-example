<script setup lang="ts">
import TheShowAlbum from './components/TheShowAlbum.vue';
import useiTunes from './hooks/useiTunes';

const { data, searchItunes, searchText } = useiTunes;
</script>

<template>
    <form @submit.prevent="searchItunes(searchText)">
        <input type="text" v-model="searchText" />
        <br />
        Found {{ data.resultCount ? data.resultCount : 'nothing yet' }}
    </form>

    <div v-if="data.results">
        <div v-for="album in data.results" :key="album.collectionId">
            <TheShowAlbum :album="album" />
        </div>
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    text-align: center;
}
</style>
