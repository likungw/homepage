import type { GetServerSideProps } from "next";
// Keep old bookmarks functional after Blog becomes Projects.
export default function FormerBlog() { return null; }
export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: { destination: "/projects", permanent: false },
});
