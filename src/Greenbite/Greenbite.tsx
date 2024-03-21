import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Greenbite.module.css';
import { PlayIcon } from './PlayIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 3:2 */
export const Greenbite: FC<Props> = memo(function Greenbite(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.hero}>
        <div className={classes.divHero__SCHeroTextContainerIh}>
          <div className={classes.divHero__SCCTAContainerIhjli36}>
            <div className={classes.divHero__SCCTAContainerIhjli362}>
              <div className={classes.link}>
                <button className={classes.button}>
                  <div className={classes.spanMuiButtonLabel}>
                    <div className={classes.orderNow}>Order now</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className={classes.heading1Margin}>
            <div className={classes.pMuiTypographyRoot}>
              <div className={classes.noArtificialIngredientsNoChemi}>No artificial ingredients. No chemicals.</div>
            </div>
            <div className={classes.freshCleanHealthyOrganicMealsD}>
              <div className={classes.textBlock}>Fresh,clean,</div>
              <div className={classes.textBlock2}>healthy&amp; organic meals delivered.</div>
            </div>
            <div className={classes.heading1}>
              <div className={classes.fromFarmToYourTable}>From Farm To Your Table</div>
            </div>
          </div>
        </div>
        <div className={classes.divHero__SCHeroImageContainerI}>
          <div className={classes.homepagePostcardJpg}></div>
        </div>
      </div>
      <div className={classes.frame1}>
        <div className={classes.divRow}>
          <div className={classes.divFeatureItemWrap}>
            <div className={classes.p}>
              <div className={classes.oRGANICPng}></div>
            </div>
            <div className={classes.heading5}>
              <div className={classes.organic}>Organic</div>
            </div>
          </div>
          <div className={classes.divFeatureItemWrap2}>
            <div className={classes.p2}>
              <div className={classes.pLANTBASEDPng}></div>
            </div>
            <div className={classes.heading52}>
              <div className={classes.plantBased}>Plant-Based</div>
            </div>
          </div>
          <div className={classes.divFeatureItemWrap3}>
            <div className={classes.p3}>
              <div className={classes.dAIRYFREEPng}></div>
            </div>
            <div className={classes.heading53}>
              <div className={classes.dairyFree}>Dairy-Free</div>
            </div>
          </div>
          <div className={classes.divFeatureItemWrap4}>
            <div className={classes.p4}>
              <div className={classes.gLUTENFREEPng}></div>
            </div>
            <div className={classes.heading54}>
              <div className={classes.mOSTLYGlutenFree}>
                <div className={classes.textBlock3}>MOSTLY Gluten-</div>
                <div className={classes.textBlock4}>Free</div>
              </div>
            </div>
          </div>
          <div className={classes.divFeatureItemWrap5}>
            <div className={classes.p5}>
              <div className={classes.nOREFINEDSUGARPng}></div>
            </div>
            <div className={classes.heading55}>
              <div className={classes.noRefinedSugar}>
                <div className={classes.textBlock5}>No Refined</div>
                <div className={classes.textBlock6}>Sugar</div>
              </div>
            </div>
          </div>
          <div className={classes.divFeatureItemWrap6}>
            <div className={classes.p6}>
              <div className={classes.nONGMOPng}></div>
            </div>
            <div className={classes.heading56}>
              <div className={classes.nonGMO}>Non-GMO</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.divScICfMLu}>
        <div className={classes.divPfC}>
          <div className={classes.divScXxNYO}>
            <div className={classes.heading2}>
              <div className={classes.selectYourMealPlanToday}>Select your meal plan today!</div>
            </div>
            <div className={classes.divScDFtzxp}>
              <div className={classes.divPfSlider}>
                <div className={classes.divPfSlide}>
                  <div className={classes.divScEPIFMk}>
                    <div className={classes.divScICfMLu2}>
                      <div className={classes.divPfC2}>
                        <div className={classes.divScXxNYO2}>
                          <div className={classes._11_ba6b621d49594464B035F8eecda}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.divPfSlide2}>
                  <div className={classes.divScEPIFMk2}>
                    <div className={classes.divScICfMLu3}>
                      <div className={classes.divPfC3}>
                        <div className={classes.divScXxNYO3}>
                          <div className={classes._11_19ca0d27E3084fb8Ac5c57790fc}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.divPfSlide3}>
                  <div className={classes.divScEPIFMk3}>
                    <div className={classes.divScICfMLu4}>
                      <div className={classes.divPfC4}>
                        <div className={classes.divScXxNYO4}>
                          <div className={classes.weightloss_BANNERPng}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.divPfSlide4}>
                  <div className={classes.divScEPIFMk4}>
                    <div className={classes.divScICfMLu5}>
                      <div className={classes.divPfC5}>
                        <div className={classes.divScXxNYO5}>
                          <div className={classes.wEEKLY_MEAL_PLANS_5a9c625731d4}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.divScDFtzxp2}>
              <div className={classes.divPfSlider2}>
                <div className={classes.divPfSlide5}>
                  <div className={classes.divScEPIFMk5}>
                    <div className={classes.divScICfMLu6}>
                      <div className={classes.divPfC6}>
                        <div className={classes.divScXxNYO6}>
                          <div className={classes._10_5a31899f67354d2eA34539494b4}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.divPfSlide6}>
                  <div className={classes.divScEPIFMk6}>
                    <div className={classes.divScICfMLu7}>
                      <div className={classes.divPfC7}>
                        <div className={classes.divScXxNYO7}>
                          <div className={classes._11_ac57c99910da4f24B09d1811027}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.divPfSlide7}>
                  <div className={classes.divScEPIFMk7}>
                    <div className={classes.divScICfMLu8}>
                      <div className={classes.divPfC8}>
                        <div className={classes.divScXxNYO8}>
                          <div className={classes.low_calorie_bannerJpg}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.divPfSlide8}>
                  <div className={classes.divScEPIFMk8}>
                    <div className={classes.divScICfMLu9}>
                      <div className={classes.divPfC9}>
                        <div className={classes.divScXxNYO9}>
                          <div className={classes._10_11314614Cca24ca3A80567926a0}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.divSiteoriginWidgetTinymce}>
        <div className={classes.divContainer}>
          <div className={classes.heading12}></div>
          <div className={classes.list}>
            <div className={classes.item}>
              <div className={classes.screen_Shot_2018819_at_84024_P}></div>
              <div className={classes.heading4}>
                <div className={classes._1SelectYourPlan}>1. Select your plan</div>
              </div>
              <div className={classes.p7}>
                <div className={classes.addYourDesiredPlanToYourCart}>Add your desired plan to your cart.</div>
              </div>
            </div>
            <div className={classes.item2}>
              <div className={classes.screen_Shot_2018819_at_6484_PM}></div>
              <div className={classes.heading42}>
                <div className={classes._2ScheduleYourDeliveryOrPickUp}>
                  <div className={classes.textBlock7}>2. Schedule your </div>
                  <div className={classes.textBlock8}>Delivery or Pick Up</div>
                </div>
              </div>
              <div className={classes.p8}>
                <div className={classes.orderDeadlineIsThursdayAt8pmDe}>
                  <div className={classes.textBlock9}>Order deadline is Thursday at 8pm.</div>
                  <div className={classes.textBlock10}>Deliveries are Sunday between 4pm – 7pm.</div>
                  <div className={classes.textBlock11}>Pick up is 3:30 - 4pm</div>
                </div>
              </div>
            </div>
            <div className={classes.item3}>
              <div className={classes.screen_Shot_2018819_at_84125_P}></div>
              <div className={classes.heading43}>
                <div className={classes._3HeatEnjoy}>3. Heat &amp; Enjoy</div>
              </div>
              <div className={classes.p9}>
                <div className={classes.yourMealsArriveFullyCookedAndR}>
                  <div className={classes.textBlock12}>Your meals arrive fully cooked and ready to</div>
                  <div className={classes.textBlock13}>eat. Heating instructions are included on</div>
                  <div className={classes.textBlock14}>each meal label. No shopping, cooking or</div>
                  <div className={classes.textBlock15}>clean up required.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.section}>
        <div className={classes.divContainer2}>
          <div className={classes.heading3}>
            <div className={classes.whatPeopleAreSaying}>What People Are Saying</div>
          </div>
          <div className={classes.divRow2}>
            <div className={classes.divColXs12}>
              <div className={classes.divTextCenter}>
                <div className={classes.heading6Margin}>
                  <div className={classes.heading6}>
                    <div className={classes.mJ}>M. J.</div>
                  </div>
                </div>
                <div className={classes.p10}>
                  <div className={classes.iReallyLoveHowCreativeYourMeal}>
                    <div className={classes.textBlock16}>I really love how creative your</div>
                    <div className={classes.textBlock17}>meals are. You pair things that</div>
                    <div className={classes.textBlock18}>I would never have paired and</div>
                    <div className={classes.textBlock19}>use ingredients that no one</div>
                    <div className={classes.textBlock20}>thinks of or maybe they are</div>
                    <div className={classes.textBlock21}>not sure how to curate.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.divColXs122}>
              <div className={classes.divTextCenter2}>
                <div className={classes.heading6Margin2}>
                  <div className={classes.heading62}>
                    <div className={classes.cC}>C.C.</div>
                  </div>
                </div>
                <div className={classes.p11}>
                  <div className={classes.yourMealsHaveHelpedMeStayConsi}>
                    <div className={classes.textBlock22}>Your meals have helped me</div>
                    <div className={classes.textBlock23}>stay consistent with my</div>
                    <div className={classes.textBlock24}>monthly blood work, due to</div>
                    <div className={classes.textBlock25}>my auto immune disease.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.divColXs123}>
              <div className={classes.divTextCenter3}>
                <div className={classes.heading6Margin3}>
                  <div className={classes.heading63}>
                    <div className={classes.jL}>J. L.</div>
                  </div>
                </div>
                <div className={classes.p12}>
                  <div className={classes.everyWeekIGetExcitedForMyVolca}>
                    <div className={classes.textBlock26}>Every week I get excited for</div>
                    <div className={classes.textBlock27}>my volcano of deliciousness to</div>
                    <div className={classes.textBlock28}>be delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.divPfC10}>
        <div className={classes.divScXxNYO10}>
          <div className={classes.wHYUS}>WHY US?</div>
          <div className={classes.pScJUosCB}>
            <div className={classes._1}>1</div>
            <div className={classes.everyOrderIsLookedAtByAQualifi}>
              <div className={classes.textBlock29}>Every order is looked at by a qualified nutritionist.</div>
              <div className={classes.textBlock30}>We make sure your macros, calories and vitamins are</div>
            </div>
            <div className={classes.accountedForYouCanBeSureYouWil}>
              <div className={classes.textBlock31}>accounted for. </div>
              <div className={classes.textBlock32}>You can be sure you will reach your health goals quickly</div>
              <div className={classes.textBlock33}>and safely. </div>
            </div>
          </div>
          <div className={classes.pScJUosCB2}>
            <div className={classes._2}>2</div>
            <div className={classes.noOtherKetoMealPlanServiceOffe}>
              <div className={classes.textBlock34}>No other Keto Meal plan service offers 100%</div>
              <div className={classes.textBlock35}>customisable meals made by chefs.</div>
            </div>
            <div className={classes.everyMealIsMadeJUSTFORYOU}>Every meal is made JUST FOR YOU. </div>
            <div className={classes.otherServicesThatClaimToBeCust}>
              <div className={classes.textBlock36}>Other services that claim to be customisable are not</div>
              <div className={classes.textBlock37}>really… WHY? Because no other company cooks EVERY</div>
              <div className={classes.textBlock38}>MEAL individually for you!</div>
            </div>
            <div className={classes.needLessSaltEasyNoSoyEasyYouTe}>
              <div className={classes.textBlock39}>Need less salt? Easy! No soy? Easy! You tell us what you</div>
              <div className={classes.textBlock40}>don’t want included and your meals will be made just for</div>
              <div className={classes.textBlock41}>you.</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.divNeedsclickMargin}>
        <div className={classes.divNeedsclick}>
          <div className={classes.divNeedsclick2}></div>
        </div>
      </div>
      <div className={classes.divHustlePopupContent}></div>
      <div className={classes.divHustleLayout}>
        <div className={classes.pHustleNsaLink}>
          <div className={classes.linkNoThanksIMNotInterested}>No thanks, I’m not interested!</div>
        </div>
        <div className={classes.divHustleMainWrapper}>
          <div className={classes.divHustleLayoutBody}>
            <div className={classes.divHustleLayoutContent}>
              <div className={classes.divHustleContent}>
                <div className={classes.divHustleContentWrap}>
                  <div className={classes.spanHustleSubtitle}>
                    <div className={classes.receiveWeeklyMenusAnd20OffYour}>
                      <div className={classes.textBlock42}>Receive weekly menus and 20%</div>
                      <div className={classes.textBlock43}>off your first order when you</div>
                      <div className={classes.textBlock44}>subscribe.</div>
                    </div>
                  </div>
                  <div className={classes.p13}>
                    <div className={classes.weDeliverAllOrganicFreshAndFul}>
                      <div className={classes.textBlock45}>
                        We deliver all-organic, fresh, and fully prepared meals to Los Angeles
                      </div>
                      <div className={classes.textBlock46}>residents.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.form}>
                <div className={classes.divHustleFormFields}>
                  <div className={classes.divHustleFieldMargin}>
                    <div className={classes.divHustleField}>
                      <div className={classes.input}></div>
                      <div className={classes.spanHustleInputLabel}>
                        <div className={classes.span}>
                          <div className={classes.name}>Name</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.divHustleFieldMargin2}>
                    <div className={classes.divHustleField2}>
                      <div className={classes.input2}></div>
                      <div className={classes.spanHustleInputLabel2}>
                        <div className={classes.span2}>
                          <div className={classes.email}>Email</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.buttonMargin}>
                    <button className={classes.button2}>
                      <div className={classes.submit}>Submit</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.button3}>
            <div className={classes.spanHustleIconClose}>
              <div className={classes.Before}>
                <div className={classes.symbol}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.divSbi_photo_wrap}>
        <div className={classes.link2}></div>
        <div className={classes.play}>
          <PlayIcon className={classes.icon} />
        </div>
      </div>
      <div className={classes.divTopFooter}>
        <div className={classes.divContainer3}>
          <div className={classes.divRow3}>
            <div className={classes.figureLink}>
              <div className={classes.greenBite}>
                <div className={classes.textBlock47}>Green</div>
                <div className={classes.textBlock48}>bite</div>
              </div>
            </div>
            <div className={classes.divColXs124}>
              <div className={classes.list2}>
                <div className={classes.itemLink}>
                  <div className={classes.iFaFacebook}>
                    <div className={classes.symbol2}></div>
                  </div>
                </div>
                <div className={classes.itemLink2}>
                  <div className={classes.iFaInstagram}>
                    <div className={classes.symbol3}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.divRow4}>
              <div className={classes.link3}>
                <div className={classes.home}>Home</div>
              </div>
              <div className={classes.link4}>
                <div className={classes.about}>About</div>
              </div>
              <div className={classes.link5}>
                <div className={classes.ourFood}>Our food</div>
              </div>
              <div className={classes.link6}>
                <div className={classes.contactUs}>contact us</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.header}>
        <div className={classes.divDesktopTopNav__TopNavWrappe}>
          <div className={classes.divMuiGridRoot}>
            <div className={classes.divMuiBoxRootMargin}>
              <div className={classes.divMuiBoxRoot}>
                <div className={classes.pMuiTypographyRoot2}>
                  <div className={classes.spanMargin}>
                    <div className={classes.congratsYouVeEarned10OffEachOf}>
                      Congrats! You&#39;ve earned 10% off each of your first three orders of Rs.350 or more
                    </div>
                  </div>
                  <div className={classes.button4}>
                    <div className={classes.learnMore}>Learn More</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.divMuiBoxRoot2}>
              <div className={classes.pMuiTypographyRoot3}>
                <div className={classes.link7}>
                  <div className={classes.logIntoYourAccount}>Log into your account</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.nav}>
          <div className={classes.Before2}></div>
          <div className={classes.greenBite2}>
            <div className={classes.textBlock49}>Green</div>
            <div className={classes.textBlock50}>bite</div>
          </div>
          <div className={classes.list3}>
            <div className={classes.item4}>
              <div className={classes.link8}>
                <div className={classes.home2}>Home</div>
              </div>
            </div>
            <div className={classes.item5}>
              <div className={classes.link9}>
                <div className={classes.aboutUs}>About Us</div>
              </div>
            </div>
            <div className={classes.item6}>
              <div className={classes.link10}>
                <div className={classes.ourFood2}>Our Food</div>
              </div>
            </div>
            <div className={classes.item7}>
              <div className={classes.link11}>
                <div className={classes.testimonials}>Testimonials</div>
              </div>
            </div>
            <div className={classes.item8}>
              <div className={classes.link12}>
                <div className={classes.contactUs2}>Contact us</div>
              </div>
            </div>
            <div className={classes.item9}>
              <button className={classes.linkButton}>
                <div className={classes.spanMuiButtonLabel2}>
                  <div className={classes.orderNow2}>Order Now</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
