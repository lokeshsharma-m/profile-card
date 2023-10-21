import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

const skillData = [
    {
        skill: "HTML+CSS",
        level: "advanced",
        color: "#2662EA"
    },
    {
        skill: "JavaScript",
        level: "advanced",
        color: "#EFD81D"
    },
    {
        skill: "Web Design",
        level: "advanced",
        color: "#C3DCAF"
    },
    {
        skill: "Git and GitHub",
        level: "intermediate",
        color: "#E84F33"
    },
    {
        skill: "React",
        level: "advanced",
        color: "#60DAFB"
    },
    {
        skill: "Svelte",
        level: "beginner",
        color: "#FF3B00"
    }
];

function App() {
    return <div className="card">
        <Avatar />

        <div className="data">
            <Intro />

            <SkillList />
        </div>
    </div>
}
function Avatar() { return <img className="photo" src="info.jpeg" alt="profile" /> }

function Intro() {
    return <div>
        <h1>Lokesh Sharma </h1>
        <p>Full-stack webdeveloper and cybersecurity enthu.I like to play board games, to cook(and eat),or to just enjoy
            the portuguese sun at beach. </p>
    </div>
}

function SkillList() {
    return (
        <div className="skill-list">
            {skillData.map((skills) =>
                (<Skill skillobj={skills} key={skills.skill} />)
            )}
        </div>
    );
}

function Skill({ skillobj }) {
    return (
        <div className="skill" style={{ backgroundColor: skillobj.color }}>
            <span>{skillobj.skill}</span>
            <span>{(skillobj.level === 'beginner' && "👶")}
                {skillobj.level === "intermediate" && "👍"}
                {skillobj.level === "advanced" && "💪"}
            </span>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
