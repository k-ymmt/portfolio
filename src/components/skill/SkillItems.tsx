import React, { useCallback } from "react"
import SkillCircle from "./SkillCircle"
import skillItemsStyles from "./SkillItems.module.css"

type Props = {
  name: string
  description: string
  onSkillSelect: (text: string) => void
  items: {
    name: string
    percentage: number
    description: string
  }[]
}

const SkillItems: React.FC<Props> = (section: Props) => {
  return (
    <section>
      <h3>{section.name}</h3>
      <ul className={skillItemsStyles.skillItems}>
        {section.items.map(item => (
          <li className={skillItemsStyles.skillItem} key={item.name}>
            <SkillCircle
              skillName={item.name}
              description={item.description}
              percentage={item.percentage}
              onSkillSelect={section.onSkillSelect}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SkillItems
