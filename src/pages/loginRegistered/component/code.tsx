import React, { useRef, useEffect, useState } from 'react'
interface OptionInter {
  code?:any;
  onClick:any;
}
const Code:React.FC<OptionInter> = (props:any) => {
  const { code } = props
  const canvas = useRef<HTMLCanvasElement>(null)
  // const [ ctx, setCtx ] = useState<any>()
  useEffect(() => {
    init(canvas.current, code)
  }, [code])
  const optino = {
    width: 100,
    height: 40
  }
  // 随机数
  const renderRandom = ():number => {
    const num = Math.floor(Math.random() * 10)
    return num
  }

  // 初始化
  const init = (el:any, code:any):void => {
    el.width = optino.width
    el.height = optino.height
    const ctx = el.getContext('2d')
    // setCtx(ctx)

    // 颜色填充
    ctx.fillStyle = '#b5b8df'
    ctx.fillRect(0,0,optino.width,optino.height);

    // 绘制文字
    ctx.beginPath();
    ctx.font="italic 30px arial";
    ctx.fillStyle = '#7e4d43'
    ctx.textAlign="center"
    ctx.fillText(code, optino.width / 2, optino.height - (optino.height / 4));
    ctx.textBaseline='middle'
    ctx.fill()
  }

  const onClick = () => {
    props.onClick && props.onClick()
  }
  return (
    <div><canvas onClick={onClick} ref={canvas} ></canvas></div>
  )
}
export default Code