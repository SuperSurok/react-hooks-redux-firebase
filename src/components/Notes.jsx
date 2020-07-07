import React from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";

export const Notes = ({notes, onRemove}) => (
    <TransitionGroup component="ul" className="list-group">
        {notes && notes.map(note => (
            <CSSTransition
                key={note.id}
                classNames={"note"}
                timeout={800}
            >
                <li
                    key={note.id}
                    className="list-group-item note">
                    <div>
                        <strong>{note.title}</strong>
                        <small>{note.date}</small>
                    </div>
                    <button
                        type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => onRemove(note.id)}
                    >Delete
                    </button>
                </li>
            </CSSTransition>
        ))}
    </TransitionGroup>
);