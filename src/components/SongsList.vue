<script setup lang="ts">
import type { Song } from '../types'
import { removeSong } from '@/firebase/getSongs';

defineProps<{ songs: Song[]; isLoading: boolean }>()
</script>

<template>
    <div>
        <v-card class="mx-auto pa-2" max-width="300">
            <v-list>
                <v-list-subheader>FAVORITE SONGS</v-list-subheader>
                <div v-if="isLoading" class="loader">LOADING ...</div>
                <div v-else>
                    <v-list-item v-for="(song, i) in songs" :key="i" :value="song" color="primary" rounded="shaped">
                        <template v-slot:prepend>
                            <v-icon icon="mdi-headphones"></v-icon>
                        </template>
                        <template v-slot:append>
                            <v-icon icon="mdi-close" @click="removeSong(song.id)"></v-icon>
                        </template>
                        <v-list-item-title v-text="song.title"></v-list-item-title>
                    </v-list-item>
                </div>
            </v-list>
        </v-card>
    </div>
</template>

<style scoped>
.loader {
    text-align: center;
    color: rgb(22, 22, 114);
}
</style>