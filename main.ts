// The Tired Dark Lord: A 100-Word Villain Monologue
// Writes a single ~100-word monologue to /output/entry.txt.
// The speaker is a specific villain — a dark lord mid-siege, four hundred
// years into a grudge against his own brother — whose exhaustion shows only
// in the rhythm, the pauses and the small deflections, never in a plain
// statement that he is weary. The sting lands in the last line.
import { mkdirSync, writeFileSync } from "node:fs";

const MONOLOGUE =
  "Do you know what I miss, hero? Mornings. Before the banners, before the oaths — just warm bread, and no one kneeling. My brother called me patient once. He meant slow. He was right, I suppose. The siege engines stand ready, the river is poisoned, the priests have all... ah, what was I saying? Oh. Yes. Your little city. It falls by Thursday. Or Friday. Whenever the rain stops. I hold the maps, the spies, the curse — everything except the energy to gloat properly. So kneel, or don't. Honestly? Surprise me. I haven't been surprised in four hundred years.";

// The gate allows 1–600 characters; the brief asks for about 100 words.
// Fail loudly instead of writing an entry the gate would refuse.
const words = MONOLOGUE.trim().split(/\s+/).length;
if (words < 90 || words > 110) {
  throw new Error(`monologue is ${words} words, expected about 100`);
}
if (MONOLOGUE.length > 600) {
  throw new Error(`monologue is ${MONOLOGUE.length} characters, over the 600 cap`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MONOLOGUE + "\n", "utf8");
