import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from 'ogl';
import { useEffect, useRef } from 'react';

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function lerp(p1, p2, t) {
  return p1 + (p2 - p1) * t;
}

function autoBind(instance) {
  const proto = Object.getPrototypeOf(instance);
  Object.getOwnPropertyNames(proto).forEach(key => {
    if (key !== 'constructor' && typeof instance[key] === 'function') {
      instance[key] = instance[key].bind(instance);
    }
  });
}

function createProjectCardTexture(gl, project, textColor = 'white') {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  
  // Larger canvas for better text quality
  const isMobile = window.innerWidth < 768;
  canvas.width = isMobile ? 400 : 550;
  canvas.height = isMobile ? 450 : 600;
  
  // Create blurry card background
  context.filter = 'blur(25px)';
  context.fillStyle = 'rgba(50,50,50,0.8)';
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  // Add green border
  context.strokeStyle = 'rgba(8,251,29,0.8)';
  context.lineWidth = 3;
  context.strokeRect(2, 2, canvas.width - 4, canvas.height - 4);
  
  // Reset filter for text
  context.filter = 'none';
  
  // Draw project title - LARGER FONT with Mogra
  const titleFontSize = isMobile ? '32px' : '42px';
  context.font = `bold ${titleFontSize} Mogra, cursive`;
  context.fillStyle = '#08fb1d';
  context.textBaseline = 'top';
  context.textAlign = 'center';
  context.fillText(project.text, canvas.width / 2, 30);
  
  // Add separator line
  context.strokeStyle = 'rgba(8,251,29,0.3)';
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(40, isMobile ? 70 : 80);
  context.lineTo(canvas.width - 40, isMobile ? 70 : 80);
  context.stroke();
  
  // Calculate dynamic layout based on content
  const description = project.description;
  const techs = project.technologies;
  const maxWidth = canvas.width - 60;
  const availableHeight = canvas.height - (isMobile ? 180 : 200); // Reserve space for title, separator, and links
  
  // Calculate content requirements
  let descFontSize = isMobile ? 16 : 20;
  let techHeight = isMobile ? 25 : 30;
  let techRows = Math.ceil(techs.length / Math.floor((canvas.width - 60) / 120)); // Estimate tech rows
  
  // Calculate minimum space needed
  let minDescHeight = 0;
  let minTechHeight = techRows * (techHeight + 8) + 50; // Tech section height
  
  // Test description height with different font sizes
  for (let testSize = descFontSize; testSize >= 10; testSize--) {
    context.font = `${testSize}px Mogra, cursive`;
    let testLineHeight = testSize + (isMobile ? 6 : 8);
    let testHeight = 0;
    let line = '';
    
    const words = description.split(' ');
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' ';
      const metrics = context.measureText(testLine);
      if (metrics.width > maxWidth && i > 0) {
        testHeight += testLineHeight;
        line = words[i] + ' ';
      } else {
        line = testLine;
      }
    }
    testHeight += testLineHeight; // Last line
    
    if (testHeight + minTechHeight <= availableHeight) {
      descFontSize = testSize;
      minDescHeight = testHeight;
      break;
    }
  }
  
  // Calculate dynamic spacing
  let remainingSpace = availableHeight - minDescHeight - minTechHeight;
  let spacing1 = Math.max(35, remainingSpace * 0.4); // After description
  let spacing2 = Math.max(25, remainingSpace * 0.3); // After tech title
  let spacing3 = Math.max(25, remainingSpace * 0.4); // After tech badges
  
  // Start drawing with calculated layout
  let y = isMobile ? 90 : 100;
  
  // Draw description
  context.font = `${descFontSize}px Mogra, cursive`;
  context.fillStyle = '#ffffff';
  context.textAlign = 'left';
  let lineHeight = descFontSize + (isMobile ? 6 : 8);
  
  const words = description.split(' ');
  let line = '';
  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + ' ';
    const metrics = context.measureText(testLine);
    if (metrics.width > maxWidth && i > 0) {
      context.fillText(line, 30, y);
      line = words[i] + ' ';
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  context.fillText(line, 30, y);
  
  // Add dynamic spacing
  y += spacing1;
  
  // Draw technologies section
  context.font = `bold ${isMobile ? '18px' : '24px'} Mogra, cursive`;
  context.fillStyle = '#08fb1d';
  context.fillText('Technologies Used:', 30, y);
  
  y += spacing2;
  
  // Draw technology badges
  context.font = `${isMobile ? '16px' : '20px'} Mogra, cursive`;
  context.fillStyle = '#ffffff';
  let xPos = 30;
  const techPadding = isMobile ? 12 : 15;
  
  techs.forEach((tech, index) => {
    const techWidth = context.measureText(tech).width + techPadding * 2;
    
    if (xPos + techWidth > canvas.width - 30 && index > 0) {
      xPos = 30;
      y += techHeight + 8;
    }
    
    context.fillStyle = 'rgba(8,251,29,0.2)';
    context.fillRect(xPos, y, techWidth, techHeight);
    
    context.strokeStyle = 'rgba(8,251,29,0.4)';
    context.lineWidth = 1;
    context.strokeRect(xPos, y, techWidth, techHeight);
    
    context.fillStyle = '#ffffff';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(tech, xPos + techWidth / 2, y + techHeight / 2);
    
    xPos += techWidth + 10;
  });
  
  // Add final spacing
  y += techHeight + spacing3;
  
  // Add "Explore Me" button at the bottom
  const buttonText = 'Explore Me';
  context.font = `bold ${isMobile ? '20px' : '22px'} Mogra, cursive`;
  const buttonWidth = context.measureText(buttonText).width + 50;
  const buttonHeight = 40;
  const buttonX = (canvas.width - buttonWidth) / 2;
  const buttonY = y;
  
  context.fillStyle = 'rgba(8,251,29,0.3)';
  context.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);
  context.strokeStyle = 'rgba(8,251,29,0.8)';
  context.lineWidth = 2;
  context.strokeRect(buttonX, buttonY, buttonWidth, buttonHeight);
  
  context.fillStyle = '#08fb1d';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(buttonText, buttonX + buttonWidth / 2, buttonY + buttonHeight / 2);
  
  const texture = new Texture(gl, { generateMipmaps: false });
  texture.image = canvas;
  return { texture, width: canvas.width, height: canvas.height };
}

