/**
 * 原生API示例
 */
import React, { ElementRef, useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";

const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 16px;
  & > canvas {
    width: 100%;
    height: 100%;
  }
`;

interface ProtogenesisExProps {}

function ProtogenesisEx(props: ProtogenesisExProps) {
  const init = (ref: any) => {
    const gl = ref.getContext("webgl");
    if (!gl) {
      // 判断是否支持WebGL
      alert("浏览器不支持WebGL");
      return;
    }
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // 用上面指定的颜色清除缓冲区
    gl.clear(gl.COLOR_BUFFER_BIT);
    console.log(111111, gl);
  };

  return (
    <ContentBox>
      <canvas ref={init}></canvas>
    </ContentBox>
  );
}

export default ProtogenesisEx;
