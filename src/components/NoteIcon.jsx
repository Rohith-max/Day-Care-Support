export default function NoteIcon({ width = 28, height = 34, className = "" }) {
  return (
    <img src={new URL("../assets/svg/note.svg", import.meta.url).href} width={width} height={height} className={className} alt="Note" />
  );
}
