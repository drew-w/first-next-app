import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

export default function Car({ car }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>
          {car.color}
          {car.id}
        </title>
      </Head>
      <div>
        <h1>THIS IS A {id}</h1>
        <Link as="/cars" href="/cars">
          <button>back</button>
        </Link>
      </div>
      <img src={car.image} />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    props: { car: data },
  };
}
