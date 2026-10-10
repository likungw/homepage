import type { GetServerSideProps } from "next";
// Legacy singular project URLs are redirected to the new research portfolio.
export default function FormerProject() { return null; }
export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: { destination: "/projects", permanent: false },
});
