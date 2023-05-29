import {Typography } from "antd";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Typography.Title
        level={5}
        style={{ color: "white", textAlign: "center" }}
      >
        © {currentYear} Cryptoverse. All Rights Reserved.{" "}
      </Typography.Title>
    </>
  );
}

export default Footer;
