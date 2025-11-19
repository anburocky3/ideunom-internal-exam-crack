(function () {
  // Prefill script for SPBA209M - Assignment 2 (Brand Management)
  // Maps radio group names (m21..m40) to chosen option values
  // Each mapping includes a brief rationale in the comment above it.
  const answers = {
    // 1. Refers to a brand's objective attributes in relation to other brands -> brand position
    m21: "a",

    // 2. Marketers can apply branding on -> all the above
    m22: "d",

    // 3. Added value endowed on services and products -> brand equity
    m23: "c",

    // 4. Marketer's vision of brand -> brand promise
    m24: "b",

    // 5. Process of designing image to occupy distinctive place -> positioning
    m25: "a",

    // 6. Company focuses on two frames of reference -> straddling positioning
    m26: "a",

    // 7. BMW positioned brand as -> both luxury & performance
    m27: "d",

    // 8. Included two aspects (association & personality) -> brand image
    m28: "d",

    // 9. An influential brand has high -> brand equity
    m29: "a",

    // 10. Ensure your ... matches customer's perception -> brand associations
    m30: "c",

    // 11. Brand identity is followed by -> brand image
    m31: "b",

    // 12. Indicator of brand strength -> brand reputation
    m32: "a",

    // 13. Shows how consistent customers are in buying your brand -> brand loyalty
    m33: "b",

    // 14. Visual trade name that recognises brand -> logo
    m34: "a",

    // 15. When companies combine existing brand with new brands -> brand extension
    m35: "c",

    // 16. Brand resulting from extension or sub-brand -> brand extension
    m36: "a",

    // 17. Life-buoy: kills germs you cannot see -> functional benefit related positioning
    m37: "b",

    // 18. Co-branding also known as -> dual branding
    m38: "a",

    // 19. Most common forms of external brand communication -> both word-of-mouth & publicity
    m39: "d",

    // 20. Makes a brand follow a new path different from initial success -> reinventing
    m40: "c",
  };

  let setCount = 0;
  for (const q in answers) {
    const selector = `input[type="radio"][name="${q}"][value="${answers[q]}"]`;
    const radio = document.querySelector(selector);
    if (radio) {
      radio.checked = true;
      radio.dispatchEvent(new Event("change", { bubbles: true }));
      setCount++;
      console.log(`Selected ${answers[q]} for ${q}`);
    } else {
      console.warn(`Could not find radio for ${q} value ${answers[q]}`);
    }
  }

  console.log(
    `Prefill complete. ${setCount} answers set for SPBA209M assignment 2.`
  );
})();
