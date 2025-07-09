import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }

  const lightColors = [
    "#FFCDD2", // red
    "#C8E6C9", // green
    "#FFF9C4", // yellow
    "#BBDEFB", // blue
    "#D1C4E9", // purple
    "#F8BBD0" // pink
  ];

  const darkColors = [
    "#B71C1C", // dark red
    "#1B5E20", // dark green
    "#F57F17", // dark yellow
    "#0D47A1", // dark blue
    "#4A148C", // dark purple
    "#880E4F" // dark pink
  ];
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <a
                  href={project.footerLink[0].url}
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: "none"}}
                >
                  <div
                    className={
                      isDark
                        ? "dark-mode project-card project-card-dark"
                        : "project-card project-card-light"
                    }
                  >
                    <div className="project-detail">
                      <h5
                        className={
                          isDark ? "dark-mode card-title" : "card-title"
                        }
                      >
                        {project.projectName}
                      </h5>
                      <p
                        className={
                          isDark ? "dark-mode card-subtitle" : "card-subtitle"
                        }
                      >
                        {project.projectDesc}
                      </p>
                      {project.tags.length > 0 ? (
                        <div className="project-card-footer">
                          {project.tags.map((tag, i) => {
                            const backgroundColor = isDark
                              ? darkColors[i % darkColors.length]
                              : lightColors[i % lightColors.length];

                            const color = isDark ? "#FFFFFF" : "#000000";
                            return (
                              <span
                                key={i}
                                className={
                                  isDark
                                    ? `dark-mode project-tag`
                                    : `project-tag`
                                }
                                style={{
                                  backgroundColor,
                                  color
                                }}
                              >
                                {tag}
                              </span>
                            );
                          })}
                        </div>
                      ) : null}
                      {/* {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null} */}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
