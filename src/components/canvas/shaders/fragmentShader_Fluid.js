const fragmentShader = /* glsl */ `
  // Uniforms enviados pelo FluidPlane.jsx
  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  
  varying vec2 vUv;
  
  void main() {
    // Coordenadas normalizadas (-1 a 1)
    vec2 p = 2.0 * vUv - vec2(1.0);
    
    float scale = 1.0;
    
    // Substituímos "time" por "uTime" (que é o que o FluidPlane envia)
    p += 0.1 * cos(scale * 3.0 * p.yx + uTime + vec2(1.2, 3.4));
    p += 0.1 * cos(scale * 3.7 * p.yx + 1.4 * uTime + vec2(2.2, 3.4));
    p += 0.1 * cos(scale * 5.0 * p.yx + 2.6 * uTime + vec2(4.2, 1.4));
    p += 0.3 * cos(scale * 7.0 * p.yx + 3.6 * uTime + vec2(10.2, 3.4));
  
    // Misturando as cores vindas do Leva (uColorA e uColorB) com base na distorção
    vec3 mixedColor = mix(uColorA, uColorB, length(p));
    
    // Se quiser ver apenas vermelho igual ao seu código original, use:
    // gl_FragColor = vec4(length(p), 0.0, 0.0, 1.0);
    
    gl_FragColor = vec4(mixedColor, 1.0);
  }
`;

export default fragmentShader;