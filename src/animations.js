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
    transformOrigin: 'top right',
    skewY: 7,
    ease: 'power3.inOut',
    stagger: {
      ammout: 0.1,
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
  });
};
export const hideHamburgerLine2 = (node1) => {
  gsap.to(node1, {
    duration: 0.2,
    x: 500,
    opacity: 0,
  });
};
export const rotateHamburgerLine3 = (node1) => {
  gsap.to(node1, {
    duration: 0.3,
    rotate: -45,
  });
};
// Hamburger Close Animation
export const rotatebackHamburgerLine = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    rotate: 0,
  });
};
export const showHamburgerLine2 = (node1) => {
  gsap.to(node1, {
    duration: 0.3,
    x: 0,
    opacity: 1,
  });
};
