(function () {
  // Map of questions to answers
  const answers = {
    // 1. Organizational models are
    m21: "d", // All of the above

    // 2. Which kind of defect can be called as minor defect?
    m22: "c", // Both (A) and (B)

    // 3. Which of the following policies is advisable in case of low product variety and large volumes?
    m23: "c", // Low Skilled Labour, Special Purpose Machines

    // 4. Fixed position layout is adopted when
    m24: "b", // Product is very heavy involving assembly of large number of parts

    // 5. Scale model used for layout analysis have following advantages
    m25: "d", // All of the above

    // 6. Which of the following are the objectives of a good maintenance system?
    m26: "c", // Both (A) and (B)

    // 7. What do you understand by the inspection conducted on all non reworkable jobs prior to their movement to the scrap yard?
    m27: "d", // Salvage inspection

    // 8. The ________ is the defect level for which lots are regarded as bad lots.
    m28: "d", // Lot Tolerance Percentage Defective

    // 9. General Electric Matrix is divided into how many cells
    m29: "b", // 9

    // 10. In an organization there may not be a formal PPC department if
    m30: "d", // All of the above

    // 11. Which of the following is not a type of specification?
    m31: "c", // Manpower specification

    // 12. Which are three different bases to establish an activity time?
    m32: "d", // All of the above

    // 13. Inherent Safety' is one of the principle of good layout. In context of layout, this can be achieved by the following
    m33: "c", // Both (A) and (B)

    // 14. Control should involve________ amount of information.
    m34: "b", // Sufficient

    // 15. A/An ________ history card is the record of all repairs, replacements and engineering changes carried out in the equipment during it's period of service.
    m35: "b", // Equipment

    // 16. What are the advantages of templates over diagrams?
    m36: "d", // All of the above

    // 17. An approach that strives to follow ethical principles and percepts is
    m37: "a", // Moral management

    // 18. W' in SWOT stands for
    m38: "b", // What could you improve?

    // 19. -______ should have the ability to develop a vision to see patterns into the future.
    m39: "a", // Leaders

    // 20. Attack strategies are
    m40: "d", // All of the above
  };

  // Loop through answers and select them
  for (const [questionName, answerValue] of Object.entries(answers)) {
    const radioButton = document.querySelector(
      `input[name="${questionName}"][value="${answerValue}"]`
    );
    if (radioButton) {
      radioButton.checked = true;
      console.log(
        `Selected answer "${answerValue}" for question ${questionName}`
      );
    } else {
      console.warn(
        `Could not find radio button for question ${questionName} with value ${answerValue}`
      );
    }
  }

  console.log("All answers have been selected. Review before submitting!");
})();
