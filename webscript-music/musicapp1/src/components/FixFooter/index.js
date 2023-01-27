import{ useState } from 'react';
import { closeIcon, homeIcon, nextIcon, playBlackIcon, playGreyIcon, prevIcon, userIcon } from '../../assets';
import './style.css';

const FixFooter = (props) => {
    
    const [slideUp, setSlideUp] = useState(false);
    
    return ( 
        <div className={`fix-footer ${slideUp ? 'active' : ''}`}>
            <div onClick={() => setSlideUp(!slideUp)} className="slide-up-btn"></div>
            <div className="d-visibility"></div>
            {
                slideUp && (
                    <div className='largePlayer'>
                        <div className='albumCoverImg-Lg'>
                            <img />
                        </div>
                        <div>
                            <h2>Boom, Boom, Boom, Boom!!</h2>
                            <h3>Vengaboys</h3>
                        </div>

                        <div className='largePlayerProgress'>
                            <input type="range" min={'0'} max={'100'}/>
                        </div>

                        <div className="audioControls flex justify-sb">
                            <button>
                                <img src={prevIcon} />
                            </button>
                            <div className='playPauseBtn'>
                                <button>
                                    <img src={playBlackIcon} />
                                </button>
                            </div>
                            <button>
                                <img src={nextIcon}/>
                            </button>
                        </div>
                    </div>
                )
            }


            {
                !slideUp && (
                    <>
                        {/* Mini Player */}
                        <div className="miniPlayer flex justify-sb align-center mtb-10">
                            <div className="flex ">
                                <div className="albumCoverImg">
                                    <img />
                                </div>
                                <div className='mini-player-info plr-10'>
                                    <p>Boom, Boom, Boom, Boom!!</p>
                                    <p>Vengaboys</p>
                                </div>
                            </div>
                            <div className='miniPlayerControl'>
                                <button>
                                    <img src={playGreyIcon} />
                                </button>
                                <button>
                                    <img src={closeIcon} />
                                </button>
                            </div>
                        </div>
                        {/* Navigation Menu */}
                        <div className="navigation-menu flex justify-evenly">
                            <a>
                                <div>
                                    <img src={homeIcon} />
                                </div>
                                <div>
                                    <span>Home</span>
                                </div>
                            </a>
                            <a>
                                <div>
                                    <img src={userIcon} />
                                </div>
                                <div>
                                    <span>Profile</span>
                                </div>
                            </a>
                        </div>

                    </>
                )
            }

            
        </div>
    

     );
}
 
export default FixFooter;