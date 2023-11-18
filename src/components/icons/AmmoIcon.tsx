export default function AmmoIcon({ ammo, scale = 1 }: AmmoIconProps) {
  return (
    <img
      src={`https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/loot/${ammo}.svg`}
      width={72 * scale}
      height={50 * scale}
      alt={`Ammo icon for ${ammo}`}
    />
  );
}

export interface AmmoIconProps {
  ammo: string;
  scale?: number;
}
