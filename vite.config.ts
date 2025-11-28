import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Använder relativ sökväg ('./') för att säkerställa att assets laddas korrekt
  // oavsett vad repositoryt heter på GitHub (t.ex. username.github.io/repo-namn/)
  base: './',
})