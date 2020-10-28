import * as React from "react";
/* yellow:#FEEEB2, teal:#C9EBEC, orange:#FDDBB4, purple:#D9C9EC */

function SvgSelect1(props) {
  return (
    <svg className={props.classcall} viewBox="0 0 360 245" preserveAspectRatio="none" {...props}>
    <style>
      { `.select1:hover path{ stroke:${props.color2} } 
         .select1:hover .pupil,
         .select1:hover .bar,
         .select1:hover .bird{ fill:${props.color2}}
         .select1 {cursor:${"pointer"} }
      ` }
    </style>
      <path className="eye"
        stroke="#000"
        strokeWidth={2}
        fill="#fff"
        d="M246.1 33.7c1.6-2.3 4.1-4.2 6.9-4.3 3.7-.2 7.1 2.7 8.6 6.1 1.5 3.4 1.6 7.3 1.6 11.1-6 .6-12.1.7-18.2.6"
      />
      <path className="eye"
        stroke="#000"
        strokeWidth={2}
        fill="#fff"
        d="M247 47.2c-5.5.4-10.9.5-16.4.3-.3 0-.6 0-.8-.2-.5-.2-.7-.8-.8-1.3-1.4-5.4.4-11.5 4.5-15.3 1-.9 2.1-1.7 3.4-2.1 2.1-.6 4.4.3 6 1.7 1.6 1.5 2.6 3.5 3.2 5.6 1 3.7.9 7.5.9 11.3"
      />
      <path className="pupil" fill="#000" d="M239 18.6c-1.9-.5-3.7.3-5.2 1.5-1.3 1-2.7 2.3-3.1 4-.1.5.1 1 .6 1.1s1-.2 1.1-.6c.3-1.2 1.5-2.2 2.5-3s2.3-1.6 3.6-1.2c1.1.2 1.6-1.5.5-1.8zM252.4 22.3c1.2-.6 2.9-.6 4.2-.2.6.1 1.2.4 1.7.8s.9 1 1.3 1.6c.3.4.8.6 1.2.3.4-.2.6-.9.3-1.2-.6-.7-1-1.5-1.8-2.1-.7-.5-1.5-.9-2.3-1.1-1.8-.4-3.9-.4-5.6.4-.4.2-.6.8-.3 1.2.3.4.8.5 1.3.3zM233 47.1c-.6-3.6 0-7.4 1.6-10.6.5-.9 1-1.8 1.8-2.5s1.8-1.1 2.9-1c1.5.1 2.7 1.3 3.2 2.7.6 1.4.6 2.9.6 4.3 0 2.4-.1 4.8-.3 7.2M249.7 46.8c0-.9-.1-1.8-.1-2.6 0-2 .1-4 .8-5.9s2.1-3.6 4-4.2c.6-.2 1.2-.3 1.7 0 .3.2.6.5.8.7 1.5 2.1 1.8 4.8 1.9 7.3.1 1.5.1 3 .1 4.4" />
      <path className="house"
        fill="#fff"
        stroke="#000"
        strokeWidth={2}
        d="M140.6 4.4c-4.1 5.7-8.2 11.4-12.2 17.2-.3.4-.6.8-.7 1.3-.1.4-.1.7-.1 1.1.1 6.5.1 13 .2 19.5 0 .2 0 .5.2.6.2.2.5.2.7.2 7 .1 14 0 21-.3 0-6.8.2-13.5.7-20.3 0-.6.1-1.2-.1-1.8-.1-.4-.4-.7-.6-1.1-3.5-5.3-6.5-10.9-8.8-16.7"
      />
      <path className="bar" stroke="#000" strokeWidth={0.2} d="M127.9 24.3c3.6-.9 7.2-1 10.9-1s7.4.1 11.1.6c1.1.2 1.6-1.6.5-1.8-3.8-.6-7.7-.6-11.6-.6-3.8 0-7.6.1-11.3 1.1-1.2.2-.8 2 .4 1.7z" />
      <path className="windows"
        fill="#fff"
        stroke="#000"
        strokeWidth={2}
        d="M131 26.6c0 1.6 0 3.1-.1 4.7 0 .4 0 .9.2 1.3 1.3 0 2.7-.2 4-.4.1 0 .2 0 .3-.1.1-.1.1-.2.1-.3.1-1.6.1-3.3.2-4.9 0-.1 0-.2-.1-.3-.1-.1-.2-.1-.2-.1l-2.7-.3c-.5-.1-1.1-.1-1.5.1M141.6 26c-.1 1.7-.2 3.5-.2 5.2 0 .2 0 .4.1.6.1.2.4.3.6.3 1.6.3 3.2.3 4.8-.1 0-1.7-.1-3.5-.1-5.2 0-.2 0-.5-.2-.6-.1-.1-.2-.1-.3-.1-1.5-.1-3-.2-4.6-.3M135.5 43.9c-.5-2.5-.5-5-.1-7.4 0-.1 0-.2.1-.2.1-.1.2-.1.3-.1 1.8-.2 3.6-.1 5.3.2.3.1.6.1.7.4.1.1.1.3.1.4.1 2.2.1 4.4.2 6.6"
      />
      <g className="brush">
        <path
          fill="#fff"
          stroke="#000"
          strokeWidth={2}
          d="M103 27.4c-3.6 7.3-7.3 14.8-8.3 22.9-.1.9-.2 1.8.1 2.7.3.9 1 1.6 1.9 1.7.5 0 1-.1 1.4-.3 1.6-.8 2.6-2.5 3.4-4.2 2.9-5.9 5.3-12.1 6.9-18.5.2-.6.3-1.2.2-1.8-.3-1.5-1.9-2.3-3.3-2.5-.7-.1-1.4-.2-1.9-.7-.5-.4-.6-1.1-.7-1.7-.2-2 .4-4.1 1.6-5.7s2.8-2.9 4.7-3.7c1.3-.6 2.7-.9 4-1.5 2-.9 3.7-2.5 4.8-4.3-.9 1.6-1.5 3.3-1.6 5.1-.1 1.5.1 3 .1 4.5-.2 4.5-3.2 8.8-7.5 10.4"
        />
        <path className="bar" stroke="#000" strokeWidth={0.2}  d="M107.8 16.2c-.3.9.1 2 .9 2.6.9.7 2 .8 3.1.5l-1.2-.9c0 1.3.5 2.5 1.6 3.3 1 .7 2.5.8 3.6.1.4-.3.6-.8.3-1.2-.2-.4-.8-.6-1.2-.3l-.4.2c-.2.1.1 0-.2 0h-.5c-.1 0-.2 0-.3-.1-.1 0-.3-.1-.4-.2-.5-.4-.7-1.1-.7-1.7s-.6-1-1.2-.9c-.5.1-1 .2-1.4-.1.1 0 0 0 0 0l-.1-.1c.1.1 0 0 0 0 0-.1-.1-.1-.1-.2 0 .1 0 0 0 0s-.1-.2 0-.1c0 .1 0-.1 0 0V17c.1-.5-.2-1-.6-1.1-.6-.5-1.1-.2-1.2.3z" />
      </g>
      <path className="snail"
        fill="#fff"
        stroke="#000"
        strokeWidth={2}
        d="M305.1 223.4c-.1-2.2-1.6-4.3-3.7-5.1s-4.5-.5-6.2 1c-.5.4-.9.9-1.2 1.5-.6 1.2-.5 2.6-.3 3.9.5 2.5 2.1 4.8 4.4 5.8 1.1.5 2.2.6 3.4.6 4-.1 8-2.8 9.2-6.6.3-1.1.5-2.2.5-3.4 0-1.4-.1-2.8-.7-4.1-1-2.2-3.1-3.7-5.4-4.3-2.3-.7-4.7-.7-7.1-.5-2.7.2-5.5.6-8 1.6-2.5 1.1-4.8 2.9-5.9 5.4-1.5 3.3-.7 7.3.8 10.6 1.3 3.1 3.2 6.1 5.9 8.1 2.8 2.1 6.3 3 9.8 3s6.9-1.1 10-2.7c2.9-1.5 5.7-3.6 7.3-6.4 1.7-2.9 2.2-6.5 1.9-9.9-.3-3.4-1.4-6.7-2.7-9.8l-10 .4"
      />
      <g className="bulb">
        <path 
          fill="#fff"
          stroke="#000"
          strokeWidth={2}
          d="M65.1 43.9c-3.7-2-6.4-5.1-8.2-9s-2.3-8.2-1.4-12.4c.6-3 2.1-6 4.5-8 2.4-1.9 5.4-2.7 8.5-2.9 2.3-.1 4.7.1 6.9 1s4.1 2.3 5.3 4.4c1.1 1.9 1.5 4.3 1.6 6.5.3 7.2-2.3 14.7-7.6 19.6-.2.2-.4.4-.5.6-.1.4 0 .8.1 1.1.4 1.2.9 2.4 1.3 3.6-3.9 1.1-7.8 1.6-11.8 1.7.5-1.9 1.1-3.7 1.6-5.6l-.3-.6z"
        />
        <path d="M65.3 43.9c3.3-3.3 3.7-8.4 3.3-12.8-.2-1.6-.9-4.1-3-3.8-1.9.2-2 2.6-1.7 4 .4 1.8 1.7 3.9 3.5 4.6 2 .7 3.5-.6 4.2-2.3.4-1 .6-2.2.6-3.3 0-.9-.1-2.2-.7-2.9-.4-.5-1.2-.6-1.7-.2-.8.5-1 1.7-1 2.6-.2 2.6.8 5.4 1.6 7.9s1.9 4.9 3.5 7.1c.3.5 1.1 0 .8-.5-1.9-2.7-3.1-5.7-4-8.9-.5-1.6-1-3.3-1-5 0-.5 0-1 .1-1.4 0-.2.1-.3.1-.5.1-.1.2-.3.2-.4h.7c.2.2.3.9.4 1.2.1.5.1 1 .1 1.5 0 1.5-.6 3.8-2.2 4.3-1.8.6-3.2-1.2-3.9-2.6-.5-.9-1.5-4.6.7-4.2 1.8.3 1.7 3.3 1.8 4.6.1 3.7-.3 7.7-3.1 10.4-.4.4.3 1 .7.6z" />
      </g>
      <g className="bow" fill="#fff" stroke="#000" strokeWidth={2}>
        <path d="M23.1 160.8c2.6-2.5 5.2-5 7.8-7.4.1 5.5.1 11 .1 16.5 0 3 0 6-.3 8.9-.4-.1-.7-.4-.9-.8-2.5-3.4-4.9-6.8-7.2-10.4" />
        <path d="M14.1 163c-2.8-3-5.8-5.8-8.9-8.5-1-.9-2-1.8-3.3-2.1-.4 8.2 1.5 16.4 3.4 24.5.1.3.2.6.4.6s.3-.1.4-.2c2.6-2.6 4.6-5.8 6.6-8.9.4-.7.9-1.4 1.1-2.2.3-.8.3-1.7.5-2.5.6-2 2.4-3.6 4.5-4 .8-.1 1.6-.1 2.3.3.4.2.8.6 1.1 1 .8 1.1 1.3 2.5 1.1 3.9-.2 1.3-.9 2.5-1.9 3.2s-2.4 1.1-3.7 1.1c-.4 0-.9-.1-1.3-.3-1-.5-1.7-1.5-2.2-2.5" />
      </g>
      <g className="sun" fill="#fff" stroke="#000" strokeWidth={2}>
        <path d="M31.6 55.3c3.9-3.8 7.8-7.7 11.7-11.5-1.2 5.3-2.8 10.6-4.4 15.8M19.3 55.2c.7-5.4 1.6-10.7 2.6-16.1 2.1 5 4.1 10 6.2 15M11.2 64.4c-2.7-5-5.6-9.8-8.7-14.6.6.1 1.2.5 1.8.8 3.9 2.3 7.7 4.7 11.6 7M10.7 69.6c-3.1 2.3-6.1 4.8-9 7.3 4.1-.9 8.2-.9 12.2-.9M17.6 79.9c-.7 6.4-2.1 12.7-1.9 19.2.4-.6.9-1.2 1.3-1.8 3.4-4.6 6.8-9.3 9.9-14.1" />
        <path d="M37.9 59c-.2-.2-.4-.4-.7-.6-.2-.2-.4-.3-.7-.4-.5-.3-1.1-.6-1.7-.9-1.1-.6-2.2-1.1-3.4-1.5-2.3-.9-4.7-1.4-7.1-1.3-.3 0-.6 0-.8.1-3.7.5-7.1 2.7-9.4 5.7-1.6 2.2-2.7 4.8-2.8 7.5-.1 3 1 6 2.9 8.3 1.8 2.4 4.4 4.2 7.1 5.4 2.8 1.3 5.9 2 9 1.8s6.1-1.4 8.4-3.5c2.6-2.5 4-6.2 4-9.8 0-2.3-.6-4.6-1.6-6.7-.4-.8-.8-1.6-1.3-2.4-.2-.3-.4-.8-.7-1-.5-.2-.8-.5-1.2-.7" />
      </g>
      <g className="select" fill="#fff" strokeWidth={7} stroke="#000">
        <path d="M38.9 62.7c-7.5 10.8-7.3 23.2-7.8 36.4-.6 15.8-1.2 31.7-1.2 47.6 0 14.9.7 29.9 5 44.2 1.5 4.9 3.4 9.7 6.7 13.6 6.9 8.1 18.3 10.5 28.9 12 82.8 11.9 167 4.1 250.1-5.4 3.3-.4 6.8-.8 9.4-2.8 3.8-2.9 4.9-8.1 5.6-12.8 4.2-29 5-58.4 5.9-87.6.3-12.2.7-24.5-1.7-36.5-.8-4.3-2.1-8.7-4.9-12.1-4-4.8-10.5-6.8-16.7-7.9-9.6-1.8-19.4-2.2-29.2-2.5-68.7-2.7-137.5-5.4-206.1-2-16.2.6-34.4 2.8-44 15.8" />
    {/*    <path
          fill="#000"
          d="M35.8 60.9c-8 11.7-7.8 25.9-8.3 39.5-.6 15.6-1.2 31.3-1.1 46.9.1 15 .8 30.3 5.2 44.8 2 6.5 4.9 13 10.1 17.6 4.7 4.1 10.6 6.6 16.6 8.2 6.6 1.7 13.4 2.5 20.1 3.3 7.8 1 15.6 1.8 23.4 2.5 15.5 1.4 31.1 2.1 46.6 2.4 31.2.5 62.4-.9 93.5-3.4 15.5-1.2 31-2.7 46.4-4.3 7.7-.8 15.4-1.7 23.1-2.5 3.9-.4 7.7-.8 11.6-1.3 3.5-.5 6.9-1.4 9.7-3.7 5.1-4.2 5.9-11.3 6.8-17.4 1.1-7.8 1.9-15.7 2.6-23.6 1.3-15.6 2-31.3 2.5-47 .5-15.3 1.7-30.9-.3-46.2-.9-7-2.2-14.4-6.9-20-4.2-5-10.7-7.3-16.9-8.6-15.4-3.2-31.5-2.9-47.1-3.6-15.7-.6-31.5-1.2-47.2-1.7-31.7-1-63.3-1.6-95-1.2-15.8.2-31.7.7-47.5 1.4-11.9.6-24.2 1.6-35 7-5.1 2.6-9.4 6.3-12.9 10.9-1.2 1.6-.3 4.1 1.3 5 1.9 1.1 3.8.3 5-1.3 6.3-8.4 17.3-11.6 27.6-13.1 5.6-.8 11.7-1.1 17.5-1.3 7.8-.4 15.5-.6 23.3-.8 30.6-.8 61.3-.6 91.9.1 30.7.7 61.4 1.8 92.1 3.2 7.4.3 14.8.8 22.1 2.1 5.4 1 11.6 2.3 15.4 6.7 1.8 2.1 2.8 4.8 3.5 7.4.9 3.3 1.4 6.8 1.8 10.2.8 7.4.8 14.8.7 22.2-.6 30.1-1.4 60.4-5.5 90.2-.7 4.8-.9 12-5.6 14.5-2.6 1.4-5.9 1.5-8.8 1.8-3.6.4-7.3.8-11 1.2-15 1.7-30.1 3.3-45.1 4.6-30.2 2.8-60.5 4.8-90.8 5.2-30.1.4-60.3-.9-90.2-4.6-6.5-.8-13.1-1.6-19.5-3.1-5.2-1.2-10.7-3.1-14.8-6.6-4.7-4.1-7-9.9-8.7-15.7-1.9-6.8-3.1-13.9-3.7-20.9-1.3-14.8-.9-29.8-.5-44.6.2-7.6.5-15.2.8-22.9.4-6.4.4-12.9 1.3-19.2.9-6 2.7-11.7 6.2-16.7 1.1-1.6.3-4-1.3-5-1.8-1-3.9-.3-5 1.4z"
  /> */}
      </g>
      <g className="bird" fill="#000" >
        <path d="M323.4 33.7c4.2-.6 8.7.9 11.6 4.1 2.9 3.2 3.6 8.2 1.8 12.1-.3.6.1 1.4.8 1.4 5.3 0 10.7 2.3 13.9 6.6 3.2 4.3 3.8 10.3 1.2 15-.6 1 1 1.9 1.6.9 2.9-5.3 2.3-12-1.2-16.9-3.6-4.9-9.5-7.5-15.5-7.5.3.5.5.9.8 1.4 2.2-4.6 1.4-10.1-1.8-14-3.3-4-8.6-5.6-13.6-4.8-1.2.1-.7 1.8.4 1.7z" />
        <path d="M331.4 28.6c4.1-1.4 7.9 1.3 9.8 4.8 2.1 4.1 1.8 8.8 1.5 13.2 0 .5.4 1 .9.9 4-.5 8.5-.9 11.8 2 3.2 2.7 4.2 7.2 2.4 11-.5 1.1 1.1 2 1.6.9 1.9-4.3 1.2-9.4-2.2-12.7-3.7-3.7-8.8-3.5-13.7-3l.9.9c.3-5.1.5-10.7-2.4-15.2-2.3-3.7-6.9-6.1-11.2-4.6-1 .5-.6 2.2.6 1.8z" />
      </g>
      <g className="envelope" fill="#fff" stroke="#000" strokeWidth={2}>
        <path d="M27.8 132.9c-7.2.3-14.4-.1-21.5-.5.3-4.6.4-9.2.4-13.9 0-2.2-.1-4.5.4-6.7 2.7-.2 5.3.1 8 .3 4.4.4 8.8.7 13.1 1.1.3 0 .7.1.9.4.1.2.1.4.1.5-.1 3.3-.2 6.5-.2 9.8-.1 3-.2 6-.6 9" />
        <path d="M7.4 112.7c4.2 4 8.3 7.9 12.5 11.9.1.1.2.2.3.2.1 0 .2-.1.3-.2 3.1-3.2 6-6.7 8.5-10.4" />
      </g>
      <text textAnchor="middle" 
          x="50%" y="50%" 
          fill={props.color1}
          className={props.class1} 
      >{props.line1}</text>
      <text textAnchor="middle" 
          x="50%" y="80%" 
          fill={props.color2}
          className={props.class2} 
      >{props.line2}</text>
    </svg>
  )
}

