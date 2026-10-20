import Link from "next/link";
import Image from "next/image";

export function Brand({ light = false }: { light?: boolean }) {
  return <Link href="/" className={`brand ${light ? "brand-light" : ""}`} aria-label="Orbit home">
    <Image className="brand-logo" src="/Images/orbit-logo.png" width={38} height={38} alt="" aria-hidden="true" />
    <span>Orbit<span className="brand-period">.</span></span>
  </Link>;
}
