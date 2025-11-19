(function () {
  // SPBA02 - Quality Management (Assignment 1) auto-prefill
  // Answers mapping: radio input name -> value
  const answers = {
    m1: "a", // Crosby - "quality is conformance to requirements"
    m2: "a", // Deming - predictable degree of uniformity and dependability
    m3: "b", // 5 (quality management incorporates 5 processes)
    m4: "d", // All the three (planning, assurance, control)
    m5: "d", // All the three (performance, reliability, durability)
    m6: "a", // 14 (Deming's 14 points)
    m7: "a", // Baldridge Award - U.S.
    m8: "a", // Deming Prize - Japan
    m9: "a", // European Quality - Europe
    m10: "d", // All the three (integrated planning, review, risk mgmt)
    m11: "a", // 1987 (Malcolm Baldridge Award created)
    m12: "a", // 4 categories (prevention, appraisal, internal, external)
    m13: "a", // Internal Failure Cost (found before transfer to customer)
    m14: "a", // External Failure (found after shipping)
    m15: "a", // Appraisal Cost (determining degree of conformance)
    m16: "a", // Prevention Cost (keeps failure/appraisal costs minimum)
    m17: "a", // Implicit = Hidden
    m18: "c", // Failure costs are both internal and external
    m19: "c", // Cost of non-conformance may be both direct & indirect
    m20: "d", // All the three (satisfaction, innovation, sensitivity)
  };

  let setCount = 0;
  for (const name in answers) {
    const value = answers[name];
    const selector = `input[type="radio"][name="${name}"][value="${value}"]`;
    const radio = document.querySelector(selector);
    if (radio) {
      radio.checked = true;
      radio.dispatchEvent(new Event("change", { bubbles: true }));
      setCount++;
    } else {
      console.warn("SPBA02-1: radio not found for", name, value, selector);
    }
  }

  console.log(
    `SPBA02-1: set ${setCount}/${Object.keys(answers).length} answers`
  );
})();
