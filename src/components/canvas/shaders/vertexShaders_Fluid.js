// O GLSL precisa ser exportado como uma STRING JavaScript
// O Three.js/R3F recebe o shader como texto e envia para a GPU compilar
const vertexShader = /* glsl */ `

  // "varying" = variável que passamos do vertex para o fragment shader
  varying vec2 vUv;

  void main() {
    // Captura as coordenadas UV do vértice atual
    // UV vai de (0,0) no canto inferior esquerdo
    // até (1,1) no canto superior direito
    vUv = uv;

    // gl_Position = posição final do vértice na tela
    // projectionMatrix * modelViewMatrix = transformação padrão da câmera
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }

`;

export default vertexShader;