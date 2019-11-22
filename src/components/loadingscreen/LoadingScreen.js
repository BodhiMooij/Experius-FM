import React, { Component } from 'react'

class LoadlingScreen extends Component {
    render() {
        return (
            <div className="loader-background">
                <span className="blinker experius-blinker">
                    EXPERIUS FM<br/>
                    Loves<br/>
                    U
                </span>

                <pre className="outer">{`
            ,----------------,               ,---------,
        ,-----------------------,          ,"        ,"|
      ,"                      ,"|        ,"        ,"  |
     +-----------------------+  |      ,"        ,"    |
     |  .-----------------.  |  |     +---------+      |
     |  |                 |  |  |     | -==----'|      |
     |  |                 |  |  |     |         |      |
     |  |                 |  |  |/----|\`---=    |      |
     |  |                 |  |  |   ,/|==== ooo |      ;
     |  |                 |  |  |  // |(((( [33]|    ,"
     |  \`-----------------'  |," .;'| |((((     |  ,"
     +-----------------------+  ;;  | |         |,"
        /_)______________(_/  //'   | +---------+
   ___________________________/___  \`,
  /  oooooooooooooooo  .o.  oooo /,   \\,"-----------,
 / ==ooooooooooooooo==.o.  ooo= //   ,\`\\--8_)    ,"
/_==__==========__==_ooo__ooo=_/'   /____________,"
\`-----------------------------'
                `}</pre>

                <span className="outer">
                    PRESS SPACE TO ENTER THE POOL
                    <span className="blinker"></span>
                </span>
            </div>
        );
    }
}

export default LoadlingScreen;
