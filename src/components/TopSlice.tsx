import * as React from 'react'
//import Svg, {Path} from 'react-native-svg'

// A big thank you to https://medium.com/hackernoon/a-simple-pie-chart-in-svg-dbdd653b6936

type TopSlice = {
  width: number
  startPercent: number
  endPercent: number
  fillColor: string
}

const TopSlice: React.FC<TopSlice> = ({width, startPercent, endPercent, fillColor}) => {
  if (startPercent < 0 || startPercent > 1) throw new Error('Please choose a startPercent between zero and one')
  if (endPercent < 0 || endPercent > 1) throw new Error('Please choose an endPercent between zero and one')

  const getCoordinatesForPercent = (percent: number) => [Math.cos, Math.sin]
    .map(trig => trig(2 * Math.PI * percent * 1/2))

  const [startX, startY] = getCoordinatesForPercent(startPercent)
  const [endX, endY] = getCoordinatesForPercent(endPercent)

  const largeArcFlag = Math.round(endPercent)

  const pathData = [
    `M ${startX} ${startY}`, // Move to center
    `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
    `L 0 0`, // Line
  ].join(' ')

  const svgns = "http://www.w3.org/2000/svg"

  return (
    <svg width={width} height={width/2} viewBox='-1 -1 2 2' style={{transform: 'rotate(-0.5turn)' }}>
      <path d={pathData} style={{fill: fillColor, transform: 'translateY(-50%) scale(2)'}} />
    </svg>
  )
}

export default TopSlice
