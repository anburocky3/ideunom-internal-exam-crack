(function () {
  // Prefill script for SPBA208M - Assignment 1
  // Maps radio group names (m1..m20) to the chosen option values
  // Each mapping includes a short rationale in the comment above it.
  const answers = {
    // 1. First step in marketing research process -> defining the problem
    m1: "a",

    // 2. Marketing research across countries -> International marketing research
    m2: "b",

    // 3. Gather preliminary information to define problem -> exploratory
    m3: "a",

    // 4. Census comes under -> descriptive research
    m4: "c",

    // 5. Wrong questionnaire -> primary data collection problem
    m5: "a",

    // 6. All samples have same chance -> probability
    m6: "a",

    // 7. Example of nonprobabilistic sampling -> judgement sampling
    m7: "d",

    // 8. Market research links through -> information
    m8: "b",

    // 9. Abstract representation of process among consumers -> consumer model
    m9: "a",

    // 10. Nicosia model assumes human behaviour as -> feedback mechanism
    m10: "c",

    // 11. Sub-cultural barriers decreasing due to mass communication, transit and -> Decline in communal influences
    m11: "b",

    // 12. Based on geographic areas, religions, nationalities, age -> Subcultures
    m12: "c",

    // 13. Measures relying on individual's self perception -> subjective measures
    m13: "a",

    // 14. Family members who provide info to others -> influencers
    m14: "a",

    // 15. Driving force toward some object -> positive motivation
    m15: "a",

    // 16. Needs such as love, affection, belonging -> social needs
    m16: "b",

    // 17. Stimuli that give directions to motives -> cues
    m17: "a",

    // 18. Events that strengthen likelihood of a response -> positive reinforcement
    m18: "a",

    // 19. Attitudes reflecting values/lifestyle -> value expressive function
    m19: "c",

    // 20. Marketing input for decision-making -> informal sources
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
    `Prefill complete. ${setCount} answers set for SPBA208M assignment 1.`
  );
})();
