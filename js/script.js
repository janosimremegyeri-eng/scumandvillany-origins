document.addEventListener("DOMContentLoaded", () => {
  const bootScreen = document.getElementById("bootScreen");
  const archiveShell = document.getElementById("archiveShell");
  const bootLines = Array.from(document.querySelectorAll(".boot-line"));
  const storageKey = "galacticArchiveBootSeen";

  const revealArchive = () => {
    if (!bootScreen || !archiveShell) return;

    bootScreen.classList.add("is-hidden");
    archiveShell.classList.add("is-visible");
    localStorage.setItem(storageKey, "true");
  };

  const runBootSequence = () => {
    if (!bootScreen || !archiveShell) return;

    archiveShell.classList.remove("is-visible");
    bootScreen.classList.remove("is-hidden");

    bootLines.forEach((line, index) => {
      window.setTimeout(() => {
        line.classList.add("is-visible");
      }, 450 * (index + 1));
    });

    window.setTimeout(revealArchive, 2600);
  };

  if (localStorage.getItem(storageKey) === "true") {
    revealArchive();
  } else {
    runBootSequence();
  }
});
