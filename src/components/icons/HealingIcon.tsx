import Image from "next/image";

export default function HealingIcon({
  item: ammo,
  scale = 1,
}: HealingIconProps) {
  return (
    <Image
      src={`https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/loot/${ammo}.svg`}
      width={50 * scale}
      height={50 * scale}
      alt={`Healing icon for ${ammo}`}
    />
  );
}

export interface HealingIconProps {
  item: string;
  scale?: number;
}
