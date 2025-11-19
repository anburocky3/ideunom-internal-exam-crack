(function () {
  // Prefill script for SPBA01 - Assignment 2 (Servicing Marketing)
  // Maps radio group names (m21..m40) to chosen option values
  // Each mapping includes a short rationale in the comment above it.
  const answers = {
    // 1. Pure service -> Insurance
    m21: "a",

    // 2. Charging different prices for same service -> Price discrimination
    m22: "a",

    // 3. Buyer's perception of value -> Total customer value vs total customer cost
    m23: "b",

    // 4. Primary source of the other service characteristics -> Intangibility
    m24: "a",

    // 5. Mental energy spent by customers -> Psychic costs
    m25: "d",

    // 6. Marketing problems caused by inseparability except -> (a) is not a problem
    m26: "a",

    // 7. Centralized mass production difficulty due to -> Inseparability
    m27: "a",

    // 8. Inability to inventory services -> Perishability
    m28: "d",

    // 9. Customer satisfaction compared by -> Predicted service and perceived service
    m29: "a",

    // 10. Consistency and dependability dimension -> Reliability
    m30: "d",

    // 11. Minimizing role conflict reduces -> Delivery gap
    m31: "c",

    // 12. World's largest private-sector industry -> The hospitality industry
    m32: "a",

    // 13. Pursuit of new customers -> Conquest marketing
    m33: "c",

    // 14. Statement not true -> (b) is false (consumer participation does not necessarily increase perceived risk)
    m34: "b",

    // 15. Competitor intelligence should be gathered -> Continuously
    m35: "c",

    // 16. Emerging trend to watch -> Heightened customer expectations
    m36: "c",

    // 17. Customers ultimately determine services by -> levels of marketing effectiveness and operational efficiency
    m37: "b",

    // 18. Soft technologies -> personal touches leading to customer satisfaction
    m38: "b",

    // 19. Not a step in construction of service blueprint -> Calculating time frame for service execution
    m39: "d",

    // 20. Buyer's perception of value -> Total customer value vs total customer cost
    m40: "b",
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
    `Prefill complete. ${setCount} answers set for SPBA01 assignment 2.`
  );
})();
