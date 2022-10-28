import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';
import { useEffect, useState } from 'react';
import ContactFile from './Contact.md'
import '../../css/utils.css'
import rehypeRaw from "rehype-raw";

const Contact = () => {
  const [content, setContent] =  useState("")

  useEffect(() => {
    fetch(ContactFile)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="md">
      <ReactMarkdown remarkPlugins={[gfm]} children={content} linkTarget={"_blank"} rehypePlugins={[rehypeRaw]}/>
    </div>
  )
}

export default Contact;