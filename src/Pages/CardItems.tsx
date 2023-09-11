import { styled } from "styled-components";
import {useState} from "react"
import Img from "../images/original-08.jpg";
import img2 from "../images/img9.jpg";
import img5 from "../images/original-22.jpg";
import img6 from "../images/original-697.png";
import img7 from "../images/original-2a.png";
import img8 from "../images/Girl muslim.jpg";
import img9 from "../images/House.png";
import img10 from "../images/guy2.jpg";
import img11 from "../images/original-camera1.jpg";
import img12 from "../images/still-phone.png";
import img13 from "../images/world cup.png";
import { FaBookmark } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { AiTwotoneHeart} from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import videos from "../Videos/Dribble_Video.mp4";
import imgpop from "../images/mainpopup.jpg"
import pic1 from "../images/original-697.png"
import pic2 from "../images/original-1.png"
import pic3 from "../images/original-1b.png"
import pic4 from "../images/original-11.png"


const CardItems = () => {

    const [isPopCardVisible, setPopCardVisible] = useState(false)
    const [isVisible, setVisible] = useState(false)
    const [isVisible1, setVisible1] = useState(false)
    const [isVisible2, setVisible2] = useState(false)
    const [isVisible3, setVisible3] = useState(false)
    const [isVisible4, setVisible4] = useState(false)
    const [isVisible5, setVisible5] = useState(false)
    const [isVisible6, setVisible6] = useState(false)
    const [isVisible7, setVisible7] = useState(false)
    const [isVisible8, setVisible8] = useState(false)
    const [isVisible9, setVisible9] = useState(false)
    const [isVisible10, setVisible10] = useState(false)
    const [isVisible11, setVisible11] = useState(false)
    const [isVisible12, setVisible12] = useState(false)
    const [isVisible13, setVisible13] = useState(false)

  return (
    <>
      <Container>
      <CardPanel>
      <GridBox1>
      <CardHolder>
            <Card>
              {/* <Video src={videos} autoPlay playsInline loop muted /> */}
              <Image alt="dribble_img" src={Img} />
              <BrandHover>
                <AText>Let The Dog Out</AText>
                <Div>
                  <Icon />
                  <Icon1 />
                </Div>
              </BrandHover>
            </Card>
            <Holder>
                <Hdiv>
                <Avatar2 src={imgpop}
                onMouseEnter = {() => setPopCardVisible(true)}
                onMouseLeave = {() => setPopCardVisible(false)}
                />
              <Name>Nick Burishvili</Name>
                </Hdiv>
              <Hdiv2>
              <Stat>Comedy</Stat>
              <Divs>
                <Fav />
                <Num>104</Num>
              </Divs>
              <Divs>
                <Eye />
                <Num>17.9k</Num>
              </Divs>
              </Hdiv2>
              <PopCards isVisible={isPopCardVisible}
            //   onMouseEnter = {() => setPopCardVisible(true)}
              onMouseLeave = {() => setPopCardVisible(false)}
              >
                <Popdiv>
                    <MainPop>
                        <SubPop1>
                            <img src={imgpop} alt="" />
                        <Stat2>PRO</Stat2>
                        </SubPop1>
                        <SubPop>
                        <h4>Nick Burishvili</h4>
                        <p>Georgia, Tbilisi</p>
                        </SubPop>
                    </MainPop>
                    <PopButton>
                    <Btns>Follow</Btns>
                    </PopButton>
                </Popdiv>
                <Popdiv1>
                <PopPic1>
                    <img src={pic2} alt="" />
                </PopPic1>
                <PopPic2>
                    <img src={pic1} alt="" />
                </PopPic2>
                <PopPic3>
                    <img src={pic3} alt="" />
                </PopPic3>
                </Popdiv1>
             </PopCards>
            </Holder>
      </CardHolder>
      </GridBox1>
      <GridBox1>
      <CardHolder>
            <Card>
              <Video src={videos} autoPlay playsInline loop muted />
              <Image alt="dribble_img" src="https://valerian-random-bookstore.netlify.app/book/639c96beb59caf3ddf22e5ed/details" />
              <BrandHover>
                <AText>Think and Grow Rich</AText>
                <Div>
                  <Icon />
                  <Icon1 />
                </Div>
              </BrandHover>
            </Card>
            <Holder>
                <Hdiv>
                <Avatar1 src={pic1}
                onMouseEnter = {() => setVisible(true)}
                onMouseLeave = {() => setVisible(false)}
                />
              <Name>Napoleon Hills</Name>
                </Hdiv>
              <Hdiv2>
              <Stat>Drama</Stat>
              <Divs>
                <Fav />
                <Num>104</Num>
              </Divs>
              <Divs>
                <Eye />
                <Num>17.9k</Num>
              </Divs>
              </Hdiv2>
              <PopCards isVisible={isVisible}
            //   onMouseEnter = {() => setPopCardVisible(true)}
              onMouseLeave = {() => setPopCardVisible(false)}
              >
                <Popdiv>
                    <MainPop>
                        <SubPop1>
                            <img src={pic1} alt="" />
                        <Stat2>Drama</Stat2>
                        </SubPop1>
                        <SubPop>
                        <h4>Napoleon Hills</h4>
                        <p>Think and Grow Rich</p>
                        </SubPop>
                    </MainPop>
                    <PopButton>
                    <Btns>Follow</Btns>
                    </PopButton>
                </Popdiv>
                <Popdiv1>
                <PopPic1>
                    <img src={pic2} alt="" />
                </PopPic1>
                <PopPic2>
                    <img src={pic1} alt="" />
                </PopPic2>
                <PopPic3>
                    <img src={pic3} alt="" />
                </PopPic3>
                </Popdiv1>
             </PopCards>
            </Holder>
      </CardHolder>
      </GridBox1>
      <GridBox1>
      <CardHolder>
            <Card>
              <Video src={videos} autoPlay playsInline loop muted />
              <Image alt="dribble_img" src={pic2} />
              <BrandHover>
                <AText>The Power Of Inovation</AText>
                <Div>
                  <Icon />
                  <Icon1 />
                </Div>
              </BrandHover>
            </Card>
            <Holder>
                <Hdiv>
                <Avatar3 src={pic2}
                onMouseEnter = {() => setVisible1(true)}
                onMouseLeave = {() => setVisible1(false)}
                />
              <Name>Kiyosachi</Name>
                </Hdiv>
              <Hdiv2>
              <Stat>Poem</Stat>
              <Divs>
                <Fav />
                <Num>104</Num>
              </Divs>
              <Divs>
                <Eye />
                <Num>17.9k</Num>
              </Divs>
              </Hdiv2>
              <PopCards isVisible={isVisible1}
            //   onMouseEnter = {() => setPopCardVisible(true)}
              onMouseLeave = {() => setPopCardVisible(false)}
              >
                <Popdiv>
                    <MainPop>
                        <SubPop1>
                            <img src={pic2} alt="" />
                        <Stat2>Poem</Stat2>
                        </SubPop1>
                        <SubPop>
                        <h4>Kiyosachi</h4>
                        <p>Rich Dad, Poor Dad</p>
                        </SubPop>
                    </MainPop>
                    <PopButton>
                    <Btns>Follow</Btns>
                    </PopButton>
                </Popdiv>
                <Popdiv1>
                <PopPic1>
                    <img src={pic2} alt="" />
                </PopPic1>
                <PopPic2>
                    <img src={pic1} alt="" />
                </PopPic2>
                <PopPic3>
                    <img src={pic3} alt="" />
                </PopPic3>
                </Popdiv1>
             </PopCards>
            </Holder>
      </CardHolder>
      </GridBox1>
      <GridBox1>
      <CardHolder>
            <Card>
              <Video src={videos} autoPlay playsInline loop muted />
              <Image alt="dribble_img" src={pic3} />
              <BrandHover>
                <AText>Dance To The Rythmn</AText>
                <Div>
                  <Icon />
                  <Icon1 />
                </Div>
              </BrandHover>
            </Card>
            <Holder>
                <Hdiv>
                <Avatar4 src={pic3}
                onMouseEnter = {() => setVisible2(true)}
                onMouseLeave = {() => setVisible2(false)}
                />
              <Name>DJ Poppy</Name>
                </Hdiv>
              <Hdiv2>
              <Stat>Music</Stat>
              <Divs>
                <Fav />
                <Num>1394</Num>
              </Divs>
              <Divs>
                <Eye />
                <Num>183.9k</Num>
              </Divs>
              </Hdiv2>
              <PopCards isVisible={isVisible2}
            //   onMouseEnter = {() => setPopCardVisible(true)}
              onMouseLeave = {() => setPopCardVisible(false)}
              >
                <Popdiv>
                    <MainPop>
                        <SubPop1>
                            <img src={pic3} alt="" />
                        <Stat2>Music</Stat2>
                        </SubPop1>
                        <SubPop>
                        <h4>DJ Poppy</h4>
                        <p>Dance To The Rythmn</p>
                        </SubPop>
                    </MainPop>
                    <PopButton>
                    <Btns>Follow</Btns>
                    </PopButton>
                </Popdiv>
                <Popdiv1>
                <PopPic1>
                    <img src={pic2} alt="" />
                </PopPic1>
                <PopPic2>
                    <img src={pic1} alt="" />
                </PopPic2>
                <PopPic3>
                    <img src={pic3} alt="" />
                </PopPic3>
                </Popdiv1>
             </PopCards>
            </Holder>
      </CardHolder>
      </GridBox1>
      <GridBox1>
      <CardHolder>
            <Card>
              <Video src={videos} autoPlay playsInline loop muted />
              <Image alt="dribble_img" src={img5} />
              <BrandHover>
                <AText>To the Moon</AText>
                <Div>
                  <Icon />
                  <Icon1 />
                </Div>
              </BrandHover>
            </Card>
            <Holder>
                <Hdiv>
                <Avatar5 src={img2}
                onMouseEnter = {() => setVisible3(true)}
                onMouseLeave = {() => setVisible3(false)}
                />
              <Name>Nick Burishvili</Name>
                </Hdiv>
              <Hdiv2>
              <Stat>PRO</Stat>
              <Divs>
                <Fav />
                <Num>104</Num>
              </Divs>
              <Divs>
                <Eye />
                <Num>17.9k</Num>
              </Divs>
              </Hdiv2>
              <PopCards isVisible={isVisible3}
            //   onMouseEnter = {() => setPopCardVisible(true)}
              onMouseLeave = {() => setPopCardVisible(false)}
              >
                <Popdiv>
                    <MainPop>
                        <SubPop1>
                            <img src={img2} alt="" />
                        <Stat2>PRO</Stat2>
                        </SubPop1>
                        <SubPop>
                        <h4>Nick Burishvili</h4>
                        <p>Georgia, Tbilisi</p>
                        </SubPop>
                    </MainPop>
                    <PopButton>
                    <Btns>Follow</Btns>
                    </PopButton>
                </Popdiv>
                <Popdiv1>
                <PopPic1>
                    <img src={pic2} alt="" />
                </PopPic1>
                <PopPic2>
                    <img src={pic1} alt="" />
                </PopPic2>
                <PopPic3>
                    <img src={pic3} alt="" />
                </PopPic3>
                </Popdiv1>
             </PopCards>
            </Holder>
      </CardHolder>
      </GridBox1>
      <GridBox1>
      <CardHolder>
            <Card>
              <Video src={videos} autoPlay playsInline loop muted />
              <Image alt="dribble_img" src={img6} />
              <BrandHover>
                <AText>The Real Template</AText>
                <Div>
                  <Icon />
                  <Icon1 />
                </Div>
              </BrandHover>
            </Card>
            <Holder>
                <Hdiv>
                <Avatar5 src={img6}
                onMouseEnter = {() => setVisible4(true)}
                onMouseLeave = {() => setVisible4(false)}
                />
              <Name>Nick Burishvili</Name>
                </Hdiv>
              <Hdiv2>
              <Stat>PRO</Stat>
              <Divs>
                <Fav />
                <Num>104</Num>
              </Divs>
              <Divs>
                <Eye />
                <Num>17.9k</Num>
              </Divs>
              </Hdiv2>
              <PopCards isVisible={isVisible4}
            //   onMouseEnter = {() => setPopCardVisible(true)}
              onMouseLeave = {() => setPopCardVisible(false)}
              >
                <Popdiv>
                    <MainPop>
                        <SubPop1>
                            <img src={img6} alt="" />
                        <Stat2>PRO</Stat2>
                        </SubPop1>
                        <SubPop>
                        <h4>Nick Burishvili</h4>
                        <p>Georgia, Tbilisi</p>
                        </SubPop>
                    </MainPop>
                    <PopButton>
                    <Btns>Follow</Btns>
                    </PopButton>
                </Popdiv>
                <Popdiv1>
                <PopPic1>
                    <img src={pic4} alt="" />
                </PopPic1>
                <PopPic2>
                    <img src={img6} alt="" />
                </PopPic2>
                <PopPic3>
                    <img src={pic3} alt="" />
                </PopPic3>
                </Popdiv1>
             </PopCards>
            </Holder>
      </CardHolder>
      </GridBox1>
      <GridBox1>
      <CardHolder>
            <Card>
              <Video src={videos} autoPlay playsInline loop muted />
              <Image alt="dribble_img" src={img6} />
              <BrandHover>
                <AText>To the Moon</AText>
                <Div>
                  <Icon />
                  <Icon1 />
                </Div>
              </BrandHover>
            </Card>
            <Holder>
                <Hdiv>
                <Avatar5 src={img6}
                onMouseEnter = {() => setVisible5(true)}
                onMouseLeave = {() => setVisible5(false)}
                />
              <Name>Nick Burishvili</Name>
                </Hdiv>
              <Hdiv2>
              <Stat>PRO</Stat>
              <Divs>
                <Fav />
                <Num>104</Num>
              </Divs>
              <Divs>
                <Eye />
                <Num>17.9k</Num>
              </Divs>
              </Hdiv2>
              <PopCards isVisible={isVisible5}
              >
                <Popdiv>
                    <MainPop>
                        <SubPop1>
                            <img src={img6} alt="" />
                        <Stat2>PRO</Stat2>
                        </SubPop1>
                        <SubPop>
                        <h4>Nick Burishvili</h4>
                        <p>Georgia, Tbilisi</p>
                        </SubPop>
                    </MainPop>
                    <PopButton>
                    <Btns>Follow</Btns>
                    </PopButton>
                </Popdiv>
                <Popdiv1>
                <PopPic1>
                    <img src={pic2} alt="" />
                </PopPic1>
                <PopPic2>
                    <img src={pic1} alt="" />
                </PopPic2>
                <PopPic3>
                    <img src={pic3} alt="" />
                </PopPic3>
                </Popdiv1>
             </PopCards>
            </Holder>
      </CardHolder>
      </GridBox1>
      <GridBox1>
      <CardHolder>
            <Card>
              <Video src={videos} autoPlay playsInline loop muted />
              <Image alt="dribble_img" src={img7} />
              <BrandHover>
                <AText>To the Moon</AText>
                <Div>
                  <Icon />
                  <Icon1 />
                </Div>
              </BrandHover>
            </Card>
            <Holder>
                <Hdiv>
                <Avatar5 src={img7}
                onMouseEnter = {() => setVisible6(true)}
                onMouseLeave = {() => setVisible6(false)}
                />
              <Name>Nick Burishvili</Name>
                </Hdiv>
              <Hdiv2>
              <Stat>PRO</Stat>
              <Divs>
                <Fav />
                <Num>104</Num>
              </Divs>
              <Divs>
                <Eye />
                <Num>17.9k</Num>
              </Divs>
              </Hdiv2>
              <PopCards isVisible={isVisible6}
            //   onMouseEnter = {() => setPopCardVisible(true)}
              onMouseLeave = {() => setPopCardVisible(false)}
              >
                <Popdiv>
                    <MainPop>
                        <SubPop1>
                            <img src={img7} alt="" />
                        <Stat2>PRO</Stat2>
                        </SubPop1>
                        <SubPop>
                        <h4>Nick Burishvili</h4>
                        <p>Georgia, Tbilisi</p>
                        </SubPop>
                    </MainPop>
                    <PopButton>
                    <Btns>Follow</Btns>
                    </PopButton>
                </Popdiv>
                <Popdiv1>
                <PopPic1>
                    <img src={pic2} alt="" />
                </PopPic1>
                <PopPic2>
                    <img src={pic1} alt="" />
                </PopPic2>
                <PopPic3>
                    <img src={pic3} alt="" />
                </PopPic3>
                </Popdiv1>
             </PopCards>
            </Holder>
      </CardHolder>
      </GridBox1>
      <GridBox1>
      <CardHolder>
            <Card>
              <Video src={videos} autoPlay playsInline loop muted />
              <Image alt="dribble_img" src={Img} />
              <BrandHover>
                <AText>To the Moon</AText>
                <Div>
                  <Icon />
                  <Icon1 />
                </Div>
              </BrandHover>
            </Card>
            <Holder>
                <Hdiv>
                <Avatar5 src={imgpop}
                onMouseEnter = {() => setVisible7(true)}
                onMouseLeave = {() => setVisible7(false)}
                />
              <Name>Nick Burishvili</Name>
                </Hdiv>
              <Hdiv2>
              <Stat>PRO</Stat>
              <Divs>
                <Fav />
                <Num>104</Num>
              </Divs>
              <Divs>
                <Eye />
                <Num>17.9k</Num>
              </Divs>
              </Hdiv2>
              <PopCards isVisible={isVisible7}
            //   onMouseEnter = {() => setPopCardVisible(true)}
              onMouseLeave = {() => setPopCardVisible(false)}
              >
                <Popdiv>
                    <MainPop>
                        <SubPop1>
                            <img src={imgpop} alt="" />
                        <Stat2>PRO</Stat2>
                        </SubPop1>
                        <SubPop>
                        <h4>Nick Burishvili</h4>
                        <p>Georgia, Tbilisi</p>
                        </SubPop>
                    </MainPop>
                    <PopButton>
                    <Btns>Follow</Btns>
                    </PopButton>
                </Popdiv>
                <Popdiv1>
                <PopPic1>
                    <img src={pic2} alt="" />
                </PopPic1>
                <PopPic2>
                    <img src={pic1} alt="" />
                </PopPic2>
                <PopPic3>
                    <img src={pic3} alt="" />
                </PopPic3>
                </Popdiv1>
             </PopCards>
            </Holder>
      </CardHolder>
      </GridBox1>
      <GridBox1>
      <CardHolder>
            <Card>
              <Video src={videos} autoPlay playsInline loop muted />
              <Image alt="dribble_img" src={Img} />
              <BrandHover>
                <AText>Change Your World!!</AText>
                <Div>
                  <Icon />
                  <Icon1 />
                </Div>
              </BrandHover>
            </Card>
            <Holder>
                <Hdiv>
                <Avatar5 src={imgpop}
                onMouseEnter = {() => setVisible8(true)}
                onMouseLeave = {() => setVisible8(false)}
                />
              <Name>Nick Burishvili</Name>
                </Hdiv>
              <Hdiv2>
              <Stat>PRO</Stat>
              <Divs>
                <Fav />
                <Num>104</Num>
              </Divs>
              <Divs>
                <Eye />
                <Num>17.9k</Num>
              </Divs>
              </Hdiv2>
              <PopCards isVisible={isVisible8}
            //   onMouseEnter = {() => setPopCardVisible(true)}
              onMouseLeave = {() => setPopCardVisible(false)}
              >
                <Popdiv>
                    <MainPop>
                        <SubPop1>
                            <img src={imgpop} alt="" />
                        <Stat2>PRO</Stat2>
                        </SubPop1>
                        <SubPop>
                        <h4>Nick Burishvili</h4>
                        <p>Georgia, Tbilisi</p>
                        </SubPop>
                    </MainPop>
                    <PopButton>
                    <Btns>Follow</Btns>
                    </PopButton>
                </Popdiv>
                <Popdiv1>
                <PopPic1>
                    <img src={pic2} alt="" />
                </PopPic1>
                <PopPic2>
                    <img src={pic1} alt="" />
                </PopPic2>
                <PopPic3>
                    <img src={pic3} alt="" />
                </PopPic3>
                </Popdiv1>
             </PopCards>
            </Holder>
      </CardHolder>
      </GridBox1>
      <GridBox1>
      <CardHolder>
            <Card>
              <Video src={videos} autoPlay playsInline loop muted />
              <Image alt="dribble_img" src={img13} />
              <BrandHover>
                <AText>To the Moon</AText>
                <Div>
                  <Icon />
                  <Icon1 />
                </Div>
              </BrandHover>
            </Card>
            <Holder>
                <Hdiv>
                <Avatar5 src={img13}
                onMouseEnter = {() => setVisible9(true)}
                onMouseLeave = {() => setVisible9(false)}
                />
              <Name>Nick Burishvili</Name>
                </Hdiv>
              <Hdiv2>
              <Stat>PRO</Stat>
              <Divs>
                <Fav />
                <Num>104</Num>
              </Divs>
              <Divs>
                <Eye />
                <Num>17.9k</Num>
              </Divs>
              </Hdiv2>
              <PopCards isVisible={isVisible9}
              >
                <Popdiv>
                    <MainPop>
                        <SubPop1>
                            <img src={img13} alt="" />
                        <Stat2>PRO</Stat2>
                        </SubPop1>
                        <SubPop>
                        <h4>Max Califonia</h4>
                        <p>Georgia, Tbilisi</p>
                        </SubPop>
                    </MainPop>
                    <PopButton>
                    <Btns>Follow</Btns>
                    </PopButton>
                </Popdiv>
                <Popdiv1>
                <PopPic1>
                    <img src={pic2} alt="" />
                </PopPic1>
                <PopPic2>
                    <img src={pic1} alt="" />
                </PopPic2>
                <PopPic3>
                    <img src={pic3} alt="" />
                </PopPic3>
                </Popdiv1>
             </PopCards>
            </Holder>
      </CardHolder>
      </GridBox1>
      <GridBox1>
      <CardHolder>
            <Card>
              <Video src={videos} autoPlay playsInline loop muted />
              <Image alt="dribble_img" src={img12} />
              <BrandHover>
                <AText>To the Moon</AText>
                <Div>
                  <Icon />
                  <Icon1 />
                </Div>
              </BrandHover>
            </Card>
            <Holder>
                <Hdiv>
                <Avatar5 src={img12}
                onMouseEnter = {() => setVisible10(true)}
                onMouseLeave = {() => setVisible10(false)}
                />
              <Name>Nick Burishvili</Name>
                </Hdiv>
              <Hdiv2>
              <Stat>PRO</Stat>
              <Divs>
                <Fav />
                <Num>104</Num>
              </Divs>
              <Divs>
                <Eye />
                <Num>17.9k</Num>
              </Divs>
              </Hdiv2>
              <PopCards isVisible={isVisible10}
            //   onMouseEnter = {() => setPopCardVisible(true)}
              onMouseLeave = {() => setPopCardVisible(false)}
              >
                <Popdiv>
                    <MainPop>
                        <SubPop1>
                            <img src={img12} alt="" />
                        <Stat2>PRO</Stat2>
                        </SubPop1>
                        <SubPop>
                        <h4>Nick Burishvili</h4>
                        <p>Georgia, Tbilisi</p>
                        </SubPop>
                    </MainPop>
                    <PopButton>
                    <Btns>Follow</Btns>
                    </PopButton>
                </Popdiv>
                <Popdiv1>
                <PopPic1>
                    <img src={pic2} alt="" />
                </PopPic1>
                <PopPic2>
                    <img src={pic1} alt="" />
                </PopPic2>
                <PopPic3>
                    <img src={pic3} alt="" />
                </PopPic3>
                </Popdiv1>
             </PopCards>
            </Holder>
      </CardHolder>
      </GridBox1>
      <GridBox1>
      <CardHolder>
            <Card>
              <Video src={videos} autoPlay playsInline loop muted />
              <Image alt="dribble_img" src={img11} />
              <BrandHover>
                <AText>To the Moon</AText>
                <Div>
                  <Icon />
                  <Icon1 />
                </Div>
              </BrandHover>
            </Card>
            <Holder>
                <Hdiv>
                <Avatar5 src={img11}
                onMouseEnter = {() => setVisible10(true)}
                onMouseLeave = {() => setVisible10(false)}
                />
              <Name>Nick Burishvili</Name>
                </Hdiv>
              <Hdiv2>
              <Stat>PRO</Stat>
              <Divs>
                <Fav />
                <Num>104</Num>
              </Divs>
              <Divs>
                <Eye />
                <Num>17.9k</Num>
              </Divs>
              </Hdiv2>
              <PopCards isVisible={isVisible10}
            //   onMouseEnter = {() => setPopCardVisible(true)}
              onMouseLeave = {() => setPopCardVisible(false)}
              >
                <Popdiv>
                    <MainPop>
                        <SubPop1>
                            <img src={img11} alt="" />
                        <Stat2>PRO</Stat2>
                        </SubPop1>
                        <SubPop>
                        <h4>Nick Burishvili</h4>
                        <p>Georgia, Tbilisi</p>
                        </SubPop>
                    </MainPop>
                    <PopButton>
                    <Btns>Follow</Btns>
                    </PopButton>
                </Popdiv>
                <Popdiv1>
                <PopPic1>
                    <img src={pic2} alt="" />
                </PopPic1>
                <PopPic2>
                    <img src={pic1} alt="" />
                </PopPic2>
                <PopPic3>
                    <img src={pic3} alt="" />
                </PopPic3>
                </Popdiv1>
             </PopCards>
            </Holder>
      </CardHolder>
      </GridBox1>
      <GridBox1>
      <CardHolder>
            <Card>
              <Video src={videos} autoPlay playsInline loop muted />
              <Image alt="dribble_img" src={img10} />
              <BrandHover>
                <AText>To the Moon</AText>
                <Div>
                  <Icon />
                  <Icon1 />
                </Div>
              </BrandHover>
            </Card>
            <Holder>
                <Hdiv>
                <Avatar5 src={img10}
                onMouseEnter = {() => setVisible11(true)}
                onMouseLeave = {() => setVisible11(false)}
                />
              <Name>Nick Burishvili</Name>
                </Hdiv>
              <Hdiv2>
              <Stat>PRO</Stat>
              <Divs>
                <Fav />
                <Num>104</Num>
              </Divs>
              <Divs>
                <Eye />
                <Num>17.9k</Num>
              </Divs>
              </Hdiv2>
              <PopCards isVisible={isVisible11}
            //   onMouseEnter = {() => setPopCardVisible(true)}
              onMouseLeave = {() => setPopCardVisible(false)}
              >
                <Popdiv>
                    <MainPop>
                        <SubPop1>
                            <img src={img10} alt="" />
                        <Stat2>PRO</Stat2>
                        </SubPop1>
                        <SubPop>
                        <h4>Nick Burishvili</h4>
                        <p>Georgia, Tbilisi</p>
                        </SubPop>
                    </MainPop>
                    <PopButton>
                    <Btns>Follow</Btns>
                    </PopButton>
                </Popdiv>
                <Popdiv1>
                <PopPic1>
                    <img src={img8} alt="" />
                </PopPic1>
                <PopPic2>
                    <img src={img9} alt="" />
                </PopPic2>
                <PopPic3>
                    <img src={img10} alt="" />
                </PopPic3>
                </Popdiv1>
             </PopCards>
            </Holder>
      </CardHolder>
      </GridBox1>
      <GridBox1>
      <CardHolder>
            <Card>
              <Video src={videos} autoPlay playsInline loop muted />
              <Image alt="dribble_img" src={img9} />
              <BrandHover>
                <AText>To the Moon</AText>
                <Div>
                  <Icon />
                  <Icon1 />
                </Div>
              </BrandHover>
            </Card>
            <Holder>
                <Hdiv>
                <Avatar5 src={img9}
                onMouseEnter = {() => setVisible12(true)}
                onMouseLeave = {() => setVisible12(false)}
                />
              <Name>Nick Burishvili</Name>
                </Hdiv>
              <Hdiv2>
              <Stat>PRO</Stat>
              <Divs>
                <Fav />
                <Num>104</Num>
              </Divs>
              <Divs>
                <Eye />
                <Num>17.9k</Num>
              </Divs>
              </Hdiv2>
              <PopCards isVisible={isVisible12}
            //   onMouseEnter = {() => setPopCardVisible(true)}
              onMouseLeave = {() => setPopCardVisible(false)}
              >
                <Popdiv>
                    <MainPop>
                        <SubPop1>
                            <img src={img9} alt="" />
                        <Stat2>PRO</Stat2>
                        </SubPop1>
                        <SubPop>
                        <h4>Nick Burishvili</h4>
                        <p>Georgia, Tbilisi</p>
                        </SubPop>
                    </MainPop>
                    <PopButton>
                    <Btns>Follow</Btns>
                    </PopButton>
                </Popdiv>
                <Popdiv1>
                <PopPic1>
                    <img src={pic2} alt="" />
                </PopPic1>
                <PopPic2>
                    <img src={pic1} alt="" />
                </PopPic2>
                <PopPic3>
                    <img src={pic3} alt="" />
                </PopPic3>
                </Popdiv1>
             </PopCards>
            </Holder>
      </CardHolder>
      </GridBox1>
      <GridBox1>
      <CardHolder>
            <Card>
              <Video src={videos} autoPlay playsInline loop muted />
              <Image alt="dribble_img" src={img8} />
              <BrandHover>
                <AText>To the Moon</AText>
                <Div>
                  <Icon />
                  <Icon1 />
                </Div>
              </BrandHover>
            </Card>
            <Holder>
                <Hdiv>
                <Avatar5 src={img8}
                onMouseEnter = {() => setVisible13(true)}
                onMouseLeave = {() => setVisible13(false)}
                />
              <Name>Nick Burishvili</Name>
                </Hdiv>
              <Hdiv2>
              <Stat>PRO</Stat>
              <Divs>
                <Fav />
                <Num>104</Num>
              </Divs>
              <Divs>
                <Eye />
                <Num>17.9k</Num>
              </Divs>
              </Hdiv2>
              <PopCards isVisible={isVisible13}
            //   onMouseEnter = {() => setPopCardVisible(true)}
              onMouseLeave = {() => setPopCardVisible(false)}
              >
                <Popdiv>
                    <MainPop>
                        <SubPop1>
                            <img src={img8} alt="" />
                        <Stat2>PRO</Stat2>
                        </SubPop1>
                        <SubPop>
                        <h4>Nick Burishvili</h4>
                        <p>Georgia, Tbilisi</p>
                        </SubPop>
                    </MainPop>
                    <PopButton>
                    <Btns>Follow</Btns>
                    </PopButton>
                </Popdiv>
                <Popdiv1>
                <PopPic1>
                    <img src={pic2} alt="" />
                </PopPic1>
                <PopPic2>
                    <img src={pic1} alt="" />
                </PopPic2>
                <PopPic3>
                    <img src={pic3} alt="" />
                </PopPic3>
                </Popdiv1>
             </PopCards>
            </Holder>
      </CardHolder>
      </GridBox1>
       </CardPanel>
      </Container>
    </>
  );
};

