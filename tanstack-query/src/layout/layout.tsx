import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
