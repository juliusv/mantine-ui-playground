import { useState } from "react";
import { Container, Group, Burger, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
// import { MantineLogo } from '@mantine/ds';
import classes from "./Header.module.css";

const links = [
  { link: "/alerts", label: "Alerts" },
  { link: "/graph", label: "Graph" },
  { link: "/status", label: "Status" },
  {
    link: "https://prometheus.io/docs/prometheus/latest/getting_started/",
    label: "Help",
  },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[1].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container fluid className={classes.inner}>
        <Flex
          justify="flex-start"
          align="center"
          direction="row"
          wrap="nowrap"
          gap={10}
        >
          {/* <MantineLogo size={28} /> */}
          <svg
            style={{ height: 30, width: 30, color: "white" }}
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="115.333px"
            height="114px"
            viewBox="0 0 115.333 114"
            enable-background="new 0 0 115.333 114"
            xmlSpace="preserve"
            className="d-inline-block align-top"
          >
            <title>Prometheus</title>
            <g id="Layer_2"></g>
            <g>
              <path
                fill="#EEEEEE"
                d="M56.667,0.667C25.372,0.667,0,26.036,0,57.332c0,31.295,25.372,56.666,56.667,56.666 s56.666-25.371,56.666-56.666C113.333,26.036,87.961,0.667,56.667,0.667z M56.667,106.722c-8.904,0-16.123-5.948-16.123-13.283 H72.79C72.79,100.773,65.571,106.722,56.667,106.722z M83.297,89.04H30.034v-9.658h53.264V89.04z M83.106,74.411h-52.92 c-0.176-0.203-0.356-0.403-0.526-0.609c-5.452-6.62-6.736-10.076-7.983-13.598c-0.021-0.116,6.611,1.355,11.314,2.413 c0,0,2.42,0.56,5.958,1.205c-3.397-3.982-5.414-9.044-5.414-14.218c0-11.359,8.712-21.285,5.569-29.308 c3.059,0.249,6.331,6.456,6.552,16.161c3.252-4.494,4.613-12.701,4.613-17.733c0-5.21,3.433-11.262,6.867-11.469 c-3.061,5.045,0.793,9.37,4.219,20.099c1.285,4.03,1.121,10.812,2.113,15.113C63.797,33.534,65.333,20.5,71,16 c-2.5,5.667,0.37,12.758,2.333,16.167c3.167,5.5,5.087,9.667,5.087,17.548c0,5.284-1.951,10.259-5.242,14.148 c3.742-0.702,6.326-1.335,6.326-1.335l12.152-2.371C91.657,60.156,89.891,67.418,83.106,74.411z"
              ></path>
            </g>
          </svg>
          <div style={{ fontSize: "1.25rem", color: "white" }}>Prometheus</div>
        </Flex>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