export default CardItems;
const GridBox1 = styled.div`
`;
const Popdiv1 = styled.div`
width: 100%;
height: 50%;
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
padding: 10px;
`;
const PopPic1 = styled.div`
/* background-color: orange; */
img{
    width: 100%;
    cursor: pointer;
    margin-left: 15px;
    height: 100%;
}
`
const PopPic2 = styled.div`
/* background-color: white; */
img{
    width: 100%;
    cursor: pointer;
    margin-left: 9px;
    height: 100%;
}
`
const PopPic3 = styled.div`
/* background-color: purple; */
margin-right: 20px;

img{
    width: 100%;
    cursor: pointer;
    height: 100%;
}
`
const PopButton = styled.div`
margin-right: 30px;
font-size: 20px;
`
const Btns = styled.div`
padding: 10px 15px;
border: 1px solid grey;
border-radius: 20px;
cursor: pointer;
`
const MainPop = styled.div``
const SubPop = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 23px;
margin-left: 5px;

p, h4{
    margin: 0;
    font-size: 17px;
}
`
const SubPop1 = styled.div`
  img{
    width: 100px;
    height: 100px;
  }
`
const Stat2 = styled.div`
   background-color: grey;
   color: white;
   cursor: pointer;
   justify-content: center;
   align-items: center;
   display: flex;
   width: 6%;
   height: 5%;
   border-radius: 4px;
   padding: 5px 20px;
   font-size: 10px;
   font-weight: 700;
   letter-spacing: 0.3em;
   position: absolute;
   bottom: 142px;
   right: 407px;
   transition: all 350ms ease;
   &:hover{
    background-color: black;
   }
