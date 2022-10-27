import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';
import { useEffect, useState } from 'react';
import ExecutiveSummaryFile from './ExecutiveSummary.md'
import '../../css/utils.css'

const ExecutiveSummary = () => {
  const [content, setContent] =  useState("")

  useEffect(() => {
    fetch(ExecutiveSummaryFile)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="md">
      <ReactMarkdown remarkPlugins={[gfm]} children={content}/>
    </div>
  )
}

export default ExecutiveSummary;
