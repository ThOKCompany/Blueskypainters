import {
  IconExterior,
  IconFence,
  IconFinish,
  IconHouseWash,
  IconPalette,
  IconResidential,
  IconRoof,
  IconRoomInterior,
} from "@/lib/icons";
import type { ServiceIconKey } from "@/data/services";

const ICONS = {
  interior: IconRoomInterior,
  exterior: IconExterior,
  fence: IconFence,
  residential: IconResidential,
  plastering: IconFinish,
  colour: IconPalette,
  roof: IconRoof,
  "house-wash": IconHouseWash,
} satisfies Record<ServiceIconKey, typeof IconRoomInterior>;

export default function ServiceIcon({ icon, className = "h-6 w-6" }: { icon: ServiceIconKey; className?: string }) {
  const Icon = ICONS[icon];
  return <Icon className={className} />;
}
