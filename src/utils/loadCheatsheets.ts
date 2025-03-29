import { Cheatsheet }  from "../types/Cheatsheet";
//importing all the cheatsheets
import JavaScript from "../cheatsheets/javascript";
import ReactCheatsheet from "../cheatsheets/react";
import GitCheatsheet from "../cheatsheets/git";
import PythonCheatsheet from '../cheatsheets/python'
import TkinterCheatsheet from '../cheatsheets/tkinker'
export function loadCheatsheets(): Cheatsheet[] {
    return [
        {
            id: "javascript",
            title: "JavaScript",
            description: "Trucos de JavaScript",
            content: JavaScript()
        },
        {
            id: "react",
            title: "React",
            description: "Trucos de React",
            content: ReactCheatsheet()
        },
        {
            id: "git",
            title: "Git",
            description: "Trucos de Git",
            content: GitCheatsheet()
        },
        {
            id: "python",
            title: "Python",
            description: "Trucos de Python",
            content: PythonCheatsheet()
        },
        {
            id: "python-tkinker",
            title: "Tkinker",
            description: "Trucos de Tkinker",
            content: TkinterCheatsheet()
        },
    ];
}
