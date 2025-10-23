// Board selection logic
function selectBoard(boardName) {
  // Save selected board in localStorage for later
  localStorage.setItem('selectedBoard', boardName);
  // Redirect to syllabus page
  window.location.href = 'syllabus.html';
}

// Expose function globally
window.selectBoard = selectBoard;
