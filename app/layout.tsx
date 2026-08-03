import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "一日一知｜AI 技术学习计划",
  description: "一条从概念理解走向代码实现的 NLP、LLM、RAG 与 Agent 进阶学习路线。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
