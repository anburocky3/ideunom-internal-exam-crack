(function () {
  // Prefill script for SPBA01 - Assignment 1 (Servicing Marketing)
  // Maps radio group names (m1..m20) to chosen option values
  // Each mapping includes a short rationale in the comment above it.
  const answers = {
    // 1. Services marketing become difficult because of -> Intangibility
    m1: "a",

    // 2. Which statement about pricing of services is false? -> The demand for services tends to be more elastic than goods (false)
    m2: "a",

    // 3. Results in too narrowly defining business -> Marketing myopia
    m3: "c",

    // 4. Services are characterized by all except -> Homogeneity (services are heterogeneous)
    m4: "b",

    // 5. Services without interruption/confusion -> Seamless service
    m5: "a",

    // 6. Characteristic reflecting interconnection between firm and customer -> Inseparability
    m6: "b",

    // 7. False statement pertaining to inseparability -> Customers can affect the cycle of demand (false)
    m7: "d",

    // 8. Solutions to minimize heterogeneity -> Standardizing or customizing the service
    m8: "a",

    // 9. Strategy that increases supply -> Use of reservation systems
    m9: "b",

    // 10. Demand strategy utilizing downtime by marketing to different segments -> Developing complementary services
    m10: "d",

    // 11. Not a tangible clue -> The quality of instruction in an educational setting
    m11: "d",

    // 12. Fixing price difficult because of -> Perishability
    m12: "a",

    // 13. Focusing efforts toward existing customer base -> Customer retention
    m13: "c",

    // 14. Consumer decision process consists of -> Problem awareness, evaluation of alternatives, and post-purchase behaviour
    m14: "c",

    // 15. Service consumers more brand loyal because -> Brand loyalty lowers perceived risk
    m15: "b",

    // 16. Not a benefit of customer satisfaction -> The firm provides a positive work environment for its employees
    m16: "b",

    // 17. Zone of tolerance defined by difference between -> Desired service and adequate service
    m17: "c",

    // 18. Violated customer's justice need when thrown money -> Interactional
    m18: "a",

    // 19. Calculated by dividing activity time by number of locations -> Process time
    m19: "c",

    // 20. Volume-oriented positioning strategy achieved by -> Reducing complexity
    m20: "c",
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
    `Prefill complete. ${setCount} answers set for SPBA01 assignment 1.`
  );
})();
