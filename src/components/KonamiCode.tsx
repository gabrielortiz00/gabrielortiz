"use client";

import { useEffect, useRef } from "react";

const SEQUENCE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

const MORSE: Record<string, string> = {
  A: ".-",    B: "-...",  C: "-.-.",  D: "-..",   E: ".",
  F: "..-.",  G: "--.",   H: "....",  I: "..",    J: ".---",
  K: "-.-",   L: ".-..",  M: "--",    N: "-.",    O: "---",
  P: ".--.",  Q: "--.-",  R: ".-.",   S: "...",   T: "-",
  U: "..-",   V: "...-",  W: ".--",   X: "-..-",  Y: "-.--",
  Z: "--..",  0: "-----", 1: ".----", 2: "..---", 3: "...--",
  4: "....-", 5: ".....", 6: "-....", 7: "--...", 8: "---..",
  9: "----.", " ": "/",
  ".": ".-.-.-", ",": "--..--", "?": "..--..", "'": ".----.",
  "!": "-.-.--", "/": "-..-.",  "(": "-.--.",  ")": "-.--.-",
  "&": ".-...",  ":": "---...", ";": "-.-.-.",  "=": "-...-",
  "+": ".-.-.",  "-": "-....-", "_": "..--.-",  '"': ".-..-.",
  "$": "...-..-","@": ".--.-.", "\n": "/",       "\t": "/",
};

function toMorse(text: string): string {
  return text
    .toUpperCase()
    .split("")
    .map((c) => MORSE[c] ?? "")
    .join(" ")
    .replace(/\./g, "·");
}

const stored = new Map<Text, string>();

function getTextNodes(): Text[] {
  const skip = new Set(["script", "style", "noscript", "input", "textarea"]);
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const tag = node.parentElement?.tagName.toLowerCase() ?? "";
      if (skip.has(tag)) return NodeFilter.FILTER_REJECT;
      if ((node.textContent ?? "").trim() === "") return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const nodes: Text[] = [];
  let n: Node | null;
  while ((n = walker.nextNode())) nodes.push(n as Text);
  return nodes;
}

function enable() {
  document.body.style.wordBreak = "break-word";
  getTextNodes().forEach((node) => {
    stored.set(node, node.textContent ?? "");
    node.textContent = toMorse(node.textContent ?? "");
  });
}

function disable() {
  document.body.style.wordBreak = "";
  stored.forEach((original, node) => (node.textContent = original));
  stored.clear();
}

export default function KonamiCode() {
  const active = useRef(false);

  useEffect(() => {
    let index = 0;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === SEQUENCE[index]) {
        index++;
        if (index === SEQUENCE.length) {
          index = 0;
          active.current ? disable() : enable();
          active.current = !active.current;
        }
      } else {
        index = e.key === SEQUENCE[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return null;
}