`
const Popdiv = styled.div`
width: 100%;
height: 50%;
display: flex;
margin-left: 20px;
justify-content: space-between;
align-items: center;
/* background-color: pink; */
div{
    display: flex;
    img{
        border-radius: 50%;
        cursor: pointer;
    }
}
`;

const PopCards = styled.div<{isVisible: boolean}>`
position: absolute;
box-shadow: 0px 0px 9px 2px grey;
width:  500px;
height: 255px;
left: -55px;
/* top:  -310px; */
background-color: white;
bottom: -250px;
border-radius: 20px;
display: flex;
opacity: 0s;
justify-content: center;
align-items: center;
flex-direction: column;
overflow: hidden;
opacity: ${({isVisible}) => (isVisible? "1" : "0")};
 transition: opacity 350ms ease, z-index 0s ease ${({ isVisible }) => (isVisible ? ", 500ms" : "")};
  z-index: ${({ isVisible }) => (isVisible ? "2" : "auto")}; 
`;
const Stat = styled.div`
   padding: 10px 40px;
   background-color: #131111;
   color: white;
   cursor: pointer;
   position: absolute;
   display: flex;
   justify-content: center;
   align-items: center;
   bottom: 270px;
   left: 30px;
   border-radius: 30px;
   transition: all 350ms ease;
   &:hover{
    background-color: white;
    color: black;
   }
