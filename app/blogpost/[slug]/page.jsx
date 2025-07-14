// app/blogpost/[slug]/page.jsx
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import { notFound } from "next/navigation";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'

const prettyCodeOptions = {
  theme: "github-dark-dimmed",
  keepBackground: true,
  highlightLines: true,
  showLineNumbers: true,
  copyButton: true,
};

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content");
  const files = await fs.readdir(dir);
  return files.map((file) => ({
    slug: file.replace(".md", ""),
  }));
}

export default async function Page({ params }) {
  const slug = params?.slug;
  const filepath = path.join("content", `${slug}.md`);

  try {
    const fileContent = await fs.readFile(filepath, "utf-8");
    const { content, data } = matter(fileContent);

    const processor = unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypePrettyCode, {
        prettyCodeOptions,
        transformers: [
          transformerCopyButton({
            visibility: "always",
            feedbackDuration: 3_000,
          }),
        ],
      })
      .use(rehypeDocument, { title: data.title || "Blog Post" })
      .use(rehypeFormat)
      .use(rehypeStringify);

    const htmlContent = (await processor.process(content)).toString();

    return (
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6">{data.title}</h1>
        <h3 className="text-xl mb-2 border-l-4 border-gray-500 pl-4 italic">
          {data.description}
        </h3>
        <p className="text-sm text-gray-500 mb-4">{data.date?.toString()}</p>
        <div
          className="text-gray-800 dark:text-gray-200 leading-relaxed
            [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mb-6 [&>h1]:mt-8 [&>h1]:text-gray-900 [&>h1]:dark:text-gray-100
            [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mb-4 [&>h2]:mt-6 [&>h2]:text-gray-900 [&>h2]:dark:text-gray-100
            [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mb-3 [&>h3]:mt-5 [&>h3]:text-gray-900 [&>h3]:dark:text-gray-100
            [&>h4]:text-lg [&>h4]:font-semibold [&>h4]:mb-2 [&>h4]:mt-4 [&>h4]:text-gray-900 [&>h4]:dark:text-gray-100
            [&>h5]:text-base [&>h5]:font-semibold [&>h5]:mb-2 [&>h5]:mt-3 [&>h5]:text-gray-900 [&>h5]:dark:text-gray-100
            [&>h6]:text-sm [&>h6]:font-semibold [&>h6]:mb-2 [&>h6]:mt-3 [&>h6]:text-gray-900 [&>h6]:dark:text-gray-100
            [&>p]:mb-4 [&>p]:leading-7 [&>p]:text-gray-700 [&>p]:dark:text-gray-300
            [&>ul]:mb-4 [&>ul]:ml-6 [&>ul]:list-disc [&>ul]:space-y-2
            [&>ol]:mb-4 [&>ol]:ml-6 [&>ol]:list-decimal [&>ol]:space-y-2
            [&>li]:text-gray-700 [&>li]:dark:text-gray-300 [&>li]:leading-6
            [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:pl-4 [&>blockquote]:py-2 [&>blockquote]:mb-4 [&>blockquote]:italic [&>blockquote]:text-gray-600 [&>blockquote]:dark:text-gray-400 [&>blockquote]:bg-gray-50 [&>blockquote]:dark:bg-gray-800
            
            /* Enhanced Code Block Styling with Better Spacing - High Specificity */
            [&>pre]:bg-gray-900 
            [&>pre]:text-gray-100 
            [&>pre]:!p-6 
            [&>pre]:!px-8
            [&>pre]:!py-6
            [&>pre]:!mx-4
            [&>pre]:!my-8
            [&>pre]:rounded-lg 
            [&>pre]:overflow-x-auto 
            [&>pre]:text-sm 
            [&>pre]:border 
            [&>pre]:border-gray-700 
            [&>pre]:shadow-lg
            [&>pre]:relative
            [&>pre]:leading-relaxed
            
            /* Force padding with important - Override rehype-pretty-code */
            [&_pre]:!p-6
            [&_pre]:!px-8
            [&_pre]:!py-6
            [&_pre]:!mx-4
            [&_pre]:!my-8
            [&_pre]:!rounded-lg
            [&_pre]:!bg-gray-900
            [&_pre]:!border
            [&_pre]:!border-gray-700
            [&_pre]:!shadow-lg
            
            /* Inline Code Styling */
            [&>code]:bg-gray-100 
            [&>code]:dark:bg-gray-800 
            [&>code]:text-red-600 
            [&>code]:dark:text-red-400 
            [&>code]:px-2 
            [&>code]:py-1 
            [&>code]:mx-1
            [&>code]:rounded 
            [&>code]:text-sm 
            [&>code]:font-mono
            [&>code]:font-semibold
            
            /* Code inside pre blocks - Enhanced */
            [&>pre>code]:bg-transparent 
            [&>pre>code]:text-gray-100 
            [&>pre>code]:!p-0 
            [&>pre>code]:!m-0
            [&>pre>code]:font-normal
            [&>pre>code]:leading-relaxed
            
            /* Additional pre code targeting */
            [&_pre_code]:!p-0
            [&_pre_code]:!m-0
            [&_pre_code]:!bg-transparent
            [&_pre_code]:!text-gray-100
            
            /* Highlighted lines - Enhanced */
            [&_[data-highlighted-line]]:bg-blue-500/10 
            [&_[data-highlighted-line]]:border-l-4 
            [&_[data-highlighted-line]]:border-blue-400 
            [&_[data-highlighted-line]]:!pl-6
            [&_[data-highlighted-line]]:!mx-0
            
            /* Line numbers styling - Enhanced */
            [&_.line]:!pl-6
            [&_.line]:!pr-6
            [&_.line]:!py-2
            [&_.line]:min-h-[1.5rem]
            
            /* Specific targeting for rehype-pretty-code */
            [&_[data-rehype-pretty-code-fragment]]:!my-8
            [&_[data-rehype-pretty-code-fragment]_pre]:!p-6
            [&_[data-rehype-pretty-code-fragment]_pre]:!px-8
            [&_[data-rehype-pretty-code-fragment]_pre]:!py-6
            [&_[data-rehype-pretty-code-fragment]_pre]:!mx-4
            
            /* Copy button spacing */
            [&>pre]:hover:[&_.copy-button]:opacity-100
            
            /* Other elements */
            [&>a]:text-blue-600 [&>a]:dark:text-blue-400 [&>a]:hover:underline [&>a]:transition-colors
            [&>strong]:font-bold [&>strong]:text-gray-900 [&>strong]:dark:text-gray-100
            [&>em]:italic [&>em]:text-gray-700 [&>em]:dark:text-gray-300
            [&>hr]:border-gray-300 [&>hr]:dark:border-gray-700 [&>hr]:my-8
            [&>table]:w-full [&>table]:border-collapse [&>table]:mb-4
            [&>table>thead>tr>th]:border [&>table>thead>tr>th]:border-gray-300 [&>table>thead>tr>th]:dark:border-gray-700 [&>table>thead>tr>th]:bg-gray-50 [&>table>thead>tr>th]:dark:bg-gray-800 [&>table>thead>tr>th]:p-2 [&>table>thead>tr>th]:text-left [&>table>thead>tr>th]:font-semibold
            [&>table>tbody>tr>td]:border [&>table>tbody>tr>td]:border-gray-300 [&>table>tbody>tr>td]:dark:border-gray-700 [&>table>tbody>tr>td]:p-2
            [&>img]:max-w-full [&>img]:h-auto [&>img]:rounded-lg [&>img]:shadow-md [&>img]:my-4
          "
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    );
  } catch (err) {
    console.error("Error:", err);
    notFound();
  }
}