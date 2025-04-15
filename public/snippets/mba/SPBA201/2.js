(function () {
  // Define the answers based on HR management knowledge
  const answers = {
    // 1. Right Placement of men and women in the ____ is essential for effective Human Resource Management
    m21: "a", // Right job

    // 2. Emerging issue(s) in Human Resources Management includes _____
    m22: "d", // All these above

    // 3. Personnel polices are developed by the top management to assist the manager as various level
    m23: "d", // Lower and Middle

    // 4. ____ defines manpower planning as "Strategy for the acquisition, utilisation, improvement and proservation of an enterprise's Human Resources
    m24: "c", // Geisler Strainer

    // 5. Job description is consist of ____
    m25: "d", // All these above

    // 6. Source of Recruitment Consist of _____
    m26: "d", // All these above

    // 7. ____ is concerned with such variables as age, martial status and number of dependants
    m27: "b", // Personal data

    // 8. ____ Consists of interaction between interviewer and applicant
    m28: "a", // Interview

    // 9. ____ is the part of Socialisation and Covers the activities involved in introducing a new employees to the organisation
    m29: "a", // Orientation

    // 10. Consumer price indese (CPI) which relates to the cost of basic necessities of ____
    m30: "b", // living

    // 11. Fringe Benefits are Sometime called ____
    m31: "c", // Indirect benefit

    // 12. ____ is the oldest snd Simplest system of formal systematic rating to Compare one person with others.
    m32: "a", // Ranking

    // 13. 360-degress appraisal is the process of systemtaticaly gathering data on persons' ____ from a variaty of Sources
    m33: "d", // All these above

    // 14. ____ defined as "the rate of change in working staff of an enterprise during a definite period"
    m34: "d", // Employee turnover

    // 15. ____ Considers the various inputs required of employees such as skill, efforts, working conditions and responsibility for minimum performance
    m35: "d", // Job evaluation

    // 16. Factories act is enforcing the fencing of Machinary relates to ____
    m36: "a", // Sec.21

    // 17. The Stress is a condition of strain on one's ____
    m37: "d", // All these above

    // 18. The basic function(s) of an ____ can be said to be receiving, recording, arranging and giving of information
    m38: "a", // Office

    // 19. _____ Correspondence refers to correspondence between two individuals, departments or branches of the same office
    m39: "a", // Internal

    // 20. _____ management is essential for planning and executing the Schedules work and accomplishing the target within stiuplated time period
    m40: "a", // Time
  };

  // Function to select the answers
  function selectAnswers() {
    let count = 0;
    // Loop through each answer and select the corresponding radio button
    for (const [questionName, answer] of Object.entries(answers)) {
      const selector = `input[name="${questionName}"][value="${answer}"]`;
      const radioButton = document.querySelector(selector);

      if (radioButton) {
        radioButton.checked = true;
        count++;
        console.log(`Selected answer for question ${questionName}: ${answer}`);
      } else {
        console.warn(
          `Could not find radio button for ${questionName} with value ${answer}`
        );
      }
    }

    console.log(
      `✅ Selected ${count} answers out of ${
        Object.keys(answers).length
      } questions`
    );
    console.log("You can now click the SAVE button to submit your answers.");
  }

  // Execute the function
  selectAnswers();
})();
