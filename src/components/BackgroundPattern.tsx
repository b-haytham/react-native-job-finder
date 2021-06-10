import * as React from "react"
import Svg, {
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  Pattern,
  G,
  Path,
  Rect,
} from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg  {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          gradientUnits="userSpaceOnUse"
          x1={0}
          x2={0}
          y1={0}
          y2="100%"
          gradientTransform="rotate(240)"
        >
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={1} stopColor="#44c6d2" />
        </LinearGradient>
        <Pattern
          patternUnits="userSpaceOnUse"
          id="prefix__b"
          width={540}
          height={450}
          x={0}
          y={0}
          viewBox="0 0 1080 900"
        >
          <G fillOpacity={0.1}>
            <Path fill="#444" d="M90 150L0 300h180z" />
            <Path d="M90 150L180 0H0z" />
            <Path fill="#AAA" d="M270 150L360 0H180z" />
            <Path fill="#DDD" d="M450 150l-90 150h180z" />
            <Path fill="#999" d="M450 150L540 0H360z" />
            <Path d="M630 150l-90 150h180z" />
            <Path fill="#DDD" d="M630 150L720 0H540z" />
            <Path fill="#444" d="M810 150l-90 150h180z" />
            <Path fill="#FFF" d="M810 150L900 0H720z" />
            <Path fill="#DDD" d="M990 150l-90 150h180z" />
            <Path fill="#444" d="M990 150l90-150H900z" />
            <Path fill="#DDD" d="M90 450L0 600h180z" />
            <Path d="M90 450l90-150H0z" />
            <Path fill="#666" d="M270 450l-90 150h180z" />
            <Path fill="#AAA" d="M270 450l90-150H180z" />
            <Path fill="#DDD" d="M450 450l-90 150h180z" />
            <Path fill="#999" d="M450 450l90-150H360zM630 450l-90 150h180z" />
            <Path fill="#FFF" d="M630 450l90-150H540z" />
            <Path d="M810 450l-90 150h180z" />
            <Path fill="#DDD" d="M810 450l90-150H720z" />
            <Path fill="#AAA" d="M990 450l-90 150h180z" />
            <Path fill="#444" d="M990 450l90-150H900z" />
            <Path fill="#222" d="M90 750L0 900h180z" />
            <Path d="M270 750l-90 150h180z" />
            <Path fill="#DDD" d="M270 750l90-150H180z" />
            <Path d="M450 750l90-150H360zM630 750l-90 150h180z" />
            <Path fill="#444" d="M630 750l90-150H540z" />
            <Path fill="#AAA" d="M810 750l-90 150h180z" />
            <Path fill="#666" d="M810 750l90-150H720z" />
            <Path fill="#999" d="M990 750l-90 150h180zM180 0L90 150h180z" />
            <Path fill="#444" d="M360 0l-90 150h180z" />
            <Path fill="#FFF" d="M540 0l-90 150h180z" />
            <Path d="M900 0l-90 150h180z" />
            <Path fill="#222" d="M0 300l-90 150H90z" />
            <Path fill="#FFF" d="M0 300l90-150H-90zM180 300L90 450h180z" />
            <Path fill="#666" d="M180 300l90-150H90z" />
            <Path fill="#222" d="M360 300l-90 150h180z" />
            <Path fill="#FFF" d="M360 300l90-150H270z" />
            <Path fill="#444" d="M540 300l-90 150h180z" />
            <Path fill="#222" d="M540 300l90-150H450z" />
            <Path fill="#AAA" d="M720 300l-90 150h180z" />
            <Path fill="#666" d="M720 300l90-150H630z" />
            <Path fill="#FFF" d="M900 300l-90 150h180z" />
            <Path fill="#999" d="M900 300l90-150H810z" />
            <Path d="M0 600l-90 150H90z" />
            <Path fill="#666" d="M0 600l90-150H-90z" />
            <Path fill="#AAA" d="M180 600L90 750h180z" />
            <Path fill="#444" d="M180 600l90-150H90zM360 600l-90 150h180z" />
            <Path fill="#999" d="M360 600l90-150H270z" />
            <Path fill="#666" d="M540 600l90-150H450z" />
            <Path fill="#222" d="M720 600l-90 150h180z" />
            <Path fill="#FFF" d="M900 600l-90 150h180z" />
            <Path fill="#222" d="M900 600l90-150H810z" />
            <Path fill="#DDD" d="M0 900l90-150H-90z" />
            <Path fill="#444" d="M180 900l90-150H90z" />
            <Path fill="#FFF" d="M360 900l90-150H270z" />
            <Path fill="#AAA" d="M540 900l90-150H450z" />
            <Path fill="#FFF" d="M720 900l90-150H630z" />
            <Path fill="#222" d="M900 900l90-150H810zM1080 300l-90 150h180z" />
            <Path fill="#FFF" d="M1080 300l90-150H990z" />
            <Path d="M1080 600l-90 150h180z" />
            <Path fill="#666" d="M1080 600l90-150H990z" />
            <Path fill="#DDD" d="M1080 900l90-150H990z" />
          </G>
        </Pattern>
      </Defs>
      <Rect fill="url(#prefix__a)" width="100%" height="100%" />
      <Rect fill="url(#prefix__b)" width="100%" height="100%" />
    </Svg>
  )
}

const BackgroundPattern = React.memo(SvgComponent)
export default BackgroundPattern
