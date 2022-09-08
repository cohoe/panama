import React from "react";
import {List, ListItem} from "@mui/material";

export const NotesList = ({notes}) => {
    return (
        <>
            <List>
                {notes.map((note) => (
                    <ListItem>
                        {note.text}
                    </ListItem>
                ))}
            </List>
        </>
    )
}