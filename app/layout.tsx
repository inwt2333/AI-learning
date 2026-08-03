import type { Metadata } from "next";
import "./globals.css";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const siteUrl = isGitHubPages
  ? "https://inwt2333.github.io/AI-learning"
  : "https://yiriyizhi-ai-learning.shzykun.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: "一日一知｜AI 技术学习计划",
  description: "一条从概念理解走向代码实现的 NLP、LLM、RAG 与 Agent 进阶学习路线。",
  openGraph: {
    title: "一日一知｜AI 技术学习计划",
    description: "每天弄懂一个 AI 技术细节。",
    type: "website",
    locale: "zh_CN",
    images: [{ url: `${siteUrl}/og.png`, width: 1733, height: 907, alt: "一日一知——每天弄懂一个 AI 技术细节" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "一日一知｜AI 技术学习计划",
    description: "每天弄懂一个 AI 技术细节。",
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
