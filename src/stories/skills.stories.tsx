import SkillSection from "../components/skill/SkillSection"
import SkillItems from "../components/skill/SkillItems"
import SkillCircle from "../components/skill/SkillCircle"
import { linkTo } from "@storybook/addon-links"
import React from "react"

export default {
  title: "Skills",
  component: SkillCircle,
}

const items = [
  {
    name: "TypeScript",
    percentage: 80,
  },
  {
    name: "C#",
    percentage: 100,
  },
]

export const SkillSectionStorybook = () => <SkillSection></SkillSection>
SkillSectionStorybook.story = {
  name: "Skill Section",
}

export const SkillItemsStorybook = () => (
  <SkillItems name="Languages" description="プログラミング言語" items={items} />
)
SkillItemsStorybook.story = {
  name: "Skill Items",
}

export const SkillCircleStorybook = () => (
  <SkillCircle skillName={items[0].name} percentage={items[0].percentage} />
)
SkillCircleStorybook.story = {
  name: "Skill Circle",
}
