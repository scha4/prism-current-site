import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const defaultAuth = 'jwt';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
      'REACT_APP_DEFAULTAUTH': JSON.stringify(defaultAuth),
  }
})
