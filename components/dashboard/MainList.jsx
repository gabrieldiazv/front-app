"use client";
import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const styleLink = {
  textDecoration: "none",
  color: "white",
};
const styleIcon = {
  color: "white",
};

const listaPrincipal = [
  {
    name: "Usuarios",
    icon: <PeopleIcon />,
    route: "/dashboard/usuarios",
  },
  {
    name: "Proyectos",
    icon: <ShoppingCartIcon />,
    route: "/dashboard/proyectos",
  },
  {
    name: "Customers",
    icon: <PeopleIcon />,
    route: "/customers",
  },
  {
    name: "Reports",
    icon: <BarChartIcon />,
    route: "/reports",
  },
  {
    name: "Integrations",
    icon: <LayersIcon />,
    route: "/integrations",
  },
];

export const MainListItems = () => {

  const pathname = usePathname()
 
  return (
    <>
      {listaPrincipal.map((item, index) => (
        <Link key={index} href={item.route} style={styleLink}>
          <ListItemButton style={
            pathname === item.route ? { backgroundColor: "#3127a3" } : {}
          }>
            <ListItemIcon style={styleIcon}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </Link>
      ))}
    </>
  );
};
