import React from 'react'

import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['roomies']}>
        <img
          src="/playground_assets/menu2517-zny.svg"
          alt="menu2517"
          className={styles['menu']}
        />
        <div className={styles['welcometext']}>
          <span className={styles['text']}>
            <span>“There’s no place like home.”</span>
          </span>
          <span className={styles['text002']}>
            <span>Let’s find you that place!</span>
          </span>
          <img
            src="/playground_assets/vector1259-mic.svg"
            alt="Vector1259"
            className={styles['vector1']}
          />
        </div>
        <button className={styles['button']}>
          <span className={styles['text004']}>
            <span>Kick off</span>
          </span>
        </button>
        <div className={styles['frame1stcard']}>
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e752d23-57c0-4c69-bc4b-80fd8cc52360/f1da027d-0a2a-4681-b7b2-98b8d7cd5ce5?org_if_sml=1167480"
            alt="Rectangle12516"
            className={styles['rectangle1']}
          />
          <div className={styles['frame1streview']}>
            <div className={styles['rating']}>
              <img
                src="/playground_assets/emojionestar268-auev.svg"
                alt="emojionestar268"
                className={styles['emojionestar']}
              />
              <img
                src="/playground_assets/emojionestar2710-i5hc.svg"
                alt="emojionestar2710"
                className={styles['emojionestar01']}
              />
              <img
                src="/playground_assets/emojionestar2712-ai62r.svg"
                alt="emojionestar2712"
                className={styles['emojionestar02']}
              />
              <img
                src="/playground_assets/emojionestar2714-fphb.svg"
                alt="emojionestar2714"
                className={styles['emojionestar03']}
              />
              <img
                src="/playground_assets/emojionestar2716-fni8.svg"
                alt="emojionestar2716"
                className={styles['emojionestar04']}
              />
            </div>
            <span className={styles['text006']}>
              <span>
                Orci, est porttitor quis eleifend eu ornare. Quis sed nibh sit
                nec duis justo.
              </span>
            </span>
            <div className={styles['img']}>
              <img
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e752d23-57c0-4c69-bc4b-80fd8cc52360/1423c88f-53ba-45d4-b64a-3c5fb653a2a1?org_if_sml=19144"
                alt="Ellipse1267"
                className={styles['ellipse1']}
              />
              <img
                src="/playground_assets/tick2722-2z1.svg"
                alt="tick2722"
                className={styles['tick']}
              />
            </div>
          </div>
          <div className={styles['frame2ndreview']}>
            <span className={styles['text008']}>
              <span>Sed dignissim quis tortor vitae, eros donec enim.</span>
            </span>
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e752d23-57c0-4c69-bc4b-80fd8cc52360/abad0236-ba8c-4306-8892-c0f13dd191cd?org_if_sml=15024"
              alt="Ellipse22726"
              className={styles['ellipse2']}
            />
            <div className={styles['rating1']}>
              <img
                src="/playground_assets/emojionestar2728-xj7u.svg"
                alt="emojionestar2728"
                className={styles['emojionestar05']}
              />
              <img
                src="/playground_assets/emojionestar2730-ryta.svg"
                alt="emojionestar2730"
                className={styles['emojionestar06']}
              />
              <img
                src="/playground_assets/emojionestar2732-ljzd.svg"
                alt="emojionestar2732"
                className={styles['emojionestar07']}
              />
              <img
                src="/playground_assets/emojionestar2734-h9fe.svg"
                alt="emojionestar2734"
                className={styles['emojionestar08']}
              />
              <img
                src="/playground_assets/emojionestar2736-2uc.svg"
                alt="emojionestar2736"
                className={styles['emojionestar09']}
              />
            </div>
            <img
              src="/playground_assets/tick2845-98gq.svg"
              alt="tick2845"
              className={styles['tick1']}
            />
          </div>
        </div>
        <div className={styles['rentrooms']}>
          <span className={styles['text010']}>
            <span>
              <span>Rent rooms</span>
              <br></br>
              <span>and find roommates</span>
              <br></br>
              <span>in our verified community</span>
            </span>
          </span>
          <img
            src="/playground_assets/vector23452-v3b.svg"
            alt="Vector23452"
            className={styles['vector2']}
          />
          <div className={styles['text017']}>
            <span className={styles['text018']}>
              <span>
                <span>Whether you’re looking for a place or</span>
                <br></br>
                <span>
                  just someone to split the rent, Roomies has you covered.
                </span>
              </span>
            </span>
          </div>
        </div>
        <div className={styles['yourplaceyourrules']}>
          <div className={styles['text023']}>
            <span className={styles['text024']}>
              <span>
                <span>Roomies helps you share a room</span>
                <br></br>
                <span>
                  or an entire home on your terms. Welcome to the future of
                  co-living!
                </span>
              </span>
            </span>
            <img
              src="/playground_assets/line13460-jwkd.svg"
              alt="Line13460"
              className={styles['line1']}
            />
          </div>
          <span className={styles['text029']}>
            <span>Your Place, Your Rules</span>
          </span>
        </div>
        <div className={styles['rentingterms']}>
          <span className={styles['text031']}>
            <span>
              <span>
                Got rooms to rent? Find someone to
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>move in with you. Roomies makes finding cheap</span>
              <br></br>
              <span>rooms or putting your house for rent easier</span>
              <br></br>
              <span>than ever.</span>
            </span>
          </span>
          <span className={styles['text040']}>
            <span>Flexible Renting Terms</span>
          </span>
        </div>
        <div className={styles['frame2ndimg']}>
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e752d23-57c0-4c69-bc4b-80fd8cc52360/5561e0e7-b4d4-4ad9-b4f0-c20f75295a8b?org_if_sml=1143403"
            alt="Rectangle43461"
            className={styles['rectangle4']}
          />
          <span className={styles['text042']}>
            <span>Rent Easier</span>
          </span>
        </div>
        <div className={styles['subletsafely']}>
          <span className={styles['text044']}>
            <span>Sublet Safely</span>
          </span>
          <span className={styles['text046']}>
            <span>
              <span>Trust and transparency are the keys to</span>
              <br></br>
              <span>safely find rooms for rent,</span>
              <br></br>
              <span>let us help with that!</span>
            </span>
          </span>
        </div>
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e752d23-57c0-4c69-bc4b-80fd8cc52360/a22d9293-a555-4199-90c6-379bcf9af941?org_if_sml=1210946"
          alt="IMAGE3rdimg404"
          className={styles['i-m-a-g-e3rdimg']}
        />
        <div className={styles['trustedby']}>
          <div className={styles['topcustomers']}>
            <span className={styles['text053']}>
              <span>
                <span>Trusted by over 100 customers</span>
                <br></br>
                <span>worldwide</span>
              </span>
            </span>
            <div className={styles['imgs']}>
              <img
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e752d23-57c0-4c69-bc4b-80fd8cc52360/66719f54-577a-4094-8f95-181f73ebedc7?org_if_sml=11464"
                alt="Ellipse34010"
                className={styles['ellipse3']}
              />
              <img
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e752d23-57c0-4c69-bc4b-80fd8cc52360/3087d74a-6830-4063-983a-6cf1bb288a1f?org_if_sml=11536"
                alt="Ellipse44011"
                className={styles['ellipse4']}
              />
              <img
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e752d23-57c0-4c69-bc4b-80fd8cc52360/b661cf43-dfb8-41d5-afc9-d5a43cc485a3?org_if_sml=11497"
                alt="Ellipse54012"
                className={styles['ellipse5']}
              />
            </div>
          </div>
          <div className={styles['carousel']}>
            <div className={styles['comments']}>
              <img
                src="/playground_assets/vector408-543n.svg"
                alt="Vector408"
                className={styles['vector']}
              />
              <span className={styles['text058']}>
                <span>
                  Tempor tristique urna a ultricies vulputate morbi ornare odio
                  eleifend. A habitant fringilla tincidunt eu at augue sapien,
                  purus. Pretium sit porttitor sit in nibh dui nulla. Urna arcu
                  in velit tellus. Mattis elit non sit commodo, lobortis pretium
                  rhoncus cursus sollicitudin. Tincidunt at vitae, magna odio.
                  Viverra cras scelerisque id ultrices. Phasellus nisi volutpat
                  eget enim suspendisse adipiscing malesuada.
                </span>
              </span>
            </div>
            <div className={styles['carouseldots']}>
              <img
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e752d23-57c0-4c69-bc4b-80fd8cc52360/021f85d1-c4c1-49e5-97a5-1243b7b9950b?org_if_sml=1233"
                alt="Ellipse64115"
                className={styles['ellipse6']}
              />
              <img
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e752d23-57c0-4c69-bc4b-80fd8cc52360/0a833f10-ef7d-47db-a2d1-15dec0803c77?org_if_sml=1251"
                alt="Ellipse74116"
                className={styles['ellipse7']}
              />
              <img
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e752d23-57c0-4c69-bc4b-80fd8cc52360/9e7b1f02-32fd-477e-8ef2-a363fb858976?org_if_sml=1242"
                alt="Ellipse84117"
                className={styles['ellipse8']}
              />
            </div>
            <span className={styles['text060']}>
              <span>Devon Lane</span>
            </span>
          </div>
        </div>
        <div className={styles['onlinebooking']}>
          <span className={styles['text062']}>
            <span>Online Booking</span>
          </span>
          <span className={styles['text064']}>
            <span>
              <span>Easily review booking requests from</span>
              <br></br>
              <span>
                potential roommates. Once you approve
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                their booking, we’ll take your listing off the market.
              </span>
            </span>
          </span>
        </div>
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e752d23-57c0-4c69-bc4b-80fd8cc52360/6c811eed-743f-4c2f-8d6a-77183ff112cd?org_if_sml=1160574"
          alt="IMAGE4thimg4127"
          className={styles['i-m-a-g-e4thimg']}
        />
        <div className={styles['privacy']}>
          <span className={styles['text071']}>
            <span>Privacy</span>
          </span>
          <span className={styles['text073']}>
            <span>
              <span>Keep your contact info private by</span>
              <br></br>
              <span>chatting to potential roommates through</span>
              <br></br>
              <span>the Roomies app or website</span>
            </span>
          </span>
        </div>
        <div className={styles['securepayment']}>
          <span className={styles['text080']}>
            <span>Secure Payments</span>
          </span>
          <span className={styles['text082']}>
            <span>
              <span>
                Once you find a room,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                we hold and safely transfer your first month’s
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>rent payment to the lister.</span>
              <br></br>
              <span>No sketchy, offline cash payments!</span>
            </span>
          </span>
          <img
            src="/playground_assets/vector34130-sfb.svg"
            alt="Vector34130"
            className={styles['vector3']}
          />
        </div>
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e752d23-57c0-4c69-bc4b-80fd8cc52360/a620388a-432b-4cbf-91c9-cacc8cf4efb4?org_if_sml=1181536"
          alt="IMAGE5thimg4299"
          className={styles['i-m-a-g-e5thimg']}
        />
        <div className={styles['lookingforroommate']}>
          <div className={styles['rentaroom']}>
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e752d23-57c0-4c69-bc4b-80fd8cc52360/fcdf58fe-6163-4ca5-969e-4bf21e079219?org_if_sml=18539"
              alt="Normal4254"
              className={styles['normal']}
            />
            <span className={styles['text091']}>
              <span>Filling an Empty Room?</span>
            </span>
            <div className={styles['button1']}>
              <span className={styles['text093']}>
                <span>Create a listing</span>
              </span>
            </div>
          </div>
        </div>
        <div className={styles['lookingforroommate1']}>
          <div className={styles['rentaroom1']}>
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e752d23-57c0-4c69-bc4b-80fd8cc52360/928df1ca-c17f-4ed3-ad9c-c43c4e83c264?org_if_sml=18523"
              alt="Normal4264"
              className={styles['normal1']}
            />
            <span className={styles['text095']}>
              <span>Looking for a Room?</span>
            </span>
            <div className={styles['button2']}>
              <span className={styles['text097']}>
                <span>Search Rooms</span>
              </span>
            </div>
          </div>
        </div>
        <div className={styles['reviews']}>
          <span className={styles['text099']}>
            <span>Roomies Testimonials</span>
          </span>
          <div className={styles['comment1']}>
            <span className={styles['text101']}>
              <span>
                Porta aliquam, ut est molestie eu. Mauris, quam volutpat risus
                etiam rhoncus.
              </span>
            </span>
            <img
              src="/playground_assets/comments4277-sw5w.svg"
              alt="comments4277"
              className={styles['comments1']}
            />
            <img
              src="/playground_assets/comments4279-jtl.svg"
              alt="comments4279"
              className={styles['comments2']}
            />
            <span className={styles['text103']}>
              <span>-Alex</span>
            </span>
          </div>
          <div className={styles['comment2']}>
            <span className={styles['text105']}>
              <span>
                In hendrerit lectus lacus et nulla mattis proin. Egest ultricies
                viverra ut morbi leo.
              </span>
            </span>
            <img
              src="/playground_assets/comments4285-iyr.svg"
              alt="comments4285"
              className={styles['comments3']}
            />
            <img
              src="/playground_assets/comments4287-7ig8.svg"
              alt="comments4287"
              className={styles['comments4']}
            />
            <span className={styles['text107']}>
              <span>-Ralph</span>
            </span>
          </div>
          <div className={styles['comment3']}>
            <span className={styles['text109']}>
              <span>
                Tellus est eget sit sed tempus. Pretium mi ac at massa dolo
                donec egestas turpis.
              </span>
            </span>
            <img
              src="/playground_assets/comments4291-f4k9.svg"
              alt="comments4291"
              className={styles['comments5']}
            />
            <img
              src="/playground_assets/comments4293-oqn.svg"
              alt="comments4293"
              className={styles['comments6']}
            />
            <span className={styles['text111']}>
              <span>-Emma</span>
            </span>
          </div>
        </div>
        <div className={styles['footer']}>
          <div className={styles['contact']}>
            <span className={styles['text113']}>
              <span>Terms &amp; Conditions</span>
            </span>
            <span className={styles['text115']}>
              <span>Help Center</span>
            </span>
            <span className={styles['text117']}>
              <span>Contact Support</span>
            </span>
            <span className={styles['text119']}>
              <span>Contact:</span>
            </span>
          </div>
          <div className={styles['media']}>
            <span className={styles['text121']}>
              <span>Testimonials</span>
            </span>
            <span className={styles['text123']}>
              <span>Blog</span>
            </span>
            <span className={styles['text125']}>
              <span>Partnership</span>
            </span>
            <span className={styles['text127']}>
              <span>Media:</span>
            </span>
          </div>
          <div className={styles['mission']}>
            <span className={styles['text129']}>
              <span>Our Mission</span>
            </span>
            <span className={styles['text131']}>
              <span>To find you that bubble of comfort!</span>
            </span>
          </div>
          <div className={styles['company']}>
            <span className={styles['text133']}>
              <span>How Roomie works</span>
            </span>
            <span className={styles['text135']}>
              <span>About</span>
            </span>
            <span className={styles['text137']}>
              <span>Company:</span>
            </span>
          </div>
          <div className={styles['socialmedia']}>
            <img
              src="/playground_assets/linkedinsvgrepocom4519-xyd.svg"
              alt="linkedinsvgrepocom4519"
              className={styles['linkedinsvgrepocom']}
            />
            <img
              src="/playground_assets/instagramsvgrepocom4539-ptqu.svg"
              alt="instagramsvgrepocom4539"
              className={styles['instagramsvgrepocom']}
            />
            <img
              src="/playground_assets/twittersvgrepocom4559-x6xg.svg"
              alt="twittersvgrepocom4559"
              className={styles['twittersvgrepocom']}
            />
          </div>
          <div className={styles['copyright']}>
            <img
              src="/playground_assets/copyright4416-f6ha.svg"
              alt="copyright4416"
              className={styles['copyright1']}
            />
            <span className={styles['text139']}>
              <span>2022 Roomies inc.</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
