import { Cheatsheet }  from "../types/Cheatsheet";
//importing all the cheatsheets
import JavaScript from "../cheatsheets/javascript";
import ReactCheatsheet from "../cheatsheets/react";
import GitCheatsheet from "../cheatsheets/git";
import PythonCheatsheet from '../cheatsheets/python'
import TkinterCheatsheet from '../cheatsheets/tkinker'
import FlaskCheatsheet from '../cheatsheets/Flask'
import FlaskCheatsheet from '../cheatsheets/Flask'
import MySQLCheatsheet from '../cheatsheets/mySQL-Pyhon'
export function loadCheatsheets(): Cheatsheet[] {
    return [
        {
            id: "javascript",
            title: "JavaScript",
            description: "Trucos de JavaScript",
            content: JavaScript()
        },
        {
            id: "mySQL-python",
            title: "mySQL-python",
            description: "guia de uso de mysql en python",
            content: MySQLCheatsheet()
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
            id: "flask",
            title: "Flask",
            description: "Trucos de Flask",
            content: FlaskCheatsheet()
        },
        {
            id: "python-tkinker",
            title: "Tkinker",
            description: "Trucos de Tkinker",
            content: TkinterCheatsheet()
        },
    ];
}
