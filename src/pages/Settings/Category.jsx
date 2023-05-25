import clsx from "clsx";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { NodeApi, Tree } from "react-arborist";
import { Box, Button, Grid, Icon, IconButton, TextField } from "@mui/material";
import { css } from "@emotion/css";
import "@/Tree.css";
import FilterlistBox from "../../components/FilterBox";
import { useSearchParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import BoxHeader from "../../components/BoxHeader";

const data = [
  { id: "1", name: "Unread" },
  { id: "2", name: "Threads" },
  {
    id: "3",
    name: "Chat Rooms",
    children: [
      { id: "c1", name: "General" },
      { id: "c2", name: "Random" },
      { id: "c3", name: "Open Source Projects" },
    ],
  },
  {
    id: "4",
    name: "Direct Messages",
    children: [
      { id: "d1", name: "Alice" },
      { id: "d2", name: "Bob" },
      { id: "d3", name: "Charlie" },
    ],
  },
];

const arrowStyle = css`
  width: 20px;
  display: flex;
  font-size: 20px;
`;

const textStyle = css`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function FolderArrow({ node }) {
  return (
    <span className={arrowStyle}>
      {node.isInternal ? node.isOpen ? <Icon>arrow_drop_down</Icon> : <Icon>arrow_right</Icon> : null}
    </span>
  );
}

FolderArrow.propTypes = {
  node: PropTypes.shape(NodeApi),
};

function Node({ node, style, dragHandle }) {
  //const IconItem = node.isInternal ? BsMapFill : BsGeoFill;
  const indentSize = Number.parseFloat(`${style.paddingLeft || 0}`);
  return (
    <div
      ref={dragHandle}
      style={style}
      className={clsx("node", node.state.isSelected ? "isSelected" : null)}
      onClick={() => node.isInternal && node.toggle()}
    >
      <div className={"indentLines"}>
        {new Array(indentSize / 15).fill(0).map((_, index) => {
          return <div key={index}></div>;
        })}
      </div>
      <FolderArrow node={node} /> <span className={textStyle}>{node.isEditing ? node.data.name : node.data.name}</span>
    </div>
  );
}

Node.propTypes = {
  node: PropTypes.object,
  style: PropTypes.object,
  dragHandle: PropTypes.func,
};

const Category = () => {
  const [searchParams] = useSearchParams();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  const { t } = useTranslation();
  const [tree, setTree] = useState(null);
  const [active, setActive] = useState();
  const [focused, setFocused] = useState(null);
  const [selectedCount, setSelectedCount] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(tree?.visibleNodes.length ?? 0);
  }, [tree, searchParams]);

  return (
    <>
      <FilterlistBox noFilter={true} />
      <BoxHeader
        title={t("pages.setting.category.title")}
        CreateFnc={() => {
          tree.create();
          setTimeout(() => {
            const newNode = tree.focusedNode;
            setActive({
              id: newNode.data.id,
              name: newNode.data.name,
            });
          }, 10);
        }}
      />

      <Grid p={1} container>
        <Grid item xs={12} sm={4}>
          <Tree
            initialData={data}
            selectionFollowsFocus={true}
            disableMultiSelection={true}
            ref={(t) => setTree(t)}
            openByDefault={true}
            searchTerm={searchParams.get("q")}
            selection={active?.id}
            className={"tree"}
            rowClassName={"row"}
            width={matchesSm ? "94%" : "100%"}
            height={matchesSm ? 400 : 240}
            padding={15}
            rowHeight={30}
            indent={15}
            overscanCount={8}
            onSelect={(selected) => setSelectedCount(selected.length)}
            onActivate={(node) => setActive(node.data)}
            onFocus={(node) => setFocused(node.data)}
            onToggle={() => {
              setTimeout(() => {
                setCount(tree?.visibleNodes.length ?? 0);
              });
            }}
          >
            {Node}
          </Tree>
        </Grid>
        {active ? (
          <Grid
            mt={matchesSm ? 0 : 2}
            p={2}
            xs={12}
            sm={8}
            sx={{ display: "flex", flexDirection: "column" }}
            className="tree"
            item
          >
            <Box mb={1} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
              <div>id : {active?.id}</div>
              <IconButton
                onClick={() => {
                  tree.delete(active.id);
                  tree.deselectAll();
                  setActive();
                }}
              >
                <Icon>delete</Icon>
              </IconButton>
            </Box>
            <TextField
              size="small"
              label="Name"
              value={active.name}
              onChange={(event) => {
                setActive({
                  id: active.id,
                  name: event.target.value,
                });
              }}
              autoFocus
            />
            <Box sx={{ flexGrow: 1 }} />
            <Box pt={matchesSm ? 2 : 10} display={"flex"} justifyContent={"space-evenly"} alignItems={"center"}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<Icon>save</Icon>}
                onClick={() => {
                  const newNode = tree.get(active.id);
                  newNode.submit(active.name);
                }}
              >
                {" "}
                save
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                onClick={() => {
                  console.log("in");
                }}
              >
                {" "}
                cancel
              </Button>
            </Box>
          </Grid>
        ) : null}
      </Grid>

      <Box p={1} display={"flex"} justifyContent={"center"}>
        <div className={"statsgrid"}>
          <section className={"infobox"}>
            <label>Focused:</label>
            <div className={"stat"}>{focused?.name ?? "(none)"}</div>
          </section>

          <section className={"infobox"}>
            <label>Active:</label>
            <div className={"stat"}>{active?.name ?? "(none)"}</div>
          </section>

          <section className={"infobox"}>
            <label>Visible Nodes:</label>
            <div className={"stat"}>{count}</div>
          </section>

          <section className={"infobox"}>
            <label>Selected Items:</label>
            <div className={"stat"}>{selectedCount}</div>
          </section>
        </div>
      </Box>
    </>
  );
};

export default Category;