`
const Hdiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 40%;
  justify-content: space-around;
 
`;
const Hdiv2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 55%;
`;
const Eye = styled(AiFillEye)`
font-size: 17px;
transition: all.3s ease;
cursor: pointer;
color: grey;
    &:hover{
        color: orange;
    }
`;

const Num = styled.div``;

const Fav = styled(AiTwotoneHeart)`
font-size: 17px;
color: grey;
transition: all.3s ease;
cursor: pointer;
    &:hover{
        color: orange;
    }
`;

const Divs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Status = styled.div`
  padding: 3px 5px;
  background-color: grey;
  border-radius: 3px;
  color: white;
`;

const Name = styled.div`
  font-weight: 600;
`;

const Avatar1 = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  
`;
const Avatar2 = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  
  
`;
const Avatar3 = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  
`;
const Avatar4 = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  
`;
const Avatar5 = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  
`;
const Holder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between;
  position: relative;

`;

const CardHolder = styled.div`
  /* border: 1px solid grey; */
  width: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  margin-left: 30px;
  margin-top: 30px;
  z-index: -1;
`;

const Video = styled.video`
  width: 100%;
  position: absolute;
  top: 0;
  height: 100%;
  object-fit: cover;
  z-index: -2;
`;

const Icon = styled(FaBookmark)`
  padding: 10px;
  margin-right: 10px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #fff;
  transition: all 350ms;

  &:hover {
    color: grey;
  }
`;

const Icon1 = styled(AiOutlineHeart)`
  padding: 10px;
  border-radius: 50%;
  background-color: #fff;
  transition: all 350ms;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

const Div = styled.div`
  margin-right: 5px;
  color: black;
  font-size: 25px;
`;

const AText = styled.div`
  margin-left: 5px;
  text-transform: capitalize;
`;

const BrandHover = styled.div`
  width: 100%;
  height: 43px;
  padding: 10px 0;
  background-color: rgba(0,0,0,0.2);
  
  opacity: 0;
  position: absolute;
  bottom: 0;
  color: white;
  transition: all 350ms;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: all 350ms;
`;

const Card = styled.div`
  border-radius: 10px;
  /* border: 1px solid orange; */
  width: 350px;
  height: 300px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  &:hover {
    ${BrandHover} {
      opacity: 1;
    }
    ${Image} {
      opacity: 1;
      z-index: 1;
    }
  }
`;

const CardPanel = styled.div`
  width: 95%;
  height: 90%;
  /* background-color: crimson; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 30px;
`;

const Container = styled.div`
  /* background-color: grey; */
  width: 100%;
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;