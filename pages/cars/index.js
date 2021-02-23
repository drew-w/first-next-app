import Link from "next/link";

export default function CarsList() {
  return (
    <div>
      <Link as="/cars/lambo" href="/cars/[id]">
        <button>Lambo</button>
      </Link>
      <Link as="/cars/ford" href="/cars/[id]">
        <button>Ford</button>
      </Link>
      <Link as="/cars/tesla" href="/cars/[id]">
        <button>Tesla</button>
      </Link>
    </div>
  );
}
