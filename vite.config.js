import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
proxy:{
"/api":"http://localhost:3000",
// "/api":"https://fyp-back-end-tan.vercel.app",

},
  },
  plugins: [react()],
})

