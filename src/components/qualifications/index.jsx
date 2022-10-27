import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';
import { useEffect, useState } from 'react';
import QualificationsFile from './Qualifications.md'
import '../../css/utils.css'

const Qualifications = () => {
  const [content, setContent] =  useState("")

  useEffect(() => {
    fetch(QualificationsFile)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="md">
      <ReactMarkdown remarkPlugins={[gfm]} children={content} linkTarget={"_blank"}/>
    </div>
  )
}

export default Qualifications;