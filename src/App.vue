<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Song } from './types'
import { getSongs, addSong } from './firebase/getSongs'
import SongsList from '@/components/songsList.vue'
import SongsPlayer from '@/components/SongsPlayer.vue'

const songs = ref<Song[]>([])
const isLoading = ref(false)
const showMessage = ref(false)

const playingSongs: Song[] = [
  { id: '1', title: 'song1', artist: 'Artist1', year: 1999 },
  { id: '2', title: 'song2', artist: 'Artist2', year: 2001 },
  { id: '3', title: 'song3', artist: 'Artist3', year: 2002 },
  { id: '4', title: 'song4', artist: 'Artist4', year: 2003 },
]


const addToFavorite = async (songId: string) => {
  const song = playingSongs.find(song => song.id === songId)
  if (song) {
    await addSong(song)
    showMessage.value = true
  }
}

onMounted(async () => {
  getSongs(songs, isLoading)
})
</script>

<template>
  <main>
    <SongsPlayer :songs="playingSongs" @add-to-favorite="addToFavorite" />
    <SongsList :songs="songs" :isLoading="isLoading" />
    <v-snackbar :timeout="2000" v-model="showMessage">
      Song add to favorite
    </v-snackbar>
  </main>
</template>

<style scoped></style>
