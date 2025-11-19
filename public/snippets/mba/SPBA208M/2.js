(function () {
  // Prefill script for SPBA208M - Assignment 2
  // Maps radio group names (m21..m40) to chosen option values
  // Each mapping includes a short rationale in the comment above it.
  const answers = {
    // 1. Find a sizable segment with ... Tastes -> homogeneous
    m21: "b",

    // 2. Systematic design, collection, analysis and reporting -> marketing research
    m22: "b",

    // 3. Advance plan of research -> research design
    m23: "b",

    // 4. Cause and effect research type -> Causal
    m24: "a",

    // 5. Small convenience samples / asking customers -> informal surveys
    m25: "a",

    // 6. Main drawback of primary data -> biasness
    m26: "a",

    // 7. Convenience sampling is an example of -> non probability sampling
    m27: "b",

    // 8. Major public policy and ethics issues -> intrusion on privacy & misuse of findings
    m28: "c",

    // 9. Consumer behavior involves examination of -> Both pre-purchase activities & motivation
    m29: "d",

    // 10. Research reveals differences among consumers & helps segmentation -> Both
    m30: "c",

    // 11. Related to purchase and -> consumption decisions
    m31: "c",

    // 12. Differences in cultures exist because -> All of the above
    m32: "d",

    // 13. Definition of reference groups -> Groups that an individual looks to when forming attitudes
    m33: "a",

    // 14. Determine product knowledge -> information available
    m34: "c",

    // 15. Disconfirmation paradigm used to study -> Post purchase dissonance
    m35: "d",

    // 16. Implies a rational motive -> weight
    m36: "a",

    // 17. Learning of associations among events -> classical conditioning
    m37: "a",

    // 18. Warehouse of primitive/impulsive drive -> the id
    m38: "a",

    // 19. Shift from no attitude to an attitude -> attitude formation
    m39: "a",

    // 20. Most common consumer decision process for packaged goods -> routine decision making
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
    `Prefill complete. ${setCount} answers set for SPBA208M assignment 2.`
  );
})();
