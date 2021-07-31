import { swap, waitForAnimation } from "./helper.js";
const bars = document.getElementsByClassName("bar");
//bubble sort
export async function performingBubbleSort(arr) {
  const len = arr.length;
  let isSwapped = false;
  for (let i = 0; i < len - 1; i++) {
    isSwapped = false;

    for (let j = 0; j < len - i - 1; j++) {
      bars[j].style.background = "red";
      bars[j + 1].style.background = "red";
      await waitForAnimation();
      if (arr[j] >= arr[j + 1]) {
        await waitForAnimation();
        swap(bars[j], bars[j + 1]);
        let e = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = e;
        isSwapped = true;
      }
      bars[j].style.background = "cyan";
      bars[j + 1].style.background = "cyan";
    }
    if (!isSwapped) {
      break;
    }
    bars[bars.length - 1 - i].style.background = "green";
  }
  bars[0].style.background = "green";
}
