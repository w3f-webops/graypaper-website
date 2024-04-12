import { PageProps } from "gatsby";
import * as React from "react";
import { CommonHead } from "../components/Head/CommonHead";
const NotFoundPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    window.location.replace("/");
  }, []);
  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center">
      404
    </main>
  );
};

export default NotFoundPage;

export const Head = () => (
  <>
    <title>404</title>
    <CommonHead />
  </>
);
