function setup() {

  // createAdaptiveCanvas(8000, 8000);

  createAdaptiveCanvas(8000, 8000, false);
  // scaler.scaleCanvasTo(1); // <-- não é necessário

  // createAdaptiveCanvas(400, 400, false);
  // scaler.scaleCanvasTo(20);

  // createAdaptiveCanvas(0.4, 0.4, false);
  // scaler.scaleCanvasTo(20000);

  // createAdaptiveCanvas(16000, 16000, false);
  // scaler.scaleCanvasTo(0.5);


  // ##### Observações

  // A
  // Bresenham’s Line Drawing Algorithm 
  // https://www.youtube.com/watch?v=8gIhNSAXYcQ
  // + Anti-Aliasing (Xiaolin Wu's Line Algorithm)

  // B
  // Maximum canvas size (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas)
  // The exact maximum size of a <canvas> element depends on the browser and environment. While in most cases the maximum dimensions exceed 10,000 x 10,000 pixels, notably iOS devices limit the canvas size to only 4,096 x 4,096 pixels. See canvas size limits in different browsers and devices (2021).

  // C
  // Verificar resolução do Mac. 72dpi? Aparentemente Windows é 32dpi. Checar.

  // D
  // Teste para tamanho máximo do <canvas>
  // https://on690.codesandbox.io/

}

function draw() {
  background(220);
  strokeWeight(scaler.width()/100);
  circle(scaler.width()/2,scaler.height()/2,scaler.width()*.75,scaler.height()*.75);
  noLoop();
}
