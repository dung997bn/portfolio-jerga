import BaseLayout from "@/components/layout/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import { authorizeUser, withAuth } from "@/utils/auth0";
const SecretSSR = ({ user, title }) => {
  const { data, loading } = useGetUser();
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage>
        <h1>Hello - {user && user.name}</h1>
        <h2>{title}</h2>
      </BasePage>
    </BaseLayout>
  );
};

const getTitle = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ title: "My new title" });
    }, 500);
  });
};

export const getServerSideProps = withAuth(async () => {
  const title = await getTitle();
  return title;
})(["admin"]);

export default SecretSSR;
