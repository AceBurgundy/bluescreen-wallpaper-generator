import {toast} from './toast.js';

const emojiElement = document.getElementById("emoji");
const titleElement = document.getElementById("title");
const contentElement = document.getElementById("content");

const messages = [
  {
    emoji: ":(",
    title: "Your PC ran into a problem that it couldn't handle and now it needs to restart",
    content: "You can search for the error online"
  },
  {
    emoji: ":O",
    title: "Your PC ran into a problem and needs to restart. We're just collecting some error info, and then we'll restart for you.",
    content: ""
  },
  {
    emoji: ":|",
    title: "Your PC ran into a problem and needs to restart.",
    content: "We're just collecting some error info, and then we'll restart for you."
  },
  {
    emoji: ":'(",
    title: "Your PC encountered an error and needs to restart.",
    content: "We're just collecting some error info, and then we'll restart for you."
  },
  {
    emoji: ":/",
    title: "Your PC ran into a problem and needs to restart.",
    content: "We're just collecting some error info, and then we'll restart for you."
  },
  {
    user: true,
    emoji: ':(',
    title: 'A message to start with',
    content: 'And some content?'
  }
];

emojiElement.oninput = () => {
  messages[messages.length - 1].emoji = emojiElement.value;
}

titleElement.oninput = () => {
  messages[messages.length - 1].title = titleElement.value;
  autoResizeTextarea(titleElement);
}

contentElement.oninput = () => {
  messages[messages.length - 1].content = contentElement.value;
}

let index = 0;

document.addEventListener("keydown", event => {
  if (document.activeElement != document.body) {
    return;
  }

  const left = event.key === "ArrowLeft";
  const right = event.key === "ArrowRight";

  if (left || right) {
    index = left ? (index + 1) % messages.length : (index - 1 + messages.length) % messages.length;
    const currentMessage = messages[index];

    emojiElement.value = currentMessage.emoji;
    titleElement.value = currentMessage.title;
    contentElement.value = currentMessage.content;

    autoResizeTextarea(titleElement);
  }
});

// onload
emojiElement.value = messages[messages.length - 1].emoji;
titleElement.value = messages[messages.length - 1].title;
contentElement.value = messages[messages.length - 1].content;

function autoResizeTextarea(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = (textarea.scrollHeight) + "px";
}

toast("Click on a text to edit", 4000)
toast("Press < or > for more templates", 6000)
toast("Press f11 and Win + PrtSrn to save", 8000)