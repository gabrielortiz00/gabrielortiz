"use client";

import { useEffect, useRef } from "react";

const VS = `
  attribute vec2 a_pos;
  void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

const FS = `
  precision highp float;
  uniform float u_time;
  uniform vec2 u_resolution;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1,0)), u.x),
      mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float f = 0.0, a = 0.5;
    for (int i = 0; i < 6; i++) {
      f += a * noise(p);
      p = p * 2.1 + vec2(1.3, 0.7);
      a *= 0.5;
    }
    return f;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float t = u_time * 0.15;

    // Domain-warped fBm — aurora/nebula effect
    vec2 q = vec2(
      fbm(uv * 3.0 + t),
      fbm(uv * 3.0 + t + vec2(5.2, 1.3))
    );
    vec2 r = vec2(
      fbm(uv * 2.5 + 2.0 * q + vec2(1.7, 9.2) + t * 0.6),
      fbm(uv * 2.5 + 2.0 * q + vec2(8.3, 2.8) + t * 0.5)
    );
    float f = fbm(uv * 2.0 + 2.5 * r + t * 0.3);

    // Accent green: #00ff88 = vec3(0, 1, 0.533)
    vec3 col = mix(
      vec3(0.0, 0.04, 0.02),
      vec3(0.0, 1.0, 0.533),
      clamp(f * 1.6 - 0.2, 0.0, 1.0)
    );
    col = mix(col, vec3(0.1, 0.9, 0.5), clamp(f * f * 1.2, 0.0, 1.0));

    // Fade left side for text readability, subtle overall
    float alpha = clamp(f * 1.3 - 0.3, 0.0, 0.38);

    gl_FragColor = vec4(col, alpha);
  }
`;

function compileShader(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  return s;
}

export default function HeroWebGL() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const vs = compileShader(gl, gl.VERTEX_SHADER, VS);
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, FS);
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    // Fullscreen quad
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes  = gl.getUniformLocation(prog, "u_resolution");

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);

    let animFrame: number;
    const start = performance.now();

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(uTime, (performance.now() - start) / 1000);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animFrame = requestAnimationFrame(draw);
    };

    animFrame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 w-full h-full"
    />
  );
}
