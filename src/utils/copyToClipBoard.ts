interface CopyToClipBoardProps {
  text: string;
  fun: () => void;
}

export async function copyToClipBoard(props: CopyToClipBoardProps) {
  try {
    await navigator.clipboard.writeText(props.text);
    props.fun();
  } catch (error) {
    alert("Failed to copy!");
  }
}
