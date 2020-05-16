import React, { useState } from "react"
import SkillSectionStyle from "./SkillSection.module.css"
import { graphql, useStaticQuery } from "gatsby"
import SkillItems from "./SkillItems"
import { SkillsQuery, SkillsYamlEdge } from "../../../types/graphql-types"

type Props = {}

const SkillSection: React.FC<Props> = ({}: Props) => {
  const items = useStaticQuery(
    graphql`
      query Skills {
        allSkillsYaml {
          edges {
            node {
              section {
                description
                name
                items {
                  name
                  percentage
                  description
                }
              }
            }
          }
        }
      }
    `
  )

  const [text, setText] = useState("")

  const onSkillSelect = (text: string) => {
    setText(text)
    window.location.href = "#skillDetail"
  }

  return (
    <section>
      <h2>Skill</h2>
      <p>触ったことのある技術や環境</p>
      {items.allSkillsYaml.edges.map(({ node }: any) => (
        <SkillItems
          key={node.section.name}
          name={node.section.name}
          description={node.section.description}
          onSkillSelect={onSkillSelect}
          items={node.section.items.map((item: any) => ({
            name: item.name,
            percentage: item.percentage,
            description: item.description,
          }))}
        />
      ))}
      <div className={SkillSectionStyle.lightbox} id="skillDetail">
        <figure>
          <a href="#" className={SkillSectionStyle.close} />
          <figcaption>{text}</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default SkillSection
