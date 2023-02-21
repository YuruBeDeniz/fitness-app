import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@",  replacement: path.resolve(__dirname, "src")}]
  }
})

//find @ and replace it with current directory folder (__dirname)
//and add src to it.
/* then add this: "paths": {
      "@/*": ["./src/*"]
    }, under compilerOptions in tsconfis.json */ 