class ProjectCard {
  constructor({ gl, scene, renderer, project, textColor = '#ffffff' }) {
    autoBind(this);
    this.gl = gl;
    this.scene = scene;
    this.renderer = renderer;
    this.project = project;
    this.textColor = textColor;
    this.isHovered = false;
    this.createMesh();
  }
  
  createMesh() {
    const { texture, width, height } = createProjectCardTexture(this.gl, this.project, this.textColor);
    const geometry = new Plane(this.gl);
    
    const program = new Program(this.gl, {
      vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        uniform float uHover;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          // Subtle floating animation
          p.z = (sin(p.x * 2.0 + uTime) * 0.8 + cos(p.y * 1.5 + uTime) * 0.8) * (0.05 + uSpeed * 0.3);
          
          // Hover scale effect
          float scale = 1.0 + uHover * 0.15;
          p.xy *= scale;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;
        
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }
        
        void main() {
          vec4 color = texture2D(tMap, vUv);
          
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          
          float edgeSmooth = 0.005;
          float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);
          
          gl_FragColor = vec4(color.rgb, alpha * color.a);
        }
      `,
      uniforms: {
        tMap: { value: texture },
        uSpeed: { value: 0 },
        uTime: { value: 100 * Math.random() },
        uBorderRadius: { value: 0.05 },
        uHover: { value: 0 }
      },
      transparent: true
    });
    
    this.mesh = new Mesh(this.gl, { geometry, program });
    this.mesh.setParent(this.scene);
    
    // Store original scale for hover animation
    this.originalScale = { x: 0, y: 0 };
  }
  
  setHover(isHovered) {
    this.isHovered = isHovered;
  }
  
  update(scroll, direction) {
    this.mesh.position.x = this.x - scroll.current - this.extra;

    const x = this.mesh.position.x;
    const H = this.viewport.width / 2;

    if (this.bend === 0) {
      this.mesh.position.y = 0;
      this.mesh.rotation.z = 0;
    } else {
      const B_abs = Math.abs(this.bend);
      const R = (H * H + B_abs * B_abs) / (2 * B_abs);
      const effectiveX = Math.min(Math.abs(x), H);

      const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
      if (this.bend > 0) {
        this.mesh.position.y = -arc;
        this.mesh.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
      } else {
        this.mesh.position.y = arc;
        this.mesh.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
      }
    }

    this.speed = scroll.current - scroll.last;
    this.mesh.program.uniforms.uTime.value += 0.02;
    this.mesh.program.uniforms.uSpeed.value = this.speed;

    // Update hover animation
    const targetHover = this.isHovered ? 1 : 0;
    const currentHover = this.mesh.program.uniforms.uHover.value;
    this.mesh.program.uniforms.uHover.value = lerp(currentHover, targetHover, 0.1);

    const meshOffset = this.mesh.scale.x / 2;
    const viewportOffset = this.viewport.width / 2;
    this.isBefore = this.mesh.position.x + meshOffset < -viewportOffset;
    this.isAfter = this.mesh.position.x - meshOffset > viewportOffset;
    
    if (direction === 'right' && this.isBefore) {
      this.extra -= this.widthTotal;
      this.isBefore = this.isAfter = false;
    }
    if (direction === 'left' && this.isAfter) {
      this.extra += this.widthTotal;
      this.isBefore = this.isAfter = false;
    }
  }
  
  onResize({ screen, viewport, bend } = {}) {
    if (screen) this.screen = screen;
    if (viewport) this.viewport = viewport;
    if (bend !== undefined) this.bend = bend;
    
    const isMobile = this.screen.width < 768;
    
    // Larger scale for better readability
    this.scale = isMobile ? this.screen.height / 1000 : this.screen.height / 1200;
    
    // Set card size - larger for content-only
    this.mesh.scale.y = (this.viewport.height * (isMobile ? 400 : 1000) * this.scale) / this.screen.height;
    this.mesh.scale.x = (this.viewport.width * (isMobile ? 300 : 800) * this.scale) / this.screen.width;
    
    // Store original scale for hover animation
    this.originalScale.x = this.mesh.scale.x;
    this.originalScale.y = this.mesh.scale.y;
    
    // Reduced padding between cards
    this.padding = isMobile ? 0.7 : 1; // Reduced from 1.8/2.2
    this.width = this.mesh.scale.x * 1.8;
    this.widthTotal = this.width * this.length;
    this.x = this.width * this.index;
  }
  
  // Check if click is on "Explore Me" button
  isClickOnExploreButton(normalizedX, normalizedY) {
    // Button is in the top-right corner
    return normalizedY > 0.0 && normalizedY < 0.15 && 
           normalizedX > 0.6 && normalizedX < 1.0;
  }
}

class App {
  constructor(
    container,
    {
      items,
      bend,
      textColor = '#ffffff',
      borderRadius = 3,
      scrollSpeed = 2,
      scrollEase = 0.05,
      onProjectClick
    } = {}
  ) {
    this.container = container;
    this.scrollSpeed = scrollSpeed;
    this.scroll = { ease: scrollEase, current: 0, target: 0, last: 0 };
    this.onCheckDebounce = debounce(this.onCheck, 200);
    this.mouse = { x: 0, y: 0 };
    this.onProjectClick = onProjectClick;
    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.onResize();
    this.createGeometry();
    this.createProjectCards(items, bend, textColor, borderRadius);
    this.update();
    this.addEventListeners();
  }
  
  createRenderer() {
    this.renderer = new Renderer({
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio || 1, 2)
    });
    this.gl = this.renderer.gl;
    this.gl.clearColor(0, 0, 0, 0);
    this.container.appendChild(this.gl.canvas);
  }
  
  createCamera() {
    this.camera = new Camera(this.gl);
    this.camera.fov = 30; // Increased FOV for larger cards
    this.camera.position.z = 12; // Adjusted for better view
  }
  
  createScene() {
    this.scene = new Transform();
  }
  
  createGeometry() {
    this.planeGeometry = new Plane(this.gl, {
      heightSegments: 20,
      widthSegments: 20 // Reduced for performance since we don't need complex shapes
    });
  }
  
  createProjectCards(items, bend = 1, textColor, borderRadius) {
    const defaultProjects = [
      {
        text: 'Sample Project',
        description: 'A amazing project description with detailed information about the features and functionality',
        technologies: ['React', 'Node.js', 'MongoDB'],
        liveLink: '#',
        githubLink: '#'
      }
    ];
    
    const galleryItems = items && items.length ? items : defaultProjects;
    this.projectCardsData = galleryItems.concat(galleryItems);
    this.projectCards = this.projectCardsData.map((data, index) => {
      const card = new ProjectCard({
        geometry: this.planeGeometry,
        gl: this.gl,
        scene: this.scene,
        renderer: this.renderer,
        project: data,
        textColor,
      });
      
      // Initialize card properties
      card.index = index;
      card.length = this.projectCardsData.length;
      card.extra = 0;
      card.bend = bend;
      card.onResize({ 
        screen: this.screen, 
        viewport: this.viewport, 
        bend 
      });
      
      return card;
    });
  }
  
  onTouchDown(e) {
    this.isDown = true;
    this.scroll.position = this.scroll.current;
    this.start = e.touches ? e.touches[0].clientX : e.clientX;
  }
  
  onTouchMove(e) {
    if (!this.isDown) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const distance = (this.start - x) * (this.scrollSpeed * 0.025);
    this.scroll.target = this.scroll.position + distance;
  }
  
  onTouchUp(e) {
    this.isDown = false;
    
    // Check for click on links area
    if (e.type === 'mouseup' || e.type === 'touchend') {
      this.handleClick(e);
    }
    
    this.onCheck();
  }
  
  handleClick(e) {
    if (!this.projectCards || !this.camera) return;
    
    const rect = this.gl.canvas.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0] && e.touches[0].clientY) || 0;
    const x = (clientX - rect.left) / rect.width * 2 - 1;
    const y = -((clientY - rect.top) / rect.height) * 2 + 1;
    
    // Find the card that was clicked
    for (const card of this.projectCards) {
      if (!card.mesh) continue;
      
      // Simple collision detection for demo purposes
      // In a real implementation, you'd want proper raycasting
      const cardPos = card.mesh.position;
      const cardScale = card.mesh.scale;
      
      // Convert to screen coordinates (simplified)
      const cardScreenX = (cardPos.x / this.viewport.width) * 2;
      const cardScreenY = (cardPos.y / this.viewport.height) * 2;
      
      const cardWidth = (cardScale.x / this.viewport.width);
      const cardHeight = (cardScale.y / this.viewport.height);
      
      // Check if click is within card bounds
      if (Math.abs(x - cardScreenX) < cardWidth && 
          Math.abs(y - cardScreenY) < cardHeight) {
        
        // Calculate normalized coordinates within the card
        const normalizedX = (x - cardScreenX + cardWidth) / (2 * cardWidth);
        const normalizedY = (y - cardScreenY + cardHeight) / (2 * cardHeight);
        
        // Navigate when clicking anywhere on the card
        if (this.onProjectClick) {
          this.onProjectClick(card.project.text);
        }
        break;
      }
    }
  }
  
  onMouseMove(e) {
    const rect = this.gl.canvas.getBoundingClientRect();
    this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    
    // Update hover states
    if (!this.projectCards) return;
    
    let anyHovered = false;
    for (const card of this.projectCards) {
      if (!card.mesh) continue;
      
      const cardPos = card.mesh.position;
      const cardScale = card.mesh.scale;
      
      const cardScreenX = (cardPos.x / this.viewport.width) * 2;
      const cardScreenY = (cardPos.y / this.viewport.height) * 2;
      
      const cardWidth = (cardScale.x / this.viewport.width);
      const cardHeight = (cardScale.y / this.viewport.height);
      
      const isHovered = Math.abs(this.mouse.x - cardScreenX) < cardWidth && 
                       Math.abs(this.mouse.y - cardScreenY) < cardHeight;
      
      card.setHover(isHovered);
      if (isHovered) anyHovered = true;
    }
    
    // Update cursor style
    this.container.style.cursor = anyHovered ? 'pointer' : 'grab';
  }
  
  onWheel(e) {
    const delta = e.deltaY || e.wheelDelta || e.detail;
    this.scroll.target += (delta > 0 ? this.scrollSpeed : -this.scrollSpeed) * 0.2;
    this.onCheckDebounce();
  }
  
  onCheck() {
    if (!this.projectCards || !this.projectCards[0]) return;
    const width = this.projectCards[0].width;
    const itemIndex = Math.round(Math.abs(this.scroll.target) / width);
    const item = width * itemIndex;
    this.scroll.target = this.scroll.target < 0 ? -item : item;
  }
  
  onResize() {
    this.screen = {
      width: this.container.clientWidth,
      height: this.container.clientHeight
    };
    this.renderer.setSize(this.screen.width, this.screen.height);
    this.camera.perspective({
      aspect: this.screen.width / this.screen.height
    });
    const fov = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;
    this.viewport = { width, height };
    if (this.projectCards) {
      this.projectCards.forEach(card => card.onResize({ 
        screen: this.screen, 
        viewport: this.viewport,
        bend: this.bend
      }));
    }
  }
  
  update() {
    this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
    const direction = this.scroll.current > this.scroll.last ? 'right' : 'left';
    if (this.projectCards) {
      this.projectCards.forEach(card => card.update(this.scroll, direction));
    }
    this.renderer.render({ scene: this.scene, camera: this.camera });
    this.scroll.last = this.scroll.current;
    this.raf = window.requestAnimationFrame(this.update.bind(this));
  }
  
  addEventListeners() {
    this.boundOnResize = this.onResize.bind(this);
    this.boundOnWheel = this.onWheel.bind(this);
    this.boundOnTouchDown = this.onTouchDown.bind(this);
    this.boundOnTouchMove = this.onTouchMove.bind(this);
    this.boundOnTouchUp = this.onTouchUp.bind(this);
    this.boundOnMouseMove = this.onMouseMove.bind(this);
    
    window.addEventListener('resize', this.boundOnResize);
    window.addEventListener('wheel', this.boundOnWheel);
    window.addEventListener('mousedown', this.boundOnTouchDown);
    window.addEventListener('mousemove', this.boundOnTouchMove);
    window.addEventListener('mouseup', this.boundOnTouchUp);
    window.addEventListener('mousemove', this.boundOnMouseMove);
    window.addEventListener('touchstart', this.boundOnTouchDown);
    window.addEventListener('touchmove', this.boundOnTouchMove);
    window.addEventListener('touchend', this.boundOnTouchUp);
  }
  
  destroy() {
    window.cancelAnimationFrame(this.raf);
    window.removeEventListener('resize', this.boundOnResize);
    window.removeEventListener('wheel', this.boundOnWheel);
    window.removeEventListener('mousedown', this.boundOnTouchDown);
    window.removeEventListener('mousemove', this.boundOnTouchMove);
    window.removeEventListener('mouseup', this.boundOnTouchUp);
    window.removeEventListener('mousemove', this.boundOnMouseMove);
    window.removeEventListener('touchstart', this.boundOnTouchDown);
    window.removeEventListener('touchmove', this.boundOnTouchMove);
    window.removeEventListener('touchend', this.boundOnTouchUp);
    if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) {
      this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas);
    }
  }
}

export default function CircularGallery({
  items,
  bend = 3,
  textColor = '#ffffff',
  borderRadius = 0.05,
  scrollSpeed = 2,
  scrollEase = 0.05,
  onProjectClick
}) {
  const containerRef = useRef(null);
  useEffect(() => {
    const app = new App(containerRef.current, { items, bend, textColor, borderRadius, scrollSpeed, scrollEase, onProjectClick });
    return () => {
      app.destroy();
    };
  }, [items, bend, textColor, borderRadius, scrollSpeed, scrollEase]);
  
  return (
    <div 
      className="w-full h-full overflow-hidden" 
      ref={containerRef} 
    />
  );
}