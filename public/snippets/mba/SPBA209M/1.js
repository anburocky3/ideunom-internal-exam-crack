(function () {
  // Prefill script for SPBA209M - Assignment 1 (Brand Management)
  // Maps radio group names (m1..m20) to chosen option values
  // Each mapping includes a brief rationale in the comment above it.
  const answers = {
    // 1. A strong brand commands -> intense consumer loyalty
    m1: "a",

    // 2. "A lot can happen over coffee" -> Café Coffee Day
    m2: "d",

    // 3. Observation that several brands are equal -> brand parity
    m3: "b",

    // 4. Brand identity is followed by -> brand image
    m4: "b",

    // 5. Positioning is done to achieve -> customer-focused value proposition
    m5: "a",

    // 6. Associations shared with other brands -> points-of-parity
    m6: "a",

    // 7. Points-of-difference selected on basis of -> both desirability & deliverability
    m7: "c",

    // 8. Branding focusing on stories/memories -> narrative branding
    m8: "c",

    // 9. Two visual signals (character and logo) -> brand symbol
    m9: "c",

    // 10. Two different brands distributed by one company -> co-branding (as used here)
    m10: "b",

    // 11. Same brand name for several products in different markets -> umbrella brand
    m11: "a",

    // 12. Measuring brand performance -> managing your brand right
    m12: "a",

    // 13. Customer bound by the control -> loyal customers
    m13: "a",

    // 14. Inherent "believability" each entity evokes -> brand trust
    m14: "d",

    // 15. Parent brand associated with multiple products -> family brand
    m15: "a",

    // 16. Branding strategy also called -> brand architecture
    m16: "a",

    // 17. Two or more well perceived brands collaborate -> co-branding
    m17: "a",

    // 18. To bring the brand back to life -> brand revitalization
    m18: "a",

    // 19. Brand assets contain -> reputation, relevance and loyalty
    m19: "b",

    // 20. Lets you have clear picture vs competition -> Market share
    m20: "a",
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
    `Prefill complete. ${setCount} answers set for SPBA209M assignment 1.`
  );
})();
