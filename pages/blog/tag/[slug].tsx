import type { GetServerSideProps } from "next";
export default function FormerBlogTag() { return null; }
export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: { destination: "/projects", permanent: false },
});
