function selectClass(selectedClass) {
  const board = localStorage.getItem("selectedBoard");
  localStorage.setItem("selectedClass", selectedClass);

  if (board && selectedClass) {
    window.location.href = "syllabus.html";
  } else {
    alert("Please select your board first!");
    window.location.href = "boards.html";
  }
}
