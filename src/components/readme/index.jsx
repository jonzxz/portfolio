import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';
import { useEffect, useState } from 'react';
import ReadmeFile from './README.md'
import '../../css/utils.css'
import rehypeRaw from "rehype-raw";

const Readme = () => {
  const [content, setContent] =  useState("")

  useEffect(() => {
    fetch(ReadmeFile)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="md">
      <ReactMarkdown remarkPlugins={[gfm]} children={content} rehypePlugins={[rehypeRaw]}/>
    </div>
  )
}

export default Readme;