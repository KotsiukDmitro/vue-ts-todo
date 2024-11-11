<script setup lang="ts">
import type { Song } from '../types'

const props = defineProps<{ songs: Song[] }>()
const emits = defineEmits<{
    (event: 'add-to-favorite', id:string): void
}>()
const randomSong = props.songs[Math.floor(Math.random() * props.songs.length)]

</script>

<template>
  <div>
    <v-card title="Player" class="player">
      <v-card-text>
        <v-icon icon="mdi-play"></v-icon>
        {{ randomSong.artist }} - {{ randomSong.title }} ({{ randomSong.year }})
      </v-card-text>

      <v-card-actions>
        <v-btn @click="emits('add-to-favorite', randomSong.id)">Add to favorites</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>
.player {
  margin-bottom: 30px;
}
</style>

