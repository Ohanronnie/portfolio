import artwork from "../assets/obsidian-sculpture.jpg";

export function Portrait() {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-[26px] bg-neutral-950">
      <img
        src={artwork}
        alt="Silver-lit obsidian sculpture against a dark background"
        className="h-full w-full object-cover object-[center_45%]"
      />
    </div>
  );
}
