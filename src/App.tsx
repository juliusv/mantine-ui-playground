import { useState } from "react";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "./App.css";
import classes from "./Input.module.css";
import {
  IconChartAreaFilled,
  IconChartLine,
  IconChevronLeft,
  IconChevronRight,
  IconGraph,
  IconMinus,
  IconPlus,
  IconTable,
  IconTerminal,
} from "@tabler/icons-react";
import { DateTimePicker } from "@mantine/dates";
import {
  ActionIcon,
  Box,
  Center,
  Input,
  SegmentedControl,
  Space,
  Table,
} from "@mantine/core";

import {
  Button,
  CloseButton,
  Container,
  Group,
  Tabs,
  Textarea,
} from "@mantine/core";
import { Header } from "./Header";

function App() {
  const [expr, setExpr] = useState<string>("");

  // const [showExemplars, setShowExemplars] = useState<boolean>(false);

  const iconStyle = { width: "0.9rem", height: "0.9rem" };

  return (
    <>
      <Header />

      <Container fluid>
        <div>
          <Group align="baseline" wrap="nowrap" gap={10}>
            <Textarea
              style={{ flex: "auto" }}
              classNames={classes}
              placeholder="Enter PromQL expression..."
              value={expr}
              onChange={(event) => setExpr(event.currentTarget.value)}
              leftSection={<IconTerminal />}
              rightSectionPointerEvents="all"
              autosize
              autoFocus
              rightSection={
                <CloseButton
                  aria-label="Clear input"
                  onClick={() => setExpr("")}
                  style={{ display: expr ? undefined : "none" }}
                />
              }
            />
            <Button variant="primary" onClick={() => console.log(expr)}>
              Execute
            </Button>
          </Group>
        </div>
        <Tabs mt="md" defaultValue="table" keepMounted={false}>
          <Tabs.List>
            <Tabs.Tab
              value="table"
              leftSection={<IconTable style={iconStyle} />}
            >
              Table
            </Tabs.Tab>
            <Tabs.Tab
              value="graph"
              leftSection={<IconGraph style={iconStyle} />}
            >
              Graph
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel p="sm" value="table">
            <Group gap={5} mt="sm">
              <ActionIcon size="lg" variant="subtle" aria-label="Decrease time">
                <IconChevronLeft style={iconStyle} />
              </ActionIcon>
              <DateTimePicker clearable placeholder="Evaluation time" />
              <ActionIcon size="lg" variant="subtle" aria-label="Increase time">
                <IconChevronRight style={iconStyle} />
              </ActionIcon>
            </Group>
            <Table mt="lg" highlightOnHover>
              <Table.Tbody>
                {Array(20)
                  .fill(0)
                  .map((_, idx) => (
                    <Table.Tr key={idx}>
                      <Table.Td>
                        <div>
                          <span className="legend-metric-name"></span>
                          <span className="legend-label-brace">{"{"}</span>
                          <span>
                            <span
                              className="legend-label-container"
                              title="Click to copy label matcher"
                            >
                              <span className="legend-label-name">
                                instance
                              </span>
                              =
                              <span className="legend-label-value">
                                "demo-service-0:10000"
                              </span>
                            </span>
                          </span>
                          <span>
                            ,{" "}
                            <span
                              className="legend-label-container"
                              title="Click to copy label matcher"
                            >
                              <span className="legend-label-name">job</span>=
                              <span className="legend-label-value">"demo"</span>
                            </span>
                          </span>
                          <span>
                            ,{" "}
                            <span
                              className="legend-label-container"
                              title="Click to copy label matcher"
                            >
                              <span className="legend-label-name">method</span>=
                              <span className="legend-label-value">"GET"</span>
                            </span>
                          </span>
                          <span>
                            ,{" "}
                            <span
                              className="legend-label-container"
                              title="Click to copy label matcher"
                            >
                              <span className="legend-label-name">path</span>=
                              <span className="legend-label-value">
                                "/api/bar"
                              </span>
                            </span>
                          </span>
                          <span>
                            ,{" "}
                            <span
                              className="legend-label-container"
                              title="Click to copy label matcher"
                            >
                              <span className="legend-label-name">status</span>=
                              <span className="legend-label-value">"200"</span>
                            </span>
                          </span>
                          <span className="legend-label-brace">{"}"}</span>
                        </div>
                      </Table.Td>
                      <Table.Td>17.119298245614033</Table.Td>
                    </Table.Tr>
                  ))}
              </Table.Tbody>
            </Table>
          </Tabs.Panel>
          <Tabs.Panel
            p="sm"
            value="graph"
            // style={{ border: "1px solid lightgrey", borderTop: "none" }}
          >
            <Group mt="sm">
              <Group gap={5}>
                <ActionIcon
                  size="lg"
                  variant="subtle"
                  aria-label="Decrease time"
                >
                  <IconPlus style={iconStyle} />
                </ActionIcon>
                <Input placeholder="Range" value="1h" style={{ width: 42 }} />
                <ActionIcon
                  size="lg"
                  variant="subtle"
                  aria-label="Increase time"
                >
                  <IconMinus style={iconStyle} />
                </ActionIcon>
              </Group>

              <Group gap={5}>
                <ActionIcon
                  size="lg"
                  variant="subtle"
                  aria-label="Decrease time"
                >
                  <IconChevronLeft style={iconStyle} />
                </ActionIcon>
                <DateTimePicker clearable placeholder="Evaluation time" />
                <ActionIcon
                  size="lg"
                  variant="subtle"
                  aria-label="Increase time"
                >
                  <IconChevronRight style={iconStyle} />
                </ActionIcon>
              </Group>

              <Input value="" placeholder="Res. (s)" style={{ width: 80 }} />

              <SegmentedControl
                data={[
                  {
                    value: "unstacked",
                    label: (
                      <Center>
                        <IconChartLine style={iconStyle} />
                        <Box ml={10}>Unstacked</Box>
                      </Center>
                    ),
                  },
                  {
                    value: "stacked",
                    label: (
                      <Center>
                        <IconChartAreaFilled style={iconStyle} />
                        <Box ml={10}>Stacked</Box>
                      </Center>
                    ),
                  },
                ]}
              />
              {/* <Switch color="gray" defaultChecked label="Show exemplars" /> */}
              {/* <Switch
                checked={showExemplars}
                onChange={(event) =>
                  setShowExemplars(event.currentTarget.checked)
                }
                color={"rgba(34,139,230,.1)"}
                size="md"
                label="Show exemplars"
                thumbIcon={
                  showExemplars ? (
                    <IconCheck
                      style={{ width: "0.9rem", height: "0.9rem" }}
                      color={"rgba(34,139,230,.1)"}
                      stroke={3}
                    />
                  ) : (
                    <IconX
                      style={{ width: "0.9rem", height: "0.9rem" }}
                      color={theme.colors.red[6]}
                      stroke={3}
                    />
                  )
                }
              /> */}
            </Group>
            <Space h="lg" />
            <Center
              style={{
                height: 450,
                backgroundColor: "#fbfbfb",
                border: "2px dotted #e7e7e7",
                fontSize: 20,
                color: "#999",
              }}
            >
              GRAPH PLACEHOLDER
            </Center>
          </Tabs.Panel>
        </Tabs>
        <Button variant="light" mt="xl" leftSection={<IconPlus size={18} />}>
          Add Panel
        </Button>
      </Container>
    </>
  );
}

export default App;
