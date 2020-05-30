import gsap from 'gsap';

// OPEN MENU ANIMATIONS
export const displayReveal = (node1) => {
  gsap.to(node1, {
    duration: 0,
    css: {
      display: 'block',
    },
  });
};
export const strechReveal = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0,
    opacity: 1,
    height: '100%',
  });
};
export const staggerReveal = (node1, node2) => {
  gsap.from([node1, node2], {
    duration: 0.8,
    height: 0,
    transformOrigin: 'right',
    skewY: 7,
    ease: 'power3.inOut',
    stagger: {
      ammout: 0.4,
    },
  });
};
export const fadeInUpText = (node1) => {
  gsap.from(node1, {
    y: -100,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    ease: 'power3.inOut',
  });
};
export const staggerText = (node1, node2, node3) => {
  gsap.from([node1, node2, node3], {
    duration: 0.8,
    x: -800,
    delay: 0.1,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.5,
    },
  });
};

// CLOSE MENU ANIMATIONS
export const displayClose = (node1) => {
  gsap.to(node1, {
    duration: 1,
    css: {
      display: 'none',
    },
  });
};

export const staggerClose = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    height: 0,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.07,
    },
  });
};

// Hamburger Open Animation

export const rotateHamburgerLine1 = (node1) => {
  gsap.to(node1, {
    duration: 0.3,
    rotate: 45,
    backgroundColor: 'white',
  });
};
export const hideHamburgerLine2 = (node1) => {
  gsap.to(node1, {
    duration: 0.2,
    x: 500,
    opacity: 0,
    backgroundColor: 'white',
  });
};
export const rotateHamburgerLine3 = (node1) => {
  gsap.to(node1, {
    duration: 0.3,
    rotate: -45,
    backgroundColor: 'white',
  });
};
export const changeLogoOpen = (node1) => {
  gsap.to(node1, {
    duration: 1,
    position: 'fixed',
    color: 'white',
  });
};
// Hamburger Close Animation
export const rotatebackHamburgerLine = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0.3,
    rotate: 0,
    backgroundColor: 'black',
  });
};
export const showHamburgerLine2 = (node1) => {
  gsap.to(node1, {
    duration: 0.5,
    x: 0,
    opacity: 1,
    backgroundColor: 'black',
  });
};
export const changeLogoClose = (node1) => {
  gsap.to(node1, {
    duration: 1,
    color: 'black',
    position: 'relative',
  });
};
// HomePage Animations

export const staggerPhotoReveal = (node1) => {
  gsap.from(node1, {
    delay: 0.5,
    duration: 1.2,
    y: 300,
    opacity: 0,
    stagger: {
      amount: 1,
    },
  });
};
export const sloganReveal = (node1) => {
  gsap.from(node1, {
    duration: 1,
    y: 300,
    opacity: 0,
  });
};

// Cart Animations

export const handelCartSidePanelOpenAnimation = (node1) => {
  gsap.to(node1, {
    duration: 1,
    x: 0,
    opacity: 1,
  });
};
export const handelCartSidePanelClosenAnimation = (node1) => {
  gsap.to(node1, {
    duration: 1,
    x: 1000,
    opacity: 1,
  });
};

// Hamburger BG Animations

export const handleLocation = (location, locationBackground, description, descriptionHeader) => {
  gsap.to(locationBackground, {
    duration: 0,
    background: `url(${location.image}) `,
  });
  gsap.to(locationBackground, {
    duration: 0.4,
    opacity: 1,
    ease: 'power3.inOut',
  });
  gsap.to(description, {
    innerHTML: location.description,
    color: 'black',
    duration: 0.1,
    fontSize: '0.8rem',
  });
  gsap.to(descriptionHeader, {
    innerHTML: location.name,
    color: 'black',
    duration: 0.5,
  });
};

export const handleCityReturn = (descriptionHeader, description, locationBackground) => {
  gsap.to(descriptionHeader, {
    innerHTML: 'We make high-quality skis',
    color: 'white',
    duration: 0.5,
  });
  gsap.to(description, {
    innerHTML: `that are progressive in their construction as well as in their use in freeride,
    freestyle and all-mountain skiing. Some of the best athletes in the world inform our
    product journey. We capture their stories to inspire fans with exciting content.`,
    color: 'white',
    duration: 0.1,
    fontSize: '0.8rem',
  });
  gsap.to(locationBackground, {
    duration: 0,
    background: ``,
  });
};

export const handleHover = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    y: 3,
    skewX: 4,
    ease: 'power3.inOut',
  });
};
export const handleHoverExit = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    y: -3,
    skewX: 0,
    ease: 'power3.inOut',
  });
};
