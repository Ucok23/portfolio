import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import {Posts} from "../model/Posts";


const postsDir = path.join(process.cwd(), 'data/posts/');

export function getSortedPostsData() : Posts[] {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDir);
    return fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDir, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id: id,
            title: matterResult.data.title,
            date: matterResult.data.date
        };
    })
  }