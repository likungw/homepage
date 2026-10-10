import type { GetServerSideProps } from "next";
export default function FormerPost() { return null; }
export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: { destination: "/projects", permanent: false },
});
