/**
 * 原生API示例
 */
import React from "react";
import styled from "styled-components";
import { mat4 } from "gl-matrix";

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

interface Protogenesis2DProps {}

function Protogenesis2D(props: Protogenesis2DProps) {
  // 初始化着色器程序
  const init = (ref: any) => {
    if (!ref) {
      return;
    }
    const gl = ref.getContext("webgl");
    let squareRotation = 0.0
    let then = 0 
    if (!gl) {
      // 判断是否支持WebGL
      alert("浏览器不支持WebGL");
      return;
    }

    // 顶点着色器程序
    const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying lowp vec4 vColor;

    void main() {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vColor = aVertexColor;
    }
  `;
    // 片段着色器程序
    const fsSource = `
    varying lowp vec4 vColor;
    void main(void) {
      gl_FragColor = vColor;
    }
  `;

    // 创建指定类型的着色器(编译着色器源码)
    const loadShader = (gl: any, type: any, source: any) => {
      // 创建指定类型的着色器
      const shader = gl.createShader(type);

      // 发送着色器源码到着色器
      gl.shaderSource(shader, source);

      // 编译着色器源码
      gl.compileShader(shader);

      // 查看编译是否成功
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert("错误: " + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    };

    // 初始化着色器程序
    const initShaderProgram = (gl: any, vsSource: any, fsSource: any) => {
      // 生成顶点着色器
      const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);

      // 生成片段着色器
      const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

      // 创建着色器程序
      const shaderProgram = gl.createProgram();
      gl.attachShader(shaderProgram, vertexShader);
      gl.attachShader(shaderProgram, fragmentShader);
      gl.linkProgram(shaderProgram);

      // 创建失败
      if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert(
          "Unable to initialize the shader program: " +
            gl.getProgramInfoLog(shaderProgram)
        );
        return null;
      }

      return shaderProgram;
    };

    const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

    const programInfo = {
      program: shaderProgram,
      attribLocations: {
        vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
        vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
      },
      uniformLocations: {
        projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
        modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
      },
    };

    // 创建对象(即物体)
    const initBuffers = (gl: any) => {
      // 创建缓冲器对象
      const positionBuffer = gl.createBuffer();

      // 绑定上下文
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

      // 正方形的顶点
      const vertices = [
        1.0, 1.0,
        -1.0, 1.0,
        1.0, -1.0,
        -1.0, -1.0,
      ];

      // 将正方形的顶点转化为 WebGL 浮点型类型的数组，并将其传到 gl 对象的  bufferData() 方法来建立对象的顶点
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

      // 给顶点添加颜色
      const colorBuffer = gl.createBuffer();
      // 创建一个四组四值的向量, 每一个向量表示一个顶点的颜色
      const colors = [
        1.0, 1.0, 1.0, 1.0, // 白色
        1.0, 0.0, 0.0, 1.0, // 红色
        0.0, 1.0, 0.0, 1.0, // 绿色
        0.0, 0.0, 1.0, 1.0, // 蓝色
      ]
      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer)
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW)

      return {
        position: positionBuffer,
        color: colorBuffer,
      };
    };

    // 绘制场景(即绘图)
    const drawScene = (gl: any, programInfo: any, buffers: any, deltaTime: any) => {
      // 用黑色清楚缓冲区, 会使图形有黑色背景
      gl.clearColor(0.0, 0.0, 0.0, 1.0);

      gl.clearDepth(1.0); // Clear everything
      gl.enable(gl.DEPTH_TEST); // Enable depth testing
      gl.depthFunc(gl.LEQUAL); // Near things obscure far things

      // Clear the canvas before we start drawing on it.
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      // 使用 mat4 创建一个透视矩阵, 用来模拟摄像机的透视失真
      const fieldOfView = (45 * Math.PI) / 180; // 45度视场
      const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight; // 画布的宽高比
      const zNear = 0.1; // 最小可视距离
      const zFar = 100.0; // 最大可是距离
      const projectionMatrix = mat4.create();
      mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

      // 使用 mat4 创建一个矩阵, 作为场景中心(即绘图中心)
      const modelViewMatrix = mat4.create();
      // 将绘图位置移动到场景中心, 开始绘图
      mat4.translate(
        modelViewMatrix, // destination matrix
        modelViewMatrix, // matrix to translate
        [-0.0, 0.0, -6.0] // amount to translate
      );
      // 设置旋转
      mat4.rotate(
        modelViewMatrix,  // 目的矩阵
        modelViewMatrix,  // 矩阵旋转
        squareRotation,   // 旋转量(以弧度为单位)
        [1, 1, 1]         // 旋转轴
      );

      // 告诉 WebGL 如何从位置缓冲区将位置数据拉取到顶点属性(vertexPosition)
      {
        const numComponents = 2; // 每次迭代拉取 2 个值, 因为顶点是由2个值来确定的
        const type = gl.FLOAT; // 缓冲区的数据类型, 这里是浮点型
        const normalize = false; // 没有标准化
        const stride = 0; // 从一组值到下一组值的字节, 0 表示使用上面的 numComponents 和 type 属性
        const offset = 0; // 缓冲区有多少字节可以开始
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
        gl.vertexAttribPointer(
          programInfo.attribLocations.vertexPosition,
          numComponents,
          type,
          normalize,
          stride,
          offset
        );
        gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
      }

      // 告诉 WebGL 如何从颜色缓冲区中将颜色数据拉去到颜色属性(vertexColor)
      {
        const numComponents = 4;
        const type = gl.FLOAT;
        const normalize = false;
        const stride = 0;
        const offset = 0;
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
        gl.vertexAttribPointer(
            programInfo.attribLocations.vertexColor,
            numComponents,
            type,
            normalize,
            stride,
            offset);
        gl.enableVertexAttribArray(
            programInfo.attribLocations.vertexColor);
      }

      // 告诉 WebGL 在绘图时使用上面定义的程序
      gl.useProgram(programInfo.program);

      // 设置着色器 uniforms
      gl.uniformMatrix4fv(
        programInfo.uniformLocations.projectionMatrix,
        false,
        projectionMatrix
      );
      gl.uniformMatrix4fv(
        programInfo.uniformLocations.modelViewMatrix,
        false,
        modelViewMatrix
      );

      {
        const offset = 0;
        const vertexCount = 4;
        gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
      }

      squareRotation += deltaTime;
    };

    // 渲染
    function render(now: any) {
      now *= 0.001;
      const deltaTime = now - then;
      then = now;

      // 绘图
      drawScene(gl, programInfo, initBuffers(gl), deltaTime);
  
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  };

  return (
    <ContentBox>
      <canvas ref={init}></canvas>
    </ContentBox>
  );
}

export default Protogenesis2D;
