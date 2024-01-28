import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";

export default function User({ user }) {
  return (
    <List
      dense
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      {user.map((user) => {
        const labelId = `checkbox-list-secondary-label-${user.id}`;
        return (
          <ListItem key={user.id} disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar alt={user.firstName} src={user.picture} />
              </ListItemAvatar>
              <ListItemText
                id={labelId}
                primary={user.firstName + " " + user.lastName}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
