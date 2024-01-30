import Inquiry from "./Inquiry";
import Subscribe from "./Subscribe";
import PageLocationBanner from "./PageLocationBanner";

const PageApplication = () => {
  return (
    <>
      <PageLocationBanner heading="Application" location="Home/Application" />
      <Subscribe />
      <Inquiry primary="Get in Touch" />
    </>
  );
};

export default PageApplication;
