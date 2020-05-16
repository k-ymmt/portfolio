import React, { useCallback } from "react"

import skillCircleStyles from "./SkillCircle.module.css"

type Props = {
  skillName: string
  percentage: number
  description: string
  onSkillSelect: (text: string) => void
}

const SkillCircle: React.FC<Props> = (props: Props) => {
  const background = `linear-gradient(
    0deg, 
    lightskyblue 0%, 
    lightskyblue ${props.percentage}%, 
    aliceblue ${props.percentage + 8}%, 
    aliceblue 100%
  )`

  const handleClick = useCallback(() => {
    props.onSkillSelect(props.description)
  }, [props])

  return (
    <a
      className={skillCircleStyles.wrapper}
      style={{ background: background }}
      onClick={handleClick}
    >
      <span className={skillCircleStyles.innerText}>
        {props.skillName} <br />
        <span>{props.percentage}%</span>
      </span>
      <div className={skillCircleStyles.fillBackground} />
    </a>
  )
}

export default SkillCircle
