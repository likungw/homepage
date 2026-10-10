import type { GetServerSideProps } from "next";
export default function FormerPublication() { return null; }
export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: { destination: "/publications", permanent: false },
});
