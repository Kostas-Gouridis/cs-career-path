import {
  Binary,
  Brain,
  Cloud,
  Compass,
  Cpu,
  Database,
  GraduationCap,
  LayoutDashboard,
  type LucideIcon,
  PenTool,
  Server,
  ShieldCheck,
  Smartphone,
  TestTube,
  TrendingUp,
} from "lucide-react";
import type { CareerId } from "@/lib/careers";
import { cn } from "@/lib/cn";

/** Ένα εικονίδιο ανά καριέρα, ενιαίο πάχος γραμμής. Καμία χρήση emoji. */
const ICONS: Record<CareerId, LucideIcon> = {
  frontend: LayoutDashboard,
  uiux: PenTool,
  backend: Server,
  mobile: Smartphone,
  dataeng: Database,
  datasci: TrendingUp,
  ml: Brain,
  devops: Cloud,
  security: ShieldCheck,
  qa: TestTube,
  embedded: Cpu,
  product: Compass,
  research: GraduationCap,
};

export function CareerIcon({
  id,
  className,
  strokeWidth = 1.75,
}: {
  id: CareerId;
  className?: string;
  strokeWidth?: number;
}) {
  const Icon = ICONS[id] ?? Binary;
  return <Icon aria-hidden strokeWidth={strokeWidth} className={cn("size-5", className)} />;
}

/** Κυκλικό δείγμα: το χρώμα της καριέρας στον δακτύλιο και σε απαλό γέμισμα. */
export function CareerSwatch({
  id,
  color,
  size = "md",
  className,
}: {
  id: CareerId;
  color: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const box = { sm: "size-8", md: "size-11", lg: "size-14" }[size];
  const icon = { sm: "size-4", md: "size-5", lg: "size-6" }[size];

  return (
    <span
      className={cn("grid shrink-0 place-items-center rounded-full border", box, className)}
      style={{
        color,
        borderColor: `color-mix(in oklab, ${color} 32%, transparent)`,
        backgroundColor: `color-mix(in oklab, ${color} 12%, transparent)`,
      }}
    >
      <CareerIcon id={id} className={icon} />
    </span>
  );
}
