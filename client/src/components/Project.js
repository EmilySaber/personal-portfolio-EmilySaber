import React from 'react';

class Projects extends React.Component {
      render() {
            return ( 
                  <div>
                  <div id="projectmargin"> </div>
                        <h2>Projects</h2>
                        <div id="projectflex">
                        <div id="flexproject">
                             <p><img id="projectpic" alt="REMOCK website" src="/remock.png" /></p>  
                             <p>REMOCK</p>
                             <p>Recreating a blog style web page. Focus on usage of HTML, CSS flexbox and CSS grid.</p>
                             <p><a id="github" target="_blank" href="https://github.com/BurlingtonCodeAcademy/remock-EmilySaber">View on GitHub</a></p> 
                        </div>
                        <div id="flexproject">
                        <p><img id="projectpic" alt="TICTACTOE html game" src="/tictactoe.png" /></p> 
                            <p>TIC TAC TOE</p>  
                            <p>Web based UI Tic Tac Toe game. Focus on implementing DOM queries and event listeners throughout game. Made in collabortaion with Olivia Hartwig.</p> 
                            <p><a id="github" target="_blank" href="https://github.com/BurlingtonCodeAcademy/tic-tac-toe-emily-olivia">View on GitHub</a></p> 
                        </div>
                        <div id="flexproject">
                        <p><img id="projectpic" alt="Zorkington CLI game" src="/zorkington.png" /></p> 
                            <p>ZORKINGTON</p>
                            <p>Command line interface choose your own adventure game. Focused on creating class based methods. Made in collaboration with Brendan Devine.</p>
                            <p><a id="github" target="_blank" href="https://github.com/BurlingtonCodeAcademy/zorkington-emily-brendan">View on GitHub</a></p> 
                        </div>
                        </div>

                 <div id="projectbottommargin"></div>
                  </div>

            )}}

export default Projects;


