<<<<<<< HEAD
=======
import {resolve} from 'path'
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

>>>>>>> 4c48d9e3 (mess)
export default defineConfig({
    root: resolve(__dirname, 'src'),
    build: {
        outDir: resolve(__dirname, 'dist')
    },

    plugins: [handlebars()],

    server: {
        host: 'localhost',
        port: '3000'
    }

<<<<<<< HEAD
})
=======
})
>>>>>>> 4c48d9e3 (mess)
