import { defineConfig } from "astro/config";

export default defineConfig({
    site: "https://ollie.lol",
    trailingSlash: "ignore",
    devToolbar: {
        enabled: false
    }
})