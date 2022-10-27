import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';
import { useEffect, useState } from 'react';
import JobExperienceFile from './JobExperience.md'
import '../../css/utils.css'

const JobExperience = () => {
  const [content, setContent] =  useState("")

  useEffect(() => {
    fetch(JobExperienceFile)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="md">
      <ReactMarkdown remarkPlugins={[gfm]} children={content} linkTarget={"_blank"}/>
    </div>
  )
}

export default JobExperience;