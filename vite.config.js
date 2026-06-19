import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // For a <username>.github.io repo, the base must be '/' 
  base: '/', 
  plugins: [
    react(),
    tailwindcss(),
  ],
})