# Personal Site

This is my personal Website. I have tried to keep it a template as much as possible.




# Installation


```bash
npm install
npm run dev
```


# Customization

- **Colors**: Edit colors in `tailwind.config.js`
- **Text**: Edit `app/data.ts`, it should contain all strings used in the project
- **Content**: 
I use Markdown files to write "article" pages that can contain anything from a blog post to a list of useful links you want to share. The Markdown parsing is somewhat limited currently:
you can create and edit Markdown files in `app/content`

## Other Changes

- You can use a library like `rehype` or `remark` to add more features to the Markdown parsing. I might add this in the future.

- You can add and Images in `public` and use them in Markdown or on the main page.




# Using Docker
```bash
docker compose up -d --build
```

To stop the container
```bash
docker compose down
```
add `-v` to remove volumnes, add `--rmi all` to remove the image. Or to remove an image later, use:
```bash
docker rmi aa-nextjs-app
```