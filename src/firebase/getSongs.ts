import type { Song } from '@/types'
import { collection, query, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase/config'
import type { Ref } from 'vue'

const DB_NAME = 'songs'


export const getSongs = (songs: Ref<Song[]>, isLoading: Ref<boolean>) => {
    isLoading.value = true
    const q = query(collection(db, DB_NAME))
    onSnapshot(q, (querySnapshot) => {
        const tempSongs: Song[] = []
        querySnapshot.forEach((doc) => {
            tempSongs.push({
                id: doc.id,
                ...doc.data(),
            } as Song)
        })
        isLoading.value = false
        songs.value = tempSongs

    })
}

export const addSong = async (song: Song) => {
    await addDoc(collection(db, DB_NAME), {
        title: song.title,
        artist: song.artist,
        year: song.year
    })
}

export const removeSong = async (songId: string) => {
    await deleteDoc(doc(db, DB_NAME, songId));
}