function SvgSelect2(props) {
  return (
    <svg className={props.classcall} viewBox="0 0 360 260" preserveAspectRatio="none" {...props}>
    <style>
    { `.select2:hover path{ stroke:${props.color1} } 
       .select2:hover .bar,
       .select2:hover .crescent
       { stroke:${props.color1}; fill:${props.color1}} 
       .select2 {cursor:${"pointer"} }
    ` }
    </style>
      <g className="mosque">
        <path
          fill="#fff"
          stroke="#000"
          strokeWidth={2}
          d="M57.2 60.7c-.4-10.4-1.1-20.8-2.3-31.1-.1-.6-.1-1.2-.4-1.7-.2-.5-.6-.9-.9-1.3-1.5-2.2-1.3-5.4.4-7.3 1-1.1 2.4-1.8 3.6-2.7 1.2-.9 2.3-2.2 2.2-3.7-.8 1.2.1 2.9 1.3 3.8s2.7 1.4 3.6 2.5c1 1.2 1.2 2.9 1 4.4-.2 1.6-.7 3-1.1 4.6-.8 3.3-.7 6.8-.7 10.2 0 1.1.1 2.3.5 3.4s1.3 2.1 2.4 2.3c.8.2 1.7-.1 2.5-.3.9-.3 2-.8 2.2-1.7.2-.8-.5-1.6-1-2.3-2.1-3-1.8-7.5.8-10.2 1.8-1.9 4.3-2.8 6.6-4.1 4.6-2.6 8.2-6.8 10-11.8-.1 4.7 3.5 9.2 8.1 10.3 3.1.7 6.9.2 8.9 2.7.8 1 1.1 2.4 1.3 3.7.4 2.9.4 5.8 0 8.6-.1.4-.1.8.1 1 .2.3.6.3 1 .4 1.5.1 3.5.1 4.2-1.2.3-.6.3-1.2.3-1.9v-8.2c0-1 0-2.1-.4-3.1-.9-2.6-4.2-4.2-4.2-6.9 0-3.6 5.6-4.9 6.5-8.4.1 2.3 2.3 4 4.1 5.4s3.8 3.6 3.1 5.9c-.3 1-1 1.8-1.5 2.7-1 1.9-.8 4.1-.6 6.2 1 8.9 1.9 17.8 2.9 26.7-21.7 1.3-43.3 2.7-65 4"
        />
        <path
          className="crescent" fill="#000" stroke="#000" strokeWidth={0.8}
          d="M88.9 2.7c-1.7-.6-3.3.4-4.2 1.8-.9 1.4-1.4 3.1-1.1 4.8.5 3 3.9 4.8 6.7 3.6 1.5-.6 2.6-2 2.9-3.6.1-.5-.1-1-.6-1.1-.4-.1-1.1.2-1.1.6-.2 1.2-1 2.1-2.2 2.5-1.1.3-2.3-.1-3.1-.9-1-1-.9-2.5-.4-3.8.3-1.1 1.2-2.6 2.6-2.1.5.2 1-.2 1.1-.6.2-.6-.2-1.1-.6-1.2z"
        />
        <path
          fill="#fff"
          stroke="#000"
          strokeWidth={2}
          d="M69.3 59.9c.3-.9.6-1.8.9-2.6.4-1.1.7-2.2 1.3-3.2.6-1 1.5-1.9 2.6-2.3.5-.2 1-.2 1.5-.1.8.2 1.4.9 1.9 1.6 1.2 1.8 2 3.9 2.3 6M84.5 58.8c-.2-.4-.1-.9 0-1.3.5-1.9 1.4-3.7 2.6-5.2.9-1.1 2.1-2.2 3.5-1.9 1.3.3 2 1.5 2.5 2.7.6 1.8 1 3.6 1 5.5M99.1 58.1c-.1-2.2.5-4.4 1.6-6.3.8-1.3 2.1-2.6 3.6-2.4 1.3.1 2.3 1.3 2.9 2.4 1.1 1.9 1.6 4.2 1.5 6.4"
        />
      </g>
      <path
        className="pen"
        fill="#fff"
        stroke="#000"
        strokeWidth={2}
        d="M40.7 48.7c4.3 8.7 8 17.6 11.2 26.7.2.6.4 1.2.3 1.8-.2.6-.6 1.1-1.1 1.5-2.3 1.9-5.1 3.2-8 3.7-.6.1-1.2.2-1.7-.1-.5-.2-.8-.7-1-1.1-.7-1.2-.7-1.4-1.3-2.6v-.1c-2.8-8.9-6.3-17.4-9.7-26.1-1.2-.6-2.7 1.2-3.7.4-.2-.2-.4-.5-.5-.8-1.7-4.2-3.4-8.3-5.1-12.5-.2-.5-.4-.9-.3-1.4.1-.4.4-.8.6-1.2 3-4.2 4.2-9.6 3.3-14.6 1.1 4.2 5.3 7.4 9.7 7.4.4 0 .8 0 1.1.1.4.2.6.6.8 1 2 4 4 8 6.1 12 .8 1.6 1.7 3.4 1.6 5.2-4.9.5-9.7 2-14 4.4"
      />
      <g className="bar" fill="none" stroke="#000" strokeWidth={0.8} >
        <path d="M24.2 24.6c2.1 6.6 4.9 12.9 8.5 18.8M23.4 24.8c2.1 6.6 5 13 8.6 19 .6 1 2.2.1 1.6-.9-3.5-5.9-6.3-12.1-8.4-18.6-.4-1.1-2.2-.6-1.8.5zM42.6 52.9c-3.2 2.3-6.7 4.2-10.4 5.5" />
        <path d="M42.1 52.1c-3.1 2.2-6.5 4.1-10.1 5.4-.5.2-.8.6-.6 1.1.1.5.7.8 1.1.6 3.8-1.4 7.3-3.3 10.6-5.6.4-.3.6-.8.3-1.3-.3-.2-.9-.5-1.3-.2z" />
      </g>
      <path
        className="moon"
        fill="#fff"
        stroke="#000"
        strokeWidth={2}
        d="M28.6 82.3c-3.6 1.8-6.1 6.8-5.4 10.7.5 2.8 1.8 5.5 4 7.4s5.2 2.8 8 2.3 5.4-2.6 6.2-5.3c1.1 4.6.2 10-3.5 13-3.8 3.1-9.6 2.8-13.9.6-1.4-.7-2.7-1.7-3.8-2.8-2.6-2.8-3.7-6.6-4.5-10.3-.6-2.7-1-5.5-.4-8.1.3-1.3.9-2.6 1.6-3.8 1.2-2 2.9-3.8 5.1-4.7s5-.6 6.6 1"
      />
      <g className="leaf">
        <path
          fill="#fff"
          stroke="#000"
          strokeWidth={2}
          d="M37.1 206.6c-3.2 0-6.4-.7-9.5-1.5-2-.5-4-1.1-5.7-2.1-1.9-1.2-3.5-2.9-4.8-4.6-5.3-6.8-9.3-14.5-14.2-21.6 4.1 2.9 8.8 5 13.7 6.1 3.4.8 6.9 1.1 10.1 2.2 5.6 1.9 10.3 6.3 12.6 11.7.7 1.7 1.2 3.6.9 5.5-.3 1.8-1.5 3.6-3.4 4.2"
        />
        <g className="bar" fill="none" stroke="#000" strokeWidth={0.8} >
          <path d="M14.5 191.3c7.5 5.6 15.8 10.1 24.5 13.3 1.1.4 1.6-1.4.5-1.8-8.6-3.2-16.7-7.6-24.1-13.1-.9-.7-1.8.9-.9 1.6z" />
          <path d="M26 196c-1.7-2.5-2.9-5.2-3.5-8.2-.1-.5-.7-.8-1.1-.6-.5.1-.7.6-.6 1.1.6 3.1 1.8 6.1 3.6 8.6.3.4.8.6 1.3.3.4-.2.6-.8.3-1.2z" />
        </g>
      </g>
      <g fill="#fff" stroke="#000" strokeWidth={2}>
        <path d="M247.3 41.7c-1.8 2.1-2.1 5.1-2.1 7.8-.1 2.4 0 4.9.8 7.3 1.6 4.9 6.5 8.5 11.7 8.7 1.1 0 2.1-.1 3.1-.3 2.2-.6 4.2-2.1 5.6-3.9 2.4-3 3.4-6.9 3.1-10.7s-1.9-7.4-4.3-10.3M246.8 31.8c-1.4-2.3-1.7-5.2-1.5-7.9 0-.8.1-1.7.6-2.4.7-1.1 2.2-1.6 3.4-1.3 1.3.3 2.4 1.1 3.2 2.2s1.3 2.2 1.8 3.4M260.1 26c.1-1.5.9-2.9 1.9-4 .7-.8 1.6-1.5 2.6-1.7 1.8-.5 3.9.6 4.8 2.3.9 1.6.8 3.7.1 5.4-.7 1.7-2.1 3.1-3.5 4.3" />
        <path d="M262.7 26.7c.2-.8.7-1.5 1.2-2 .4-.4 1-.7 1.5-.4.2.1.3.2.4.4.5.6.6 1.4.4 2.1-.3.9-1.1 1.6-1.5 2.5M248.2 28.9c-.1-.7-.2-1.4-.2-2.1-.1-.9-.2-1.8.3-2.6.2-.3.5-.5.8-.5.1 0 .3.1.4.2.8.8 1.5 1.7 1.9 2.8M245 44.2c-1.7 0-3.5.3-5.1 1s-3 1.8-3.9 3.3c-.6.9-.9 2.2-.1 3 .7.7 2 .5 3 .2 2.2-.8 4.3-2 6.1-3.5M267.3 42.7c1.8.7 3.5 1.3 5.2 2.2s3.1 2.2 4.1 3.7c.3.4.5.9.3 1.4s-.7.8-1.2.9c-2.1.6-4.3-.3-6.3-1.3M256.6 49.2c-.9.2-1.6.9-2 1.6-.8 1.2-1.2 2.8-1.1 4.3.1 1 .4 2 1.1 2.6.9.7 2.2.7 3.3.3.9-.4 1.8-1 2.2-1.9.2-.5.3-1 .4-1.5.3-2.1-.4-4.4-2.2-5.5-.8-.5-1.8-.6-2.5 0M280.8 44.3c12.3.4 24.6-.2 36.9-.8-.4 5.7-1.8 11.6-5.6 15.9-.9 1-1.9 1.9-3 2.5-1.2.7-2.6 1-3.9 1.2-1.5.3-2.9.5-4.4.7-1.4.1-2.8.2-4.2.1-4.6-.5-8.6-3.4-11.2-7.1-2.6-3.7-3.9-8.2-4.8-12.6M300.1 20.9l.6 22.8M299.9 20.8c-2.9 4.9-5.8 9.8-8.6 14.8 5.9-.5 11.9-.5 17.9 0-3.1-4.9-6.2-9.7-9.3-14.6M281.8 48.7c11.7.1 23.4-1.1 35.2-.8M276 249.7c-7.4 1.6-14.9 2.9-22.4 4.1 3-3.6 6.1-7.3 9.1-10.9 1-1.2 1.9-2.3 3.1-3.4 1.7-1.6 3.6-2.9 5.5-4.1 11.8-7.8 23.7-15.4 36.2-21.9.5-.2 1-.5 1.5-.4.6.1 1 .5 1.4 1 2.5 2.8 5 5.6 7.4 8.3-14.3 8.6-28.4 17.6-42.1 27.1" />
        <path d="M261 245.5c.7.8 1.4 1.7 2.1 2.5.8 1 1.7 2.2 1.5 3.5M268.7 237.4c2.8 3.3 4.9 7.1 6.1 11.2.1.4.2.8.5 1.1" />
      </g>
      <g className="select">
        <path
          fill="#fff"
          stroke="#000"
          strokeWidth={8}
          d="M37.9 76c-7.7 10.9-7.4 23.5-8 36.8-.6 16-1.3 32-1.2 48.1 0 15 .7 30.2 5.1 44.6 1.5 4.9 3.4 9.8 6.8 13.7 7.1 8.2 18.7 10.6 29.5 12.1 84.6 12.1 170.8 4.2 255.7-5.4 3.4-.4 6.9-.8 9.7-2.8 3.9-2.9 5-8.2 5.7-13 4.3-29.3 5.2-59 6-88.6.4-12.3.7-24.8-1.7-36.8-.9-4.4-2.2-8.8-5.1-12.3-4.1-4.9-10.7-6.8-17.1-8-9.8-1.8-19.9-2.2-29.8-2.6-70.2-2.7-140.6-5.5-210.8-2-16.3.9-35 3.1-44.8 16.2"
        />
      </g>
      <g fill="#fff" stroke="#000" strokeWidth={2}>
        <path d="M248.7 29.9c-1.2 2.1-1.8 3.1-2.1 5.5-.4 2.4.1 4.9 1.6 6.8 2 2.4 5.6 3.1 8.8 3.1.9 0 1.8 0 2.7-.3 2.3-.6 4.2-2.3 5.2-4.5 1-2.1 1.2-4.6.9-6.9-.4-2.7-1.6-5.5-4-6.8-1.7-.9-3.7-1-5.5-.8-3.1.4-6.4 1.7-7.9 4.5" />
        <path d="M251.5 34c0-.6-.1-1.1.1-1.7.1-.3.2-.6.5-.8s.6-.3.9-.3c.3.1.5.3.7.6l.3.9c.1.5.1.9.1 1.4M257.3 33.1c.2-.6.5-1.3 1.1-1.7.1-.1.3-.2.5-.2.3 0 .6.2.8.4.6.8.7 1.8.6 2.8M255.6 36.6c-.5 0-1 .2-1.4.6-.1.1-.3.3-.3.5-.1.4.2.7.5.9s.7.2 1.1.3h.7c.4 0 .8 0 1.2-.2.4-.2.7-.5.7-.9 0-.5-.3-.9-.7-1.1-.4-.2-.9-.3-1.4-.3-.3 0-.7 0-.9.2" />
        <path d="M251.5 39.7c.1.8.2 1.6.6 2.3.3.6.8 1.2 1.5 1.4 1.5.3 2.7-1.1 2.9-2.5.2-.9.1-1.8.1-2.7 0-.6-.9-.6-.9 0 0 .8.1 1.7-.1 2.5-.1.6-.4 1.3-1 1.7-.6.3-1.2.2-1.5-.4-.4-.7-.6-1.5-.7-2.3 0-.2-.2-.5-.5-.5-.2.1-.4.3-.4.5h0z" />
        <path d="M255.8 38.7c-.2.7-.2 1.5-.1 2.3.1.6.4 1.3 1 1.7s1.3.4 1.9.2c.6-.3 1.1-.8 1.4-1.4.4-.7.6-1.6.8-2.3.2-.6-.7-.8-.9-.2-.2.6-.3 1.2-.5 1.7-.2.4-.4.9-.8 1.2-.3.3-.8.4-1.2.2-.4-.2-.6-.7-.7-1.1-.2-.6-.1-1.3 0-1.9.2-.7-.7-1-.9-.4h0z" />
      </g>
      <text textAnchor="middle" 
          x="50%" y="50%" 
          fill={props.color1}
          className={props.class1} 
      >{props.line1}</text>
      <text textAnchor="middle" 
          x="50%" y="80%" 
          fill={props.color2}
          className={props.class2} 
      >{props.line2}</text>
    </svg>
  )
}

const SvgSelect = (props) => {
    switch(props.select){
        case '1':
            return(
                <div style={{position:'relative'}}>
                    {SvgSelect1(props)}
                </div>
            );
        
        default:
            return(
                <div style={{position:'relative'}}>
                    {SvgSelect2(props)}
                </div>
            );
        
    }
}

export default SvgSelect
