<script setup lang="ts">
import { PropType, computed, onMounted } from 'vue';
import { ItunesResult } from '../types/ItunesTypes.interface';

const props = defineProps({
    album: {
        type: Object as PropType<ItunesResult>,
        required: true,
    },
});

const calcDate = computed(() => {
    const date = new Date(props.album.releaseDate);

    return date.toUTCString().slice(5, 16);
});

// onMounted(() => console.log(props.album));
</script>

<template>
    <ul class="TheShowAlbum">
        <li><img :src="album.artworkUrl100" :alt="album.collectionName" /></li>
        <li class="small">
            Tracks: {{ album.trackCount }} <br>
            Price: ${{ album.collectionPrice }} <br>
            <br>
            {{ album.primaryGenreName }} <br>
            {{ calcDate }} <br>
        </li>
        <li class="title">
            “<a :href="album.collectionViewUrl"> {{ album.collectionName }}
            </a>” by
            <a :href="album.artistViewUrl">
                {{ album.artistName }}
            </a>
            <p class="small">{{ album.copyright }}</p>
        </li>
    </ul>
</template>

<style lang="scss">
.TheShowAlbum {
    align-items: center;
    border-bottom: 1px solid silver;
    display: flex;
    list-style: none;
    justify-content: space-between;
    text-align: left;

    a {
        text-decoration: none;
    }

    li:nth-child(1),
    li:nth-child(2) {
        width: 5rem;
    }

    li.title {
        flex-basis: 10%;
        flex-grow: 0.9;
    }

    .small {
        font-size: xx-small;
    }
}
</style>
