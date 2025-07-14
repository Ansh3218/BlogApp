import fs from "fs";
import matter from "gray-matter";
import path from "path";

export async function GET() {
  const dirPath = path.join(process.cwd(), "content");
  const files = fs.readdirSync(dirPath);

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(dirPath, filename), "utf-8");
    const { data } = matter(fileContent);
    return data;
  });

  return new Response(JSON.stringify(blogs), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
