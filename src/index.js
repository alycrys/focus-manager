let focusedContainer, focusedEl;
const velocity = 15; // set velocity > margins

const focusEl = el => {
  if (focusedEl) {
    focusedEl.classList.remove("focused");
    focusedEl.removeEventListener("keyup", handleKeyEvent);
  }
  focusedEl = el;
  focusedEl.addEventListener("keyup", handleKeyEvent);
  focusedEl.classList.add("focused");
  focusedEl.focus();
};

const focusContainer = container => {
  if (focusedContainer) {
    focusedContainer.classList.remove("focused");
  }
  focusedContainer = container;
  focusedContainer.classList.add("focused");

  focusEl(container.children[0]);
};

const getEl = ({ x, y }) => {
  const elements = document.elementsFromPoint(x, y);
  const container = elements.filter(el =>
    el.classList.contains("container"),
  )[0];

  if (!container) {
    return;
  }

  if (container.classList.contains("focused")) {
    const el = document.elementFromPoint(x, y);

    if (el && el.nodeName === "A") {
      focusEl(el);
    }
  } else {
    focusContainer(container);
  }
};

const handleKeyEvent = event => {
  const elRect = focusedEl.getBoundingClientRect();

  switch (event.keyCode) {
    case 38: // up arrow
      getEl({
        x: elRect.x,
        y: elRect.y - velocity,
      });
      break;
    case 40: // down arrow
      getEl({
        x: elRect.x,
        y: elRect.y + elRect.height + velocity,
      });
      break;
    case 37: // left arrow
      getEl({
        x: elRect.x - velocity,
        y: elRect.y,
      });
      break;
    case 39: // right arrow
      getEl({
        x: elRect.x + elRect.width + velocity,
        y: elRect.y,
      });
      break;
    default:
      console.log("default", event.keyCode);
      break;
  }
};

const firstContainer = document.querySelectorAll(".container")[1];

focusContainer(firstContainer);
