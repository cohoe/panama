import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export const NotesList = ({notes}) => {
    return (
        <>
            <List>
                {notes.map((note, index) => (
                    <ListItem key={index}>
                        {note.text}
                    </ListItem>
                ))}
            </List>
        </>
    )
}