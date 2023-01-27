import './style.css';
import {useState} from "react";

const Tabs = ({tabData}) => {
    
    const [touched, setTouched] = useState(false);
    const [active, setActive] = useState();

    console.log({tabData})
    return ( 
        <div className="tabContainer">
            {/* Tab Header */}
            <div className="tabHeader flex">
                {
                    tabData && Object.keys(tabData).map((tab, index) => {
                        <a key={index} className={`${
                            touched ? 
                                active === tab ? 'active' : '' 
                            : tabData[tab].isActive ? 'active' : '' }`
                            } 
                            href="#commercial" 
                            onClick={() => {
                                setTouched(true);
                                setActive(tab);
                            }}>
                            
                            {tabData[tab].label}
                        </a>
                    })
                }

                
                <a href="#freelicense">
                    Free License
                </a>
            </div>

            <div className="tabContents">
                <div className="tabContent mb-5" id="commercial">
                    <div className="contentWrapper flex justify-sb m-10">
                        <div className="contentItem">
                            <img />
                        </div>
                        <div className="contentItem">
                            <img alt = "test"/>
                        </div>
                        
                    </div>
                </div>

                <div className="tabContent" id="freelicense">
                    freelicense
                </div>
                
            </div>
        </div>
     );
}
 
export default Tabs;