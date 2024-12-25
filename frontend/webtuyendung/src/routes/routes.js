import { children } from "react";
import Layoutuser from "../pages/layoutuser/layoutuser";
import Home from "../pages/home/Home";
import Search from "../pages/home/Searchform/Search/Search";
import JobDetail from "../pages/home/Searchform/Search/JobDetail";
import Company from "../pages/home/CompanyList/Company/Company";
import CompanyDetail from "../pages/home/CompanyList/Companydetail/CompanyDetail";
import { Navigate } from "react-router";
import Register from "../pages/Register-login-logout/Register/Register";
import Login from "../pages/Register-login-logout/Login/Login";
import Logout from "../pages/Register-login-logout/Logout/Logout";
import LayoutAdmin from "../pages/layoutadmin/layoutadmin";
import Dashboard from "../pages/Homeadmin/Dashboard/Dashboard";
import InfoCompany from "../pages/Homeadmin/InfoCompany/InfoCompany";
import JobManager from "../pages/Homeadmin/Jobmanager/Jobmanager";
import Createjob from "../pages/Homeadmin/Jobmanager/Create-job";
import JobDetailAdmin from "../pages/Homeadmin/Jobmanager/JobDetailAdmin";
import CVManager from "../pages/Homeadmin/CVManager/CVManager";
import CVDetail from "../pages/Homeadmin/CVManager/CVDetail";
export const routes = [
  //Public
  {
    path: "/",
    element: <Layoutuser />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "job/:id",
        element: <JobDetail />,
      },
      {
        path: "company",
        element: <Company />,
      },
      {
        path: "company/:id",
        element: <CompanyDetail />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "logout",
    element: <Logout />,
  },
  //Public
  //Private
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "info-company",
        element: <InfoCompany />,
      },
      {
        path: "jobmanager",
        element: <JobManager />,
      },
      {
        path: "createjob",
        element: <Createjob />,
      },
      {
        path: "detail-job/:id",
        element: <JobDetailAdmin />,
      },
      {
        path: "cv-manager",
        element: <CVManager />,
      },
      {
        path: "detail-cv/:id",
        element: <CVDetail />,
      },
    ],
  },
  //Private
];
