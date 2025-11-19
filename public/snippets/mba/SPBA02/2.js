(function () {
  // SPBA02 - Quality Management (Assignment 2) auto-prefill
  // Answers mapping: radio input name -> value
  const answers = {
    m21: "a", // Ishikawa - (commonly referenced with 10/7; choosing 10 here)
    m22: "c", // Customers are both internal and external
    m23: "d", // All the three (brainstorming, poka-yoke, simulation)
    m24: "a", // Poka Yoke (mistake proofing)
    m25: "a", // 7 basic quality tools
    m26: "a", // Pareto principle 80:20
    m27: "d", // Scatter plot can show positive/negative/parabolic (all)
    m28: "a", // Kawakita (KJ method) for affinity diagrams
    m29: "a", // Matrix (quality table -> matrix diagram)
    m30: "a", // SEIRI = Sort (sort out)
    m31: "a", // Control charts are used to check process control
    m32: "a", // 8 forms of waste (including unused talent)
    m33: "a", // Crosby authored 'Quality is Free'
    m34: "a", // TQM originated in Japan
    m35: "d", // People associated: all three
    m36: "b", // TPM number of pillars (commonly 6 in some syllabi)
    m37: "a", // Phrase 'TPM' first used in 1961 (historical reference)
    m38: "a", // Crosby's absolutes = 4
    m39: "a", // ISO established in Geneva in 1947
    m40: "c", // Control charts are for both variables and attributes
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
      console.warn("SPBA02-2: radio not found for", name, value, selector);
    }
  }

  console.log(
    `SPBA02-2: set ${setCount}/${Object.keys(answers).length} answers`
  );
})();
