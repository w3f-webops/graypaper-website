import { PageProps } from "gatsby";
import * as React from "react";
import { createHead } from "../components/Head";
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

export const Head = createHead({ title: "404: Not found" });
