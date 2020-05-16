import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SkillSection from "../components/skill/SkillSection"

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Resume</h1>
      <SkillSection />
    </Layout>
  )
}

export default IndexPage
