function ScrollSpy(
  scrollTarget,
  labelTarget,
  { frequency = 500, offsetPercentage = 40 }
) {
  const labelTargets = [...labelTarget.querySelectorAll(`a[href^="#"]`)]
    .map((e) => {
      const m = e.href.match(/.*#(.*)/);
      if (m) {
        return [e, m[1]];
      }
      return null;
    })
    .filter((e) => e !== null);

  const hrefArray = labelTargets.map(([e, href]) => href);

  const dataArray = [...scrollTarget.querySelectorAll(`[id]`)]
    .map((e) => {
      if (hrefArray.includes(e.id)) {
        return [e, ...labelTargets.filter(([_, href]) => href === e.id)[0]];
      }
      return null;
    })
    .filter((e) => e !== null);

  const element = document.getElementById("content");

  element.addEventListener("scroll", (e) => {
    if (Date.now() - ScrollSpy.lastChangeTime < frequency) {
      return;
    }
    ScrollSpy.lastChangeTime = Date.now();

    const scrollPosition = element.scrollTop;
    const offset = (element.clientHeight * offsetPercentage) / 100;

    for (const [curElem, labelElem, curID] of dataArray) {
      const elemTop = curElem.getBoundingClientRect().top + scrollPosition;
      const elemBottom =
        elemTop + curElem.getBoundingClientRect().height - offset;

      if (scrollPosition + offset >= elemTop && scrollPosition <= elemBottom) {
        labelElem.classList.add("active");
      } else {
        labelElem.classList.remove("active");
      }
    }
  });
}

ScrollSpy.lastChangeTime = 0;

ScrollSpy(
  document.getElementById("content"),
  document.querySelector(`nav`),
  {}
